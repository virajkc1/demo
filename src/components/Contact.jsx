const Contact = () => {
  return (
    <section id="contact" className="section flex flex-col items-center mt-10">
      <h2>Contact Me</h2>
      <div className="contact-content ">
        <p>
          I'm looking for a graduate role in a software / technology programme.
          Whether you are a recruiter or a developer who wants to collaborate on
          a project, please reach out!
        </p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/viraj-chapaneri"
            className="contact-button"
          >
            Say Hello
          </a>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> virajkc2003@gmail.com
          </div>
          <div className="contact-item">
            <strong>Location:</strong> Leicester, UK
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
