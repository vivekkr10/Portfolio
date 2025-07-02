import React from "react";
import noteshare from "../images/noteshare.png";
import "../css/NoteShareMore.css";

const NoteShareMore = () => {
  return (
    <div>
      <section id="noteShareMore">
        <a
          href="https://noteshare1.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={noteshare} alt="Noteshare link" />
        </a>
        <div id="container">
          <h1>✅ NoteShare – Platform Overview</h1>
          <p>
            NoteShare is a modern web application designed to simplify the way
            students share and discover academic notes. Built with a responsive
            and intuitive interface, it enables users to upload, organize, and
            browse study materials across different subjects and semesters with
            ease.
          </p>
          <p>
            The platform focuses on enhancing collaboration within student
            communities by offering features like user profiles, categorized
            notes, and real-time engagement stats such as views and popularity.
            Each note is displayed with key information including title, course
            tags, and upload time to help users quickly find what they need.
          </p>
          <h2>🔍 Key Features:</h2>
          <h3>📂 Upload & Browse Notes</h3>
          <p>
            Students can upload handwritten or typed notes (PDFs/images) and
            browse through others' content by filters like subject, semester, or
            popularity.
          </p>
          <h3>🧠 User-Friendly Dashboard</h3>
          <p>
            Personalized dashboard for users to manage their uploads, track note
            views, and edit their profile.
          </p>
          <h3>📊 Trending & Latest Notes</h3>
          <p>
            Homepage sections dynamically display the most recent and most
            viewed notes to highlight useful content.
          </p>
          <h3>🔎 Advanced Search</h3>
          <p>
            A powerful search system that helps users instantly find relevant
            notes based on keywords or tags.
          </p>
          <h3>💬 Testimonial & Feedback Section</h3>
          <p>
            Encourages users to share their experience and read others’ feedback
            to build credibility.
          </p>
          <h2>🔧 Tech Stack:</h2>
          <p>🔧 Tech Stack:</p>
          <p>Backend: Node.js, Express.js</p>
          <p>Database: MongoDB</p>
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

export default NoteShareMore;
