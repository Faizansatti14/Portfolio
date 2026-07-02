const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const parseBody = (req) => new Promise((resolve, reject) => {
  if (req.body) {
    resolve(req.body);
    return;
  }

  let body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    if (!body) {
      resolve({});
      return;
    }

    try {
      resolve(JSON.parse(body));
    } catch {
      resolve({});
    }
  });
  req.on('error', reject);
});

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const body = await parseBody(req);
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP configuration is incomplete.');
    return res.status(500).json({ message: 'SMTP configuration is incomplete.' });
  }

  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'sattifaizan053@gmail.com',
      replyTo: email,
      subject: `New message from ${name} via Portfolio Contact Form`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Email sent successfully:', info.messageId || info.response);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SMTP send failed:', error);
    return res.status(500).json({ message: 'Error sending email.', error: error.message });
  }
};
