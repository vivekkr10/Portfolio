import React from "react";
import weather from "../images/weather.png";

const WeatherAppMore = () => {
  return (
    <div>
      <section id="noteShareMore">
        <a
          href="https://cloudwink.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={weather} alt="Weather App link" />
        </a>

        <div id="container">
          <h1>⛅ Weather App – Project Overview</h1>
          <p>
            The Weather App is a responsive web application that delivers
            real-time weather updates for cities across the globe. It fetches
            accurate data like temperature, weather condition, humidity, and
            wind speed from the OpenWeatherMap API and displays it with a clean,
            modern user interface.
          </p>
          <p>
            Designed with usability and performance in mind, the app allows
            users to quickly search for any city and get up-to-date weather
            info. It's fully responsive, making it easy to use on both desktop
            and mobile devices.
          </p>

          <h2>🔍 Key Features:</h2>
          <h3>🌍 Global Weather Search</h3>
          <p>
            Users can type any city name to get the current weather details
            instantly, thanks to OpenWeatherMap API integration.
          </p>
          <h3>📱 Mobile-First Design</h3>
          <p>
            Built with responsive design in mind to offer a seamless experience
            across all screen sizes.
          </p>
          <h3>🌡️ Detailed Forecast Data</h3>
          <p>
            Displays temperature, sky condition, humidity, and wind speed with
            weather icons.
          </p>
          <h3>⚡ Fast and Lightweight</h3>
          <p>
            Optimized with clean JavaScript and CSS for fast performance and
            quick API responses.
          </p>

          <h2>🔧 Tech Stack:</h2>
          <p>Frontend: HTML, CSS, JavaScript</p>
          <p>API: OpenWeatherMap API</p>
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

export default WeatherAppMore;
