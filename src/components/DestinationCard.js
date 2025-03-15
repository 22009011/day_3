import React from "react";

function DestinationCard({ image, title, location, description }) {
  const cardStyle = {
    width: "100%",
    background: "#fff",
    textAlign: "left",
    marginBottom: "30px",
    overflow: "hidden"
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  };

  const titleStyle = {
    fontSize: "18px",
    margin: "15px 0 5px 0"
  };

  const locationStyle = {
    fontSize: "14px",
    marginBottom: "15px",
    color: "#8a236a",
    fontWeight: "bold"
  };

  const paragraphStyle = {
    fontSize: "14px",
    marginBottom: "15px"
  };

  const buttonStyle = {
    background: "#8a236a",
    color: "white",
    border: "none",
    padding: "8px 15px",
    fontSize: "12px",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h3 style={titleStyle}>{title}</h3>
      <p style={locationStyle}>{location}</p>
      <p style={paragraphStyle}>{description}</p>
      <button style={buttonStyle}>READ MORE</button>
    </div>
  );
}

export default DestinationCard;
