import React from 'react';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Design and Analysis of Multi-Storied Building (G+5)",
      subtitle: "Using STAAD Pro and Revit",
      description: "A comprehensive structural engineering project involving the design and analysis of a G+5 multi-story building, applying advanced engineering principles and modern software tools.",
      tools: ["STAAD Pro", "Revit", "AutoCAD", "Indian Building Codes"],
      features: [
        "Led the design and analysis of a G+5 multi-story building",
        "Applied comprehensive structural engineering principles",
        "Collaborated with project team for comprehensive design delivery",
        "Utilized STAAD Pro for in-depth structural analysis",
        "Incorporated seismic and wind load considerations",
        "Leveraged Revit for Building Information Modeling (BIM)",
        "Produced detailed architectural and structural plans",
        "Enhanced visualization and coordination through BIM",
        "Executed precise load calculations and member sizing",
        "Performed rigorous stability checks",
        "Ensured strict adherence to Indian Building Codes",
        "Maintained safety regulations throughout the process"
      ],
      image: "🏗️",
      category: "Structural Engineering",
      duration: "6 months",
      teamSize: "5 members"
    }
  ];

  const projectCategories = [
    { name: "Structural Engineering", icon: "🏗️", count: 1 },
    { name: "Building Design", icon: "🏢", count: 1 }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Showcasing my major project work and technical achievements
          </p>
        </div>

        <div className="projects-categories">
          {projectCategories.map((category, index) => (
            <div key={index} className="category-item">
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </div>
          ))}
        </div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span>{project.image}</span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-duration">{project.duration}</span>
                    <span className="project-team">{project.teamSize}</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-description">
                  <p>{project.description}</p>
                </div>

                <div className="project-tools">
                  <h4>Technologies & Tools Used</h4>
                  <div className="tools-grid">
                    {project.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4>Key Features & Responsibilities</h4>
                  <div className="features-grid">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-highlights">
                <div className="highlight-item">
                  <span className="highlight-label">Project Scale</span>
                  <span className="highlight-value">G+5 Multi-Story</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Analysis Type</span>
                  <span className="highlight-value">Structural & Seismic</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Software Suite</span>
                  <span className="highlight-value">STAAD Pro + Revit</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Compliance</span>
                  <span className="highlight-value">Indian Building Codes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-summary">
          <div className="summary-section">
            <h3>Project Impact</h3>
            <p>
              This project demonstrates my ability to handle complex structural engineering challenges, 
              utilize advanced software tools effectively, and deliver comprehensive solutions that meet 
              industry standards and safety requirements.
            </p>
          </div>
          
          <div className="summary-section">
            <h3>Technical Growth</h3>
            <p>
              Through this project, I enhanced my proficiency in structural analysis software, 
              developed strong project management skills, and gained practical experience in 
              applying theoretical knowledge to real-world engineering problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
