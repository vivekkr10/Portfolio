import React from "react";
import "../css/Projects.css";
import calculator from "../images/calculator.png";
import exelroofing from "../images/exellroofing.png";
import magnet from "../images/magnet.png";
import mangahub from "../images/mangahub.png";
import noteshare from "../images/noteshare.png";
import weather from "../images/weather.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <section id="project">
        <h1>All Projects</h1>
        <div id="container">
          <div id="projectCard">
            <img src={noteshare} alt="" />
            <div id="name">
              <h3>Noteshare</h3>
              <p>
                NoteShare is a platform where students can upload and explore
                academic notes easily. It helps streamline study material
                sharing with a clean, user-friendly interface.
              </p>
              <div id="card-btn">
                <NavLink style={{ background: "transparent" }} to="/noteShare">
                  <button>Read more</button>
                </NavLink>
                <a
                  href="https://noteshare1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="open-link">Open link</button>
                </a>
              </div>
            </div>
          </div>
          <div id="projectCard">
            <img src={weather} alt="Weather App" />
            <div id="name">
              <h3>Weather App</h3>
              <p>
                A sleek weather app that fetches real-time data using
                OpenWeatherMap API. Users can check the weather of any city with
                clean UI.
              </p>
              <div id="card-btn">
                <NavLink to="/weatherApp" style={{ background: "transparent" }}>
                  <button>Read more</button>
                </NavLink>
                <a
                  href="https://cloudwink.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="open-link">Open link</button>
                </a>
              </div>
            </div>
          </div>

          <div id="projectCard">
            <img src={mangahub} alt="MangaHub" />
            <div id="name">
              <h3>MangaHub Landing Page</h3>
              <p>
                A visually engaging landing page built for a manga reader
                platform. Focuses on clean layout, responsiveness, and
                anime-styled UI.
              </p>
              <div id="card-btn">
                <NavLink to="/mangaHub" style={{ background: "transparent" }}>
                  <button>Read more</button>
                </NavLink>
                <a
                  href="https://mangahub123.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="open-link">Open link</button>
                </a>
              </div>
            </div>
          </div>

          <div id="projectCard">
            <img src={calculator} alt="Calculator App" />
            <div id="name">
              <h3>Simple Calculator</h3>
              <p>
                A basic calculator built using HTML, CSS, and JavaScript. It
                performs arithmetic operations and features a simple,
                mobile-friendly UI.
              </p>
              <div id="card-btn">
                <NavLink to="/calculator" style={{ background: "transparent" }}>
                  <button>Read more</button>
                </NavLink>
                <a
                  href="https://webcalculator123.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="open-link">Open link</button>
                </a>
              </div>
            </div>
          </div>

          <div id="projectCard">
            <img src={exelroofing} alt="Exel Roofing" />
            <div id="name">
              <h3>Exel Roofing Landing Page</h3>
              <p>
                A professional and clean landing page designed for a roofing
                service business. Fully responsive with service sections and
                contact CTA.
              </p>
              <div id="card-btn">
                <NavLink to="/exellroofing" style={{ background: "transparent" }}>
                  <button>Read more</button>
                </NavLink>
                <a
                  href="https://exallroofing.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="open-link">Open link</button>
                </a>
              </div>
            </div>
          </div>

          <div id="projectCard">
            <img src={magnet} alt="Magnet Landing Page" />
            <div id="name">
              <h3>Magnet Landing Page</h3>
              <p>
                A stylish product showcase landing page designed to highlight a
                futuristic magnetic device. Responsive, modern, and
                fast-loading.
              </p>
              <div id="card-btn">
                <NavLink to="/magnet" style={{ background: "transparent" }}>
                  <button>Read more</button>
                </NavLink>
                <a
                  href="https://magnet123.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="open-link">Open link</button>
                </a>
              </div>
            </div>
          </div>
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

export default Projects;
