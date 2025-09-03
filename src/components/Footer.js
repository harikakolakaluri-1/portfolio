import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">HK</span>
              <h3>Harika Kolakaluri</h3>
            </div>
            <p className="footer-description">
              Civil Engineer & MBA Student passionate about combining technical excellence 
              with strategic business insights to drive innovation in construction and infrastructure.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection(link.href.substring(1))}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>
                <span className="contact-icon">📍</span>
                Visakhapatnam, Andhra Pradesh
              </p>
              <p>
                <span className="contact-icon">📧</span>
                <a href="mailto:Harika.kolakaluri@gmail.com">
                  Harika.kolakaluri@gmail.com
                </a>
              </p>
              <p>
                <span className="contact-icon">📱</span>
                <a href="tel:+917095983691">+91 7095983691</a>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a 
                href="https://linkedin.com/in/harikakolakaluri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                💼 LinkedIn
              </a>
              <a 
                href="mailto:Harika.kolakaluri@gmail.com"
                className="social-link"
                title="Email"
              >
                📧 Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Harika Kolakaluri. All rights reserved.
            </p>
            <p className="footer-quote">
              "Building the future, one structure at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
