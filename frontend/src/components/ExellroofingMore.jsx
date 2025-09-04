import React from "react";
import exellroofing from "../images/exellroofing.png"; // Make sure the image path is correct
import "../css/NoteShareMore.css"; // Reusing shared styling

const ExallroofingMore = () => {
  return (
    <div>
      <section id="noteShareMore">
        <a
          href="https://exallroofing.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={exellroofing} alt="Exallroofing Landing Page link" />
        </a>

        <div id="container">
          <h1>🏠 Exallroofing – Landing Page Overview</h1>
          <p>
            Exallroofing is a clean and professional landing page designed for a
            roofing service company. It highlights essential service offerings,
            builds trust through well-placed content, and encourages visitors to
            reach out or request quotes.
          </p>
          <p>
            This landing page is fully responsive and optimized for fast
            loading, making it perfect for local service-based businesses
            looking to improve their online presence.
          </p>

          <h2>🔍 Key Features:</h2>
          <h3>📞 Call-to-Action Buttons</h3>
          <p>
            Multiple CTAs including "Get A Quote", "Call Us", and "Book a Visit"
            help drive conversions.
          </p>
          <h3>📍 Service Coverage Map</h3>
          <p>
            Visually shows the company’s service coverage area to build customer
            clarity.
          </p>
          <h3>📱 Responsive Design</h3>
          <p>
            Looks and works great on all devices — from mobile phones to
            desktops.
          </p>
          <h3>⚙️ SEO-Ready HTML Structure</h3>
          <p>
            Uses semantic HTML, proper headings, and optimized images for better
            discoverability.
          </p>

          <h2>🔧 Tech Stack:</h2>
          <p>Frontend: HTML, CSS</p>
        </div>
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

export default ExallroofingMore;
