'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileDown } from 'lucide-react';
import Background3D from './Background3d';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <Background3D />
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Muniza zargar
        </motion.h1>
        
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer | ASP.NET Core | React | Founder, DevAura
        </motion.p>
        
        <motion.p 
          style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            fontSize: '1.125rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         Building scalable business applications with ASP.NET, React, and modern web technologies — from concept to deployment, backed by real client-facing experience through DevAura.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="btn btn-primary" 
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
          
          <motion.button 
            className="btn btn-secondary" 
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          
          <motion.a 
            href="/resume.pdf" 
            download="Muniza_Zargar_Resume.pdf"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a 
            href="mailto:munizahzargar.iimun@gmail.com" 
            className="social-link" 
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </motion.a>
          
          <motion.a 
            href="https://github.com/munizazargar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" 
            title="GitHub"
            whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com/in/munizazargar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" 
            title="LinkedIn"
            whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: -1
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
            borderRadius: '50%',
            filter: 'blur(50px)',
            zIndex: -1
          }}
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}