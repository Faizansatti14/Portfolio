import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Prodigy Infotech',
      position: 'React Developer Intern',
      duration: '2024',
      location: 'Remote, India',
      description: 'Working on React-based projects including Weather App and Tic-Tac-Toe Game. Collaborating with team members to deliver high-quality web applications.',
      achievements: [
        'Developed responsive weather application with API integration',
        'Created interactive Tic-Tac-Toe game with modern UI',
        'Implemented best practices for React development',
        'Collaborated with cross-functional teams'
      ],
      link: 'https://prodigyinfotech.dev/'
    },
    {
      company: 'ECodeCamp, Lahore',
      position: 'Machine Learning Intern',
      duration: '2024',
      location: 'Remote (Lahore, Pakistan)',
      description: 'Engaged in innovative machine learning projects, gaining hands-on exposure to cutting-edge technologies and methodologies. Collaborated with experienced professionals and contributed to impactful solutions.',
      achievements: [
        'Worked on real-world machine learning projects and research tasks',
        'Gained practical experience with data preprocessing, model training, and evaluation',
        'Explored modern ML frameworks and libraries (e.g., TensorFlow, PyTorch, Scikit-learn)',
        'Collaborated with the team to develop and optimize ML-driven solutions',
        'Enhanced problem-solving and analytical skills through project-based learning'
      ],
      link: 'https://www.linkedin.com/company/ecodecamp/posts/?feedView'
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
            Work Experience
          </h2>
          <p className="section-subtitle">
            My professional journey in software development and web technologies.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="experience-item"
            >
              <div className="experience-dot">
                {index + 1}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">
                    {experience.position}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#6b7280' }}>
                    <span style={{ fontWeight: '500' }}>{experience.company}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={16} />
                      <span style={{ fontSize: '0.875rem' }}>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  <Calendar size={16} />
                  <span>{experience.duration}</span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Key Achievements:
                  </h4>
                  <ul className="achievements-list">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        <div className="achievement-dot" />
                        <span className="achievement-text">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={experience.link}
                  className="project-link"
                >
                  <ExternalLink size={16} />
                  <span>View Company</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
