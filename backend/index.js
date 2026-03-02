const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');

const app = express();
const port = 3001;

// Initialize Resend with your API key
const resend = new Resend('re_7iKibE2d_HAX9agvwPnnpLxHKXsjzHouV'); 

// Middleware
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You can change this to your verified domain later
      to: ['sattifaizan053@gmail.com'],
      subject: `New message from ${name} via Portfolio Contact Form`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log('Email sent successfully:', data);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email.', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
