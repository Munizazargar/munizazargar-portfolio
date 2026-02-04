'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Edu Hub ',
      period: '2022-2023',
      description: 'Blog-based educational content management application.',
      technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'Authentication'],
      features: [
        'CRUD operations for content management',
        'User authentication and authorization',
        'Database integration with SQL Server',
        'Responsive design'
      ],
      github: 'https://github.com/Munizazargar/EduHub',
      demo: ''
    },
    {
      title: 'Devs Outreach',
      period: '2024-2025',
      description: 'Developer community platform built with modern web technologies',
      technologies: ['TypeScript', 'Next.js'],
      features: [
        'Modern React-based architecture',
        'Type-safe development with TypeScript',
        'Server-side rendering with Next.js',
        'Optimized performance and SEO'
      ],
      github: 'https://github.com/Munizazargar/Devs_Outreach',
      demo: ''
    },
     {
  title: 'Wular i Tech Solutions',
  period: '2025-2026',
  description: 'Delivering modern solutions to real-world problems using .NET MVC architecture and SQL Server database.',
  technologies: ['C#', 'ASP.NET Core MVC', 'HTML', 'CSS', 'JavaScript', 'MSSQL'],
  features: [
    'MVC architecture for structured development',
    'Server-side rendering with Razor views',
    'Database integration with MSSQL',
    'CRUD operations for dynamic data management',
    'Secure user authentication and session management'
  ],
  github: 'https://github.com/Munizazargar/Client',
  demo: '' // you can add a link later if deployed
}



  ];

  return (
    <section id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="project-card"
    >
      {project.status && (
        <motion.span 
          className="project-status"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        >
          {project.status}
        </motion.span>
      )}
      
      <h3 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '0.5rem',
        color: 'var(--text-primary)'
      }}>
        {project.title}
      </h3>
      
      <p style={{ 
        color: 'var(--accent)', 
        fontSize: '0.875rem',
        marginBottom: '1rem'
      }}>
        {project.period}
      </p>
      
      <p style={{ 
        color: 'var(--text-secondary)',
        marginBottom: '1rem'
      }}>
        {project.description}
      </p>
      
      <div className="tech-stack">
        {project.technologies.map((tech: string, i: number) => (
          <motion.span 
            key={i} 
            className="tech-badge"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      
      <ul style={{ 
        listStyle: 'none', 
        paddingLeft: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginTop: '1rem'
      }}>
        {project.features.map((feature: string, i: number) => (
          <motion.li 
            key={i} 
            style={{ 
              paddingLeft: '1.5rem', 
              position: 'relative',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem'
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span style={{ 
              position: 'absolute', 
              left: 0,
              color: 'var(--accent)'
            }}>✓</span>
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* Project Links */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '1.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--border)'
      }}>
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              borderColor: 'var(--accent)',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>💻</span>
            GitHub
          </motion.a>
        )}

        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🚀</span>
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}