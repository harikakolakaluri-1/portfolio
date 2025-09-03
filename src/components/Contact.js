import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📍',
      label: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh, India'
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'Harika.kolakaluri@gmail.com',
      link: 'mailto:Harika.kolakaluri@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 7095983691',
      link: 'tel:+917095983691'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'harikakolakaluri',
      link: 'https://linkedin.com/in/harikakolakaluri'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/harikakolakaluri' },
    { name: 'Email', icon: '📧', url: 'mailto:Harika.kolakaluri@gmail.com' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about engineering and business!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a project in mind, want to discuss potential collaborations, 
              or simply want to learn more about my work, I'd love to hear from you.
            </p>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Ready to Start a Project?</h3>
          <p>
            I'm passionate about combining technical excellence with business strategy. 
            Let's discuss how we can work together to bring your vision to life.
          </p>
          <div className="cta-buttons">
            <a href="mailto:Harika.kolakaluri@gmail.com" className="btn btn-primary">
              Start a Conversation
            </a>
            <a href="https://linkedin.com/in/harikakolakaluri" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
