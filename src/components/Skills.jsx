import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Database, 
  Brain, 
  Wrench,
  Github,
  Zap
} from 'lucide-react'
// tech logos
import {
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiKotlin,
  SiFirebase,
  SiPython,
  SiGit
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Angular', icon: SiAngular },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Bootstrap', icon: SiBootstrap }
      ]
    },
    {
      title: 'App Development',
      icon: Smartphone,
      color: 'purple',
      skills: [
        { name: 'React Native', icon: SiReact },
        { name: 'Kotlin', icon: SiKotlin },
        { name: 'Firebase', icon: SiFirebase }
      ]
    },
    {
      title: 'Blockchain',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'Hardhat' },
        { name: 'Thirdweb' },
        { name: 'Ethereum Wallets', icon: Zap }
      ]
    },
    {
      title: 'Embeded/AI',
      icon: Brain,
      color: 'orange',
      skills: [
        { name: 'YOLOv11', icon: SiPython },
        { name: 'OpenCV', icon: SiPython },
        { name: 'Python', icon: SiPython },
        { name: 'Network X', icon: SiPython },
        { name: 'Sensors' },
        { name: 'Dave-2' }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'gray',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: Github }
      ]
    }
  ]

  return (
    <section className="section gradient-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">
            Skills & Technologies
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern web applications, mobile apps, and blockchain solutions.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`skill-card ${category.color}`}
            >
              <div className="skill-header">
                <div className={`skill-icon ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className={`skill-title ${category.color}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="skill-item"
                  >
                    {skill.icon ? (
                      <skill.icon size={16} style={{ color: '#6b7280' }} />
                    ) : (
                      <div className="skill-dot" />
                    )}
                    <span className="skill-name">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
