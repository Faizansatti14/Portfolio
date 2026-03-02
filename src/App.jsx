import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#111827' : '#ffffff', color: darkMode ? '#f9fafb' : '#1f2937', transition: 'background-color 0.3s, color 0.3s' }}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
      />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills" className="gradient-bg">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience" className="gradient-bg">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="contact" className="gradient-bg">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
