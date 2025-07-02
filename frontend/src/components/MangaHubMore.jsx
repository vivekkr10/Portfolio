import React from "react";
import mangahub from "../images/mangahub.png"; // Make sure the image path is correct
import "../css/NoteShareMore.css"; // Reusing the same CSS for styling consistency

const MangaHubMore = () => {
  return (
    <div>
      <section id="noteShareMore">
        <a
          href="https://noteshare1.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mangahub} alt="MangaHub Landing Page link" />
        </a>

        <div id="container">
          <h1>📚 MangaHub – Landing Page Overview</h1>
          <p>
            MangaHub is a clean and modern landing page designed for a fictional
            platform that allows users to upload, read, and monetize manga or
            comic content. The page features a sleek hero section, intuitive
            layout, and a strong call to action for creators and readers alike.
          </p>
          <p>
            The design highlights the platform's benefits like uploading
            content, earning from views, and inspiring creativity within the
            manga community. With a clean UI, scroll-friendly sections, and fast
            load times, it’s built to engage users on first impression.
          </p>

          <h2>🔍 Key Sections:</h2>
          <h3>🎯 Hero Area with CTA</h3>
          <p>
            Beautiful header with background image and buttons like "Start
            Publishing" or "Browse Library" to direct visitors instantly.
          </p>
          <h3>📈 How It Works Section</h3>
          <p>
            Breaks down the 3-step process: Upload your work, Gain views & Earn,
            and Inspire a global audience.
          </p>
          <h3>⚙️ Clean & Responsive Design</h3>
          <p>
            Optimized for mobile, tablet, and desktop users — fully responsive
            layout using HTML, CSS, and smooth scroll transitions.
          </p>

          <h2>🔧 Tech Stack:</h2>
          <p>Frontend: HTML, CSS</p>
          <p>Tools: Figma (for design), Photoshop (assets), React (wrapper)</p>
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

export default MangaHubMore;
