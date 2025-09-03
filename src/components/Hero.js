import React from 'react';
import './Hero.css';
import profile from '../assets/Hk.JPG';
import civil from '../assets/civil.png';
import graduate from '../assets/graduate.png';
import manager from '../assets/manager.png';
import worker from '../assets/work.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Harika Kolakaluri</span>
            </h1>
            <h2 className="hero-subtitle">
              Civil Engineer & MBA Student
            </h2>
            <p className="hero-description">
              Highly motivated Civil Engineering graduate with a 9.13 CGPA, currently pursuing an MBA at NIT Warangal. 
              Combining strong technical acumen with strategic business insights to drive innovation in construction and infrastructure.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">9.13</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Software Tools</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Degrees</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="profile-icon">
                <img src={profile} alt="Profile" />
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">
                <img src={civil} alt="Civil" />
              </div>
              <div className="floating-element element-2">
                <img src={graduate} alt="Graduate" />
              </div>
              <div className="floating-element element-3">
                <img src={manager} alt="Manager" />
              </div>
              <div className="floating-element element-4">
                <img src={worker} alt="Worker" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
