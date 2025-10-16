import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="ems-navigation">
      <div className="ems-nav-container">
        {/* Logo/Brand */}
        <div className="ems-nav-brand">
          <a href="/" className="ems-nav-logo">
            <span className="ems-nav-logo-icon">⚡</span>
            <span className="ems-nav-logo-text">Anurag</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="ems-nav-menu">
          <li className="ems-nav-item">
            <a href="/about" className="ems-nav-link">
              About Me
            </a>
          </li>
          <li className="ems-nav-item">
            <a href="/blog" className="ems-nav-link">
              My blogs
            </a>
          </li>
          <li className="ems-nav-item">
            <a href="/contact" className="ems-nav-link">
              Contact Me
            </a>
          </li>
        </ul>

        {/* User Actions */}
        <div className="ems-nav-actions">
          <button className="ems-nav-login-btn">
            <span className="ems-nav-login-icon">👤</span>
            <span className="ems-nav-login-text">Guest</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`ems-nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="ems-nav-toggle-line"></span>
          <span className="ems-nav-toggle-line"></span>
          <span className="ems-nav-toggle-line"></span>
        </button>
      </div>
      {/* Mobile Menu - Outside container to avoid scroll issues */}
      {isMenuOpen && (
        <div className="ems-nav-mobile-menu">
          <ul className="ems-nav-mobile-list">
            <li className="ems-nav-mobile-item">
              <a
                href="/about"
                className="ems-nav-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </a>
            </li>
            <li className="ems-nav-mobile-item">
              <a
                href="/blog"
                className="ems-nav-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                My Blogs
              </a>
            </li>
            <li className="ems-nav-mobile-item">
              <a
                href="/contact"
                className="ems-nav-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </a>
            </li>
            <li className="ems-nav-mobile-item">
              <div className="ems-nav-mobile-user">
                <span className="ems-nav-user-avatar">👤</span>
                <span className="ems-nav-user-name">Guest</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
