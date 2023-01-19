import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./components/data";

export default function App() {
  const cardElements = cardData.map((data) => {
    return (
      <Card
        // img={data.coverImg}
        id={data.id}
        data={data}
        // rating={data.stats.rating}
        // review={data.stats.reviewCount}
        // location={data.location}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <div className="card-wrapper">{cardElements}</div>
    </div>
  );
}
