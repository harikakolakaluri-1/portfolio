import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Technical Summary</h3>
              <p>
                I am a highly motivated Civil Engineering graduate with a 9.13 CGPA, currently pursuing an MBA at NIT Warangal. 
                My unique combination of strong technical acumen and strategic business insights positions me to bridge the gap 
                between engineering excellence and business innovation.
              </p>
            </div>
            
            <div className="about-expertise">
              <h3>Core Expertise</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">🏗️</div>
                  <h4>Structural Design & Analysis</h4>
                  <p>Proven expertise in structural design and analysis using industry-standard software</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">💻</div>
                  <h4>Software Proficiency</h4>
                  <p>Skilled in AutoCAD, STAAD Pro, Revit, and Python programming</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">📊</div>
                  <h4>Business Strategy</h4>
                  <p>Developing strategic business insights through MBA studies at NIT Warangal</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🎯</div>
                  <h4>Project Leadership</h4>
                  <p>Demonstrated leadership and problem-solving through academic projects</p>
                </div>
              </div>
            </div>
            
            <div className="about-approach">
              <h3>My Approach</h3>
              <p>
                I believe in combining meticulous attention to detail with strategic thinking to deliver high-quality work 
                that drives organizational objectives. My background in civil engineering provides me with a solid foundation 
                in technical problem-solving, while my MBA studies enhance my ability to understand business challenges 
                and implement effective solutions.
              </p>
            </div>
          </div>
          
          <div className="about-sidebar">
            <div className="about-card">
              <h4>Quick Facts</h4>
              <ul className="facts-list">
                <li><strong>Location:</strong> Visakhapatnam</li>
                <li><strong>Email:</strong> Harika.kolakaluri@gmail.com</li>
                <li><strong>Phone:</strong> 7095983691</li>
                <li><strong>LinkedIn:</strong> harikakolakaluri</li>
              </ul>
            </div>
            
            <div className="about-card">
              <h4>Key Strengths</h4>
              <div className="strengths-grid">
                <span className="strength-tag">Leadership</span>
                <span className="strength-tag">Problem Solving</span>
                <span className="strength-tag">Technical Acumen</span>
                <span className="strength-tag">Strategic Thinking</span>
                <span className="strength-tag">Attention to Detail</span>
                <span className="strength-tag">Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
