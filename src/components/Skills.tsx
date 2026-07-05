'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#']
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux', 'Context API']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', '.NET Framework', 'ASP.NET MVC', 'Web API']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'SQL Server','PostgreSQL', 'Mongoose', 'Entity Framework'  ]
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'MongoDB Compass', 'Render', 'Vercel', 'Netlify']
    }
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 10px 30px var(--shadow)'
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {category.category}
            </motion.h3>
            
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + i * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}