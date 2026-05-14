import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const education = [
    {
      type: 'Degree',
      title: 'Bachelor of Science in Software Engineering',
      institution: 'Capital University of Science and Technology',
      duration: '2021 - 2025',
      location: 'Islamabad, Pakistan',
      status: 'Completed',
      description: 'Pursuing a comprehensive computer science degree with focus on software engineering, algorithms, and modern technologies.',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      type: 'Certification',
      title: 'Microsoft Office Specialist',
      institution: 'Microsoft',
      duration: '2020',
      location: 'Punjab College, 6th Road, Rawalpindi, Pakistan',
      status: 'Completed',
      description: 'Professional certification demonstrating advanced proficiency in Microsoft Office applications including Word, Excel, PowerPoint, and Outlook.',
      icon: Award,
      color: 'pink'
    },
    {
      type: 'Certification',
      title: 'IBM Agile Methodology',
      institution: 'IBM',
      duration: '2024',
      location: 'Online',
      status: 'Completed',
      description: 'Comprehensive training in Agile development methodologies, Scrum framework, and project management best practices.',
      icon: Award,
      color: 'green'
    },
    {
      type: 'Certification',
      title: 'SAP Business Analysis',
      institution: 'SAP',
      duration: '2025',
      location: 'Online',
      status: 'In Progress',
      description: 'Professional certification in SAP business analysis, covering enterprise resource planning and business process optimization.',
      icon: Award,
      color: 'purple'
    },
    {
      type: 'Certification',
      title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
      institution: 'Oracle University',
      duration: '2025',
      location: 'Online',
      status: 'In Progress',
      description: 'Certification covering AI foundations and Oracle Cloud Infrastructure services, demonstrating skills in AI concepts, cloud applications, and OCI ecosystem.',
      icon: Award,
      color: 'orange'
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
            Education & Certifications
          </h2>
          <p className="section-subtitle">
            My academic background and professional certifications that shape my expertise.
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`education-card ${item.color}`}
            >
              {/* Header */}
              <div className="education-header">
                <div className={`skill-icon ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <span className={`education-type ${item.color}`}>
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="education-title">
                {item.title}
              </h3>

              {/* Institution */}
              <p className="education-institution">
                {item.institution}
              </p>

              {/* Details */}
              <div className="education-details">
                <div className="education-detail">
                  <Calendar size={16} />
                  <span>{item.duration}</span>
                </div>
                <div className="education-detail">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Status */}
              <div style={{ marginBottom: '1rem' }}>
                <span className={`education-status ${item.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                  {item.status}
                </span>
              </div>

              {/* Description */}
              <p className="education-description">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Academic Focus Areas
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              'Software Engineering',
              'Data Structures',
              'Algorithms',
              'Database Systems',
              'Web Development',
              'Mobile Development',
              'Machine Learning',
              'Blockchain Technology',
              'Autonomous Vehicles Development'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '0.5rem',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
