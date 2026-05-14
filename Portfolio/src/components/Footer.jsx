import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Faizansatti14',
      color: 'github'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/faizan-satti-86a264252/',
      color: 'linkedin'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sattifaizan053@gmail.com',
      color: 'email'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            <p>© 2025 Muhammad Faizan Satti. All rights reserved.</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`footer-social-link ${social.color}`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-info">
          <p>
            Built with ❤️ using React, CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
