const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best 
          to get back to you!
        </p>
        
        <div className="contact-links">
          <a href="mailto:brittany.chiang@gmail.com" className="contact-button">
            Say Hello
          </a>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> brittany.chiang@gmail.com
          </div>
          <div className="contact-item">
            <strong>Location:</strong> Boston, MA
          </div>
          <div className="contact-item">
            <strong>Availability:</strong> Open for opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
