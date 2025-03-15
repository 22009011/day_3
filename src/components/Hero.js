import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="welcome">WELCOME TO EXPLORER</p>
        <h1>Your Adventure Travel Expert in the <span className="south">SOUTH</span></h1>
        <div className="dropdown">
          <select>
            <option>Choose</option>
            <option>Pollachi</option>
            <option>Thanjavur</option>
            <option>Chidambaram</option>
          </select>
        </div>
        <div className="exp">
          <h5>EXPLORE</h5>
        </div>
      </div>
      <div className="hero-image">
        {/* Background image is added via CSS */}
      </div>
    </section>
  );
}

export default Hero;
