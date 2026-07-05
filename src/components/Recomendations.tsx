'use client';

import { motion } from 'framer-motion';

export default function Recommendations() {
  const recommendations = [
    {
      name: 'Client / Manager Name',
      role: 'Role, Company',
      text: 'Replace this with an actual quote about working with you — specificity beats generic praise.',
    },
    {
      name: 'Client / Manager Name',
      role: 'Role, Company',
      text: 'Replace this with an actual quote about working with you — specificity beats generic praise.',
    },
    {
      name: 'Client / Manager Name',
      role: 'Role, Company',
      text: 'Replace this with an actual quote about working with you — specificity beats generic praise.',
    },
  ];

  return (
    <section id="recommendations" style={{ background: 'var(--bg-secondary)' }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Recommendations
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            animate={{
              y: [0, -10, 0],
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <span style={{ fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }}>
              "
            </span>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.7',
                flexGrow: 1,
              }}
            >
              {rec.text}
            </p>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{rec.name}</p>
              <p style={{ color: 'var(--accent)', fontSize: '0.875rem' }}>{rec.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}