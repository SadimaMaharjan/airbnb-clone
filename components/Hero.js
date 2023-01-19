import React from "react";
import photo from "../public/images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero-content">
      <img src={photo} className="photo-grid" />
      <h1 className="page-header">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
