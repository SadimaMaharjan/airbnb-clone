import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Katie from "./public/Katie.png";
export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Card
        img={Katie}
        rating="5.0"
        review={6}
        country="USA"
        description="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
