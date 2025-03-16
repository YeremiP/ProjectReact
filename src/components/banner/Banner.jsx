import React from "react";
import "./Banner.css";

function Banner({ image, title, description }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-overlay">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Banner;
