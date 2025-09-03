import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'AutoCAD', level: 90, icon: '🏗️' },
    { name: 'STAAD Pro', level: 85, icon: '📐' },
    { name: 'Revit', level: 80, icon: '🏢' },
    { name: 'Structural Design', level: 88, icon: '🔧' },
    { name: 'Structural Analysis', level: 85, icon: '📊' }
  ];

  const programmingSkills = [
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'C Programming', level: 70, icon: '⚙️' }
  ];

  const softSkills = [
    'Highly Motivated',
    'Strong Technical Understanding',
    'Strategic Business Insights',
    'Leadership',
    'Problem Solving',
    'Meticulous Attention to Detail',
    'Eagerness to Contribute',
    'Driving Organizational Objectives'
  ];

  const achievements = [
    'Achieved a 9.13 CGPA in Civil Engineering',
    'Developed expertise in industry-standard software',
    'Applied knowledge in structural design and analysis',
    'Demonstrated leadership and problem-solving abilities',
    'Cultivated meticulous attention to detail'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical capabilities and professional strengths
          </p>
        </div>
        
        <div className="skills-content">
          <div className="skills-main">
            <div className="skills-section">
              <h3 className="skills-category-title">
                <span className="category-icon">🏗️</span>
                Technical Skills & Software
              </h3>
              <div className="skills-grid">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3 className="skills-category-title">
                <span className="category-icon">💻</span>
                Programming Languages
              </h3>
              <div className="skills-grid">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-sidebar">
            <div className="skills-card">
              <h4>Soft Skills</h4>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <span key={index} className="soft-skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-card">
              <h4>Key Achievements</h4>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>
                    <span className="achievement-icon">✅</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Technical Foundation</h3>
            <p>
              My expertise in AutoCAD, STAAD Pro, and Revit provides a solid foundation for structural engineering projects. 
              I combine these tools with Python programming skills to create efficient solutions and automate complex calculations.
            </p>
          </div>
          <div className="summary-card">
            <h3>Business Integration</h3>
            <p>
              Through my MBA studies, I'm developing the ability to translate technical solutions into business value, 
              understanding project economics, and driving strategic decisions in construction and infrastructure development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
