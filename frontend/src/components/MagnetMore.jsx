import React from "react";
import magnet from "../images/magnet.png"; // Make sure the image exists
import "../css/NoteShareMore.css"; // Reuse consistent styling

const MagnetMore = () => {
  return (
    <div>
      <section id="noteShareMore">
        <a
          href="https://noteshare1.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={magnet} alt="Magnet Landing Page link" />
        </a>
        <div id="container">
          <h1>🧲 Magnet – Landing Page Overview</h1>
          <p>
            The Magnet Landing Page is a sleek and modern product showcase
            designed to highlight a futuristic magnetic device. Its bold visuals
            and striking layout instantly catch the viewer’s attention and
            encourage interaction.
          </p>
          <p>
            It is fully responsive and optimized for fast performance, featuring
            prominent CTAs and sections like pricing, features, testimonials,
            and login/register links for user engagement.
          </p>

          <h2>🔍 Key Features:</h2>
          <h3>✨ Futuristic Product Focus</h3>
          <p>
            Hero section emphasizes the product with bold typography and
            striking visuals to drive conversions.
          </p>
          <h3>📱 Mobile-Friendly Design</h3>
          <p>
            Smooth experience across all devices with responsive layout and
            flexible content blocks.
          </p>
          <h3>🚀 Fast Loading & SEO Friendly</h3>
          <p>
            Built using lightweight HTML and CSS for quick load time and better
            search visibility.
          </p>
          <h3>🧩 Reusable UI Sections</h3>
          <p>
            Includes pricing, about, FAQ, and testimonials — all modular and
            easy to customize.
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

export default MagnetMore;
