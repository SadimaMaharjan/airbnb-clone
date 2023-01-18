import React from "react";
//import picture from "../images/Katie.png";
import star from "../public/images/Star-icon.png";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={`../public/images/${props.img}`} className="card-photo" />
        <div className="review">
          <img src={star} className="star-icon" />
          <span className="rating">{props.rating}</span>
          <span className="noReviews">({props.review})</span>
          <span className="dot">&bull;</span>
          <span className="country">{props.country}</span>
        </div>
        <h4 className="description">{props.description}</h4>
        <h5 className="price">
          From ${props.price} <span className="per-person">/ person</span>
        </h5>
      </div>
    </div>
  );
}
