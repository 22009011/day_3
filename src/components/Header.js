import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">explor<span className="highlight">er</span></div>
      <nav>
        <ul>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Bike Rentals</a></li>
          <li><a href="#">Restaurants</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
