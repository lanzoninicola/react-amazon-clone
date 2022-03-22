import React from "react";
import "./Home.css";

const Home = () => {
  const [viewPortSize, setViewportSize] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  console.log("viewPortSize: ", viewPortSize);

  const fruits = ["banana", "apple", "organge", "mamao"];

  const fruitsSection = fruits.map((fruit, index) => {
    return (
      <div key={index} className="slider-section">
        {fruit}
      </div>
    );
  });

  return (
    <div className="home">
      <div className="slider" onResize>
        {fruitsSection}
      </div>
    </div>
  );
};

export default Home;
