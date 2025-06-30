import React from "react";
import "../css/About.css";
import vivek from "../images/vivek.jpeg";
import mission from "../images/mission.png";
import techStack from "../images/techStack.png";
import learning from "../images/learning.png";
import apart from "../images/apart.png";
import '../css/NavBar.css'

const About = () => {
  return (
    <div>
      <section id="about-me">
        <div id="container">
          <p id="p">✨ About Me</p>
          <p>
            Hi, I'm Vivek kumar — a passionate Frontend Developer with a focus
            on building user-centric, responsive and visually appealing
            websites. With strong foundatin in HTML, CSS, JavaScript and an eye
            for UI/UX design, I bring digital ideas to life.
          </p>
        </div>
        <img src={vivek} alt="" />
      </section>

      <section id="mission">
        <img src={mission} alt="" />
        <div id="container">
          <p id="p">💡 My Mission</p>
          <p>
            I aim to craft digital experiences that are not only functional but
            also aesthetically engaging. My goal is to bridge the gap between
            design and development by turning creative ideas into clean,
            optimized code.
          </p>
        </div>
      </section>

      <section id="tech-stack">
        <div id="container">
          <p id="p">🛠️ Tech Stack</p>
          <p>Frontend: HTML, CSS, JavaScript, React</p>
          <p>Tools: VS Code, Chrome DevTools, GitHub</p>
          <p>Other Interests: UI/UX design</p>
        </div>
        <img src={techStack} alt="" />
      </section>

      <section id="learning">
        <img src={learning} alt="" />
        <div id="container">
          <p id="p">📈 Currently Learning</p>
          <p>Advanced React (Hooks, Context API, Routing)</p>
          <p>Backend with Node.js & MongoDB</p>
          <p>Tailwind CSS & Framer Motion for modern UI</p>
        </div>
      </section>

      <section id="apart">
        <div id="container">
          <p id="p">🌐 What Sets Me Apart</p>
          <p>Eye for detail in UI design</p>
          <p>Focus on user experience and responsiveness</p>
          <p>Strong communication and teamwork</p>
          <p>Fast learner and problem solver</p>
        </div>
        <img src={apart} alt="" />
      </section>

      <section id="based">
        <p id="p">📍 Based In</p>
        <p>India — open to remote opportunities worldwide 🌍</p>
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
              <a href="https://www.linkedin.com/in/vivek-kumar-3b879b2b9/">
                LinkedIn
              </a>
              <a href="https://github.com/vivekkr10">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
