import React from "react";
import calculator from "../images/calculator.png"; // Ensure this path is correct
import "../css/NoteShareMore.css"; // Reuse for consistent styling

const CalculatorMore = () => {
  return (
    <div>
      <section id="noteShareMore">
        <a
          href="https://webcalculator123.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={calculator} alt="Simple Calculator link" />
        </a>

        <div id="container">
          <h1>🧮 Simple Calculator – Project Overview</h1>
          <p>
            The Simple Calculator is a beginner-friendly project built using
            HTML, CSS, and JavaScript. It allows users to perform basic
            arithmetic operations such as addition, subtraction, multiplication,
            and division.
          </p>
          <p>
            This project focuses on DOM manipulation, real-time user input, and
            clean UI design. It helps users understand how interactive
            components work in a frontend web environment.
          </p>

          <h2>🔍 Key Features:</h2>
          <h3>➕ Basic Math Operations</h3>
          <p>
            Users can calculate expressions using numbers and standard operators
            (+, –, ×, ÷).
          </p>
          <h3>🧼 Clear & Delete Functionality</h3>
          <p>
            Includes buttons to clear all input or delete the last entered value
            for easy corrections.
          </p>
          <h3>🎯 Real-time Display</h3>
          <p>
            Shows typed input and displays the result after calculation
            immediately below the screen.
          </p>
          <h3>💡 Clean UI</h3>
          <p>
            Simple, responsive, and minimal design to focus on functionality
            over visuals.
          </p>

          <h2>🔧 Tech Stack:</h2>
          <p>Frontend: HTML, CSS, JavaScript</p>
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

export default CalculatorMore;
