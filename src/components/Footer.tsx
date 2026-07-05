export default function Footer() {
  return (
    <footer className="footer">
      <p style={{ color: 'var(--text-secondary)' }}>
        © {new Date().getFullYear()} Muniza Zargar. Built with Next.js & TypeScript
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
         Developed & Deployed by DevAura. All rights reserved.
      </p>
    </footer>
  );
}