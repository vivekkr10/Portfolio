import React from "react";
import "../css/Home.css";
import vivek from "../images/vivek.jpeg";
import calculator from "../images/calculator.png";
import exelroofing from "../images/exellroofing.png";
// import magnet from "../images/magnet.png";
import mangahub from "../images/mangahub.png";
import noteshare from "../images/noteshare.png";
import weather from "../images/weather.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <div id="container">
          <div id="hero-text">
            <p>Showcasing Innovative Solutions by Vivek Kumar</p>
            <p>
              Welcome to Vivek's Portfolio, where creativity meats technology.
              Explore my Projects that blends functionality with modern design,
              crafted to elevate user experiances.
            </p>
          </div>
          <div id="hero-image">
            <img src={vivek} alt="" />
            <div id="hero-btns">
              <button>Frontend Devlopment</button>
              <button>UI / UX</button>
              <button>Full-Stack</button>
            </div>
          </div>
        </div>
      </section>

      <section id="links">
        <div id="container">
          <a
            href="https://github.com/vivekkr10"
            target="_blank"
            rel="noopener noreferrer"
            id="btn"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-kumar-3b879b2b9/"
            target="_blank"
            rel="noopener noreferrer"
            id="btn"
          >
            LinkedIn
          </a>
          <a href="/Vivek_Kumar_Resume.pdf" download id="btn">
            Resume
          </a>
          <NavLink to="/contact">
            <button id="btn">Contact</button>
          </NavLink>
        </div>
      </section>

      <section id="skills">
        <div id="container">
          <div id="view-all-btn">
            <p>What I do</p>
            {/* <button>View All</button> */}
          </div>
          <div id="what-i-do">
            <div id="div">
              <div id="web">
                <p>01</p>
                <span></span>
                <p>Html</p>
              </div>
              <div id="web">
                <p>03</p>
                <span></span>
                <p>Javascript</p>
              </div>
              <div id="web">
                <p>05</p>
                <span></span>
                <p>Bootstrap</p>
              </div>
            </div>
            <div id="div">
              <div id="web">
                <p>02</p>
                <span></span>
                <p>CSS</p>
              </div>
              <div id="web">
                <p>04</p>
                <span></span>
                <p>ReactJs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <p>Featured Projects</p>
        <div id="container">
          <div id="project-card">
            <NavLink style={{ background: "transparent" }} to="/noteShare">
            <img src={noteshare} alt="" />
            <h3>Noteshare</h3>
              <button>Read more</button>
            </NavLink>
          </div>
          <div id="project-card">
            <NavLink style={{ background: "transparent" }} to="/weatherApp">
            <img src={weather} alt="" />
            <h3>Weather App</h3>
              <button>Read more</button>
            </NavLink>
          </div>
          <div id="project-card">
            <NavLink style={{ background: "transparent" }} to="/mangaHub">
            <img src={mangahub} alt="" />
            <h3>MangaHub Landing page</h3>
              <button>Read more</button>
            </NavLink>
          </div>
          <div id="project-card">
            <NavLink style={{ background: "transparent" }} to="/calculator">
            <img src={calculator} alt="" />
            <h3>Simple Calculator</h3>
              <button>Read more</button>
            </NavLink>
          </div>
          <div id="project-card">
            <NavLink style={{ background: "transparent" }} to="/exellroofing">
            <img src={exelroofing} alt="" />
            <h3>Exallroofing Landing page</h3>
            <button>Read more</button>
            </NavLink>
          </div>
          <div id="project-card">
            <NavLink style={{ background: "transparent" }} to="/projects">
            <button id="view-project">View all projects</button>
            </NavLink>
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

export default Home;
