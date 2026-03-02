import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = ({ darkMode, setDarkMode, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #e5e7eb',
        transition: 'all 0.3s'
      }}
    >
      <div 
        className="header-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
          padding: '0 1rem'
        }}
      >
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="logo"
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#2563eb',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
        >
          M.Faizan Satti
        </motion.div>

        {/* Desktop Navigation */}
        <nav 
          className="nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              style={{
                padding: '0.5rem 0.75rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#6b7280',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f3f4f6',
              color: '#6b7280',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f3f4f6',
              color: '#6b7280',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              borderTop: '1px solid #e5e7eb',
              padding: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#6b7280',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s',
                    marginBottom: '0.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
