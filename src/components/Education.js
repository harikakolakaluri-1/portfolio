import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "MBA DMS",
      institution: "National Institute of Technology, Warangal",
      period: "July 2025 – July 2027",
      gpa: "Present",
      description: "Currently pursuing MBA in Data Management Systems",
      icon: "🎓",
      status: "current"
    },
    {
      id: 2,
      degree: "BTech in Civil Engineering",
      institution: "Anil Neerukonda Institute of Technology Sciences",
      period: "June 2018 – June 2022",
      gpa: "9.13/10.0",
      description: "Specialized in Structural Analysis and Design, Geotechnical Engineering, Transportation Engineering, Construction Engineering and Management, Surveying",
      icon: "🏗️",
      status: "completed"
    },
    {
      id: 3,
      degree: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Narayana Junior College",
      period: "2016 – 2018",
      gpa: "89.1%",
      description: "Intermediate education with focus on core sciences",
      icon: "📚",
      status: "completed"
    },
    {
      id: 4,
      degree: "SSC (Secondary School Certificate)",
      institution: "Sri Chaitanya High School",
      period: "2015 – 2016",
      gpa: "9.0/10.0",
      description: "Secondary education with excellent academic performance",
      icon: "🏫",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            My academic journey from high school to pursuing advanced studies
          </p>
        </div>
        
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${item.status} ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="timeline-details">
                  <div className="timeline-header">
                    <h3 className="degree-title">{item.degree}</h3>
                    <span className="institution-name">{item.institution}</span>
                  </div>
                  <div className="timeline-meta">
                    <span className="period">{item.period}</span>
                    <span className="gpa">GPA: {item.gpa}</span>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                  
                  {item.status === 'current' && (
                    <div className="current-badge">
                      <span>Currently Pursuing</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="education-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">🏆</div>
            <h4>Academic Excellence</h4>
            <p>Consistently maintained high academic performance across all levels of education</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🎯</div>
            <h4>Progressive Learning</h4>
            <p>From technical engineering to strategic business management</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🚀</div>
            <h4>Future Ready</h4>
            <p>Combining technical expertise with business acumen for modern challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
