import React from "react";
import star from "../images/Star-icon.png";
import Katie from "../images/Katie.png";
export default function Card(props) {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }
  //console.log(props);
  return (
    <div className="card">
      {badgeText && <div className="cardBadge">{badgeText}</div>}

      <img src={Katie} className="card-photo" />
      <div className="review">
        <img src={star} className="star-icon" />
        <span className="rating">{props.data.stats.rating}</span>
        <span className="noReviews">({props.data.stats.reviewCount})</span>
        <span className="dot">&bull;</span>
        <span className="location">{props.data.location}</span>
      </div>
      <h4 className="title">{props.data.title}</h4>
      <h5 className="price">
        From ${props.data.price} <span className="per-person">/ person</span>
      </h5>
    </div>
  );
}
