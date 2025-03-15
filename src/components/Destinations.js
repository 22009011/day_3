import React from "react";
import DestinationCard from "./DestinationCard";

function Destinations() {
  const sectionStyle = {
    textAlign: "center",
    padding: "50px"
  };

  const headingStyle = {
    color: "#8a236a",
    fontSize: "30px",
    marginBottom: "10px"
  };

  const subheadingStyle = {
    marginBottom: "40px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    gridStyle.gridTemplateColumns = "1fr";
  }

  const destinations = [
    { image: "pollachi.png", title: "Never Ending Paddy Fields", location: "Pollachi", description: "Beautiful landscapes and lush greenery." },
    { image: "thanja.png", title: "Small Ride in Mid Summer Heat", location: "Thanjavur", description: "Historic temples and cultural heritage." },
    { image: "chidam.png", title: "Catching a Short Break", location: "Chidambaram", description: "Calm and spiritual surroundings." },
    { image: "kumba.png", title: "Never Ending Paddy Fields", location: "Pollachi", description: "Beautiful landscapes and lush greenery." },
    { image: "masi.png", title: "Small Ride in Mid Summer Heat", location: "Thanjavur", description: "Historic temples and cultural heritage." },
    { image: "thiru.png", title: "Catching a Short Break", location: "Chidambaram", description: "Calm and spiritual surroundings." }
 
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Destinations</h2>
      <p style={subheadingStyle}>Explore special destinations for you and your bike!</p>
      <div style={gridStyle}>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            location={destination.location}
            description={destination.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
