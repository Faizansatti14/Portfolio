import { motion } from 'framer-motion'
import { ExternalLink, Github, Database, Car, Heart, Cloud, Gamepad2 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Crowdfunding DApp',
      description: 'A decentralized crowdfunding platform built with blockchain technology, enabling secure and transparent fundraising.',
      tech: ['Hardhat', 'Thirdweb', 'React', 'Solidity', 'Ethereum'],
      icon: Database,
      gradient: 'blue',
      link: '#',
      github: '#'
    },
    {
      title: 'Smart Solar Vehicle (FYP)',
      description: 'Autonomous solar vehicle with YOLOv5 object detection, Raspberry Pi control, GPS navigation, and Flask backend.',
      tech: ['YOLOv11', 'Raspberry Pi', 'Python', 'OpenCV', 'Flask', 'GPS','Ultrasonic Sensors','Camera','Object Detection'],
      icon: Car,
      gradient: 'green',
      link: '#',
      github: '#'
    },
    {
      title: 'Doctor Appointment App',
      description: 'Healthcare platform for equipment rentals, doctor appointments, and medical services with Responsive Design.',
      tech: ['Firebase', 'Kotlin','Responsive Design','Android Studio'],
      icon: Heart,
      gradient: 'red',
      link: '#',
      github: 'https://github.com/Faizansatti14/Doctors-Appointment-Booking-App.git'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with API integration, providing current conditions and forecasts.',
      tech: ['React', 'Weather API', 'CSS3', 'JavaScript','Web App','Mobile App'],
      icon: Cloud,
      gradient: 'cyan',
      link: '#',
      github: 'https://github.com/Faizansatti14/PRODIGY_WD_05.git'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'Interactive React-based game with modern UI and smooth animations.',
      tech: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      icon: Gamepad2,
      gradient: 'orange',
      link: '#',
      github: 'https://github.com/Faizansatti14/PRODIGY_WD_03.git'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A showcase of my work across web development, mobile apps, blockchain, and AI/ML projects.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="project-card"
            >
              <div className="project-content">
                {/* Icon */}
                <div className={`project-icon ${project.gradient}`}>
                  <project.icon size={24} />
                </div>

                {/* Title */}
                <h3 className="project-title">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="project-link"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="project-link secondary"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
