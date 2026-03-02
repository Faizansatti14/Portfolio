import { motion } from 'framer-motion'
import { ChevronDown, Code, Smartphone, Database } from 'lucide-react'
import ProfilePic from '../assets/faizan pic.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 25%, rgba(236, 72, 153, 0.2) 50%, rgba(59, 130, 246, 0.2) 75%, rgba(147, 51, 234, 0.2) 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        pointerEvents: 'none'
      }}>
        {/* Floating Shapes */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
          backdropFilter: 'blur(10px)',
          animation: 'float 20s infinite linear',
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))',
          backdropFilter: 'blur(10px)',
          animation: 'float 25s infinite linear',
          boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))',
          backdropFilter: 'blur(10px)',
          animation: 'float 18s infinite linear',
          boxShadow: '0 8px 32px rgba(236, 72, 153, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '30%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))',
          backdropFilter: 'blur(10px)',
          animation: 'float 22s infinite linear',
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '40%',
          right: '5%',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.25), rgba(236, 72, 153, 0.25))',
          backdropFilter: 'blur(10px)',
          animation: 'float 16s infinite linear',
          boxShadow: '0 8px 32px rgba(147, 51, 234, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hero-content"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            Muhammad Faizan Satti
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            Frontend, App & Blockchain Developer | AI/ML Enthusiast | Autonomous Vehicle Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-description"
          >
            Passionate about creating innovative solutions that bridge the gap between technology and user experience.
          </motion.p>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="hero-icons"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="hero-icon"
            >
              <Code size={32} />
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Frontend</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="hero-icon purple"
            >
              <Smartphone size={32} />
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Mobile</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="hero-icon green"
            >
              <Database size={32} />
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Blockchain</span>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ marginTop: '2rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="cta-button"
            >
              <span>View Projects</span>
              <ChevronDown size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }} /* Adjust delay and ease for coherence */
          className="hero-image-container"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <motion.img
            src={ProfilePic}
            alt="Profile"
            className="hero-profile-pic"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }} /* Adjusted delay to start sooner after container */
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '1.5rem',
              height: '2.5rem',
              border: '2px solid #9ca3af',
              borderRadius: '9999px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '0.25rem',
                height: '0.75rem',
                backgroundColor: '#9ca3af',
                borderRadius: '9999px',
                marginTop: '0.5rem'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
