import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ems-footer">
      <div className="ems-footer-container">
        <div className="ems-footer-content">
          <div className="ems-footer-brand">
            <h3 className="ems-footer-title">Anurag</h3>
            <p className="ems-footer-tagline">
              Building innovative tools for productivity and learning
            </p>
          </div>

          <div className="ems-footer-social">
            <a
              href="https://github.com/anu3dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ems-footer-social-link"
              aria-label="GitHub"
            >
              <span className="ems-footer-social-icon">🐙</span>
              <span className="ems-footer-social-text">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anu3dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ems-footer-social-link"
              aria-label="LinkedIn"
            >
              <span className="ems-footer-social-icon">💼</span>
              <span className="ems-footer-social-text">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="ems-footer-bottom">
          <p className="ems-footer-copyright">
            © {currentYear} Anurag Kumar. Built with passion for learning and
            growth.
          </p>
        </div>
      </div>
    </footer>
  );
};
