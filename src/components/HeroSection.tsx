import React from "react";
import "../styles/HeroSection.css";
// @ts-ignore
import backgroundVideo from "../mixkit-cinematic-view-of-friends-hiking-rough-terrain-8947-medium.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        {" "}
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <h1>NAVIGATE YOUR CAREER JOURNEY</h1>
      <p>Ready to discover your ideal career path? Harness the power of artificial intelligence with ChatGPT. 
        Take our interactive career quiz and receive a personalized career report powered by cutting-edge AI technology.</p>
      <button>Get Started!</button>
    </div>
  );
}

export default HeroSection;
