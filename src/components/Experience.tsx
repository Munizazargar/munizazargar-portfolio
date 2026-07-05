'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="timeline">

          {/* DevAura */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="card"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start', 
                flexWrap: 'wrap', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <div>
                  <motion.h3 
                    style={{ 
                      color: 'var(--accent)', 
                      fontSize: '1.5rem' 
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Founder & Business Application Developer
                  </motion.h3>
                  
                  <motion.p 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '1.125rem' 
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    DevAura
                  </motion.p>
                </div>
                
                <motion.span 
                  style={{ 
                    background: 'var(--accent)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: 0.4 
                  }}
                >
                  2026 - Present
                </motion.span>
              </div>
              
              <ul style={{ 
                listStyle: 'none', 
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Founded and run a web design & digital presence agency serving local businesses',
                  'Built full-stack e-commerce dashboards and admin panels for client platforms',
                  'Designed and deployed static and full-stack production websites end-to-end, from development to hosting',
                  'Crafted brand identity and storytelling — logos, messaging, and marketing creative for clients',
                  'Manage client acquisition, pricing strategy, and end-to-end project delivery'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    style={{ 
                      paddingLeft: '1.5rem', 
                      position: 'relative', 
                      color: 'var(--text-secondary)' 
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      color: 'var(--accent)' 
                    }}>▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Interface Technologies */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="card"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start', 
                flexWrap: 'wrap', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <div>
                  <motion.h3 
                    style={{ 
                      color: 'var(--accent)', 
                      fontSize: '1.5rem' 
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Full Stack Development Trainee
                  </motion.h3>
                  
                  <motion.p 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '1.125rem' 
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Interface Technologies
                  </motion.p>
                </div>
                
                <motion.span 
                  style={{ 
                    background: 'var(--accent)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: 0.4 
                  }}
                >
                  Aug 2024 - Dec 2025
                </motion.span>
              </div>
              
              <ul style={{ 
                listStyle: 'none', 
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Built CRUD-based applications using C# and SQL, strengthening core backend and database fundamentals',
                  'Developed responsive web applications using HTML, CSS, ASP.NET MVC, and Web API',
                  'Developed frontend applications using React.js with state management via Redux and Context API',
                  'Built and integrated RESTful APIs using Node.js and Express.js with MongoDB',
                  'Used Postman for API testing and collaborated following Agile practices'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    style={{ 
                      paddingLeft: '1.5rem', 
                      position: 'relative', 
                      color: 'var(--text-secondary)' 
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      color: 'var(--accent)' 
                    }}>▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}