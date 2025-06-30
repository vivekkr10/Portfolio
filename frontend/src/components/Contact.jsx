import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div>
      <section id="contact-me">
        <div id="container">
          <p>📬 Contact Me</p>
          <p>
            Let’s build something amazing together! Whether you have a project
            in mind, a question, or just want to say hi — I’m always open to
            connect.
          </p>
        </div>
        <div id="buttons">
          <div id="email">
            <div id="container">
              <p>📧 Email</p>
              <a href="mailto:vivek@example.com?subject=Portfolio%20Inquiry&body=Hi%20Vivek%2C%20I%20just%20visited%20your%20portfolio...">
                Send Email
              </a>
            </div>
          </div>
          <div id="linkedin">
            <p>💼 LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/vivek-kumar-3b879b2b9/"
              target="_blank"
              rel="noopener noreferrer"
              id="btn"
            >
              LinkedIn
            </a>
          </div>
          <div id="github">
            <p>💻 GitHub</p>
            <a
              href="https://github.com/vivekkr10"
              target="_blank"
              rel="noopener noreferrer"
              id="btn"
            >
              GitHub
            </a>
          </div>
          <div id="whatsapp">
            <p>📞 WhatsApp</p>
            <a
              href="https://wa.me/918743942135?text=Hi%20Vivek%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <section id="location">
        <p>📍 Location</p>
        <p>India (Open to remote opportunities 🌍)</p>
      </section>

      <footer id="footer">
        <div id="container">
          <div id="review">
            <h3>Review : Portfolio</h3>
            <p>Building projects since 2024</p>
          </div>
          <div id="acf">
            <div id="about">
              <h3>About</h3>
              <p>Learn more</p>
              <p>Careers</p>
              <p>Get in touch</p>
            </div>
            <div id="community">
              <h3>Community</h3>
              <p>Support</p>
              <p>Download Resume</p>
            </div>
            <div id="follow">
              <h3>Follow me</h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/vivek-kumar-3b879b2b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/vivekkr10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
