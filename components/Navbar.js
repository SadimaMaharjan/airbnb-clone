import React from "react";
import logo from "../public/images/airbnb.png";

export default function Navbar() {
  return (
    <div className="header">
      <a href="#">
        <img src={logo} className="airbnb-logo" />
      </a>
    </div>
  );
}
