import React from "react";
import "./Home.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function duplicateItem(times) {
  const arrayOfItems = new Array(times);

  for (let i = 0; i < arrayOfItems.length; i++) {
    arrayOfItems[i] = getRandomInt(500, 1000);
  }

  return arrayOfItems;
}

function Claim({ repeate = 0 }) {
  const claims = duplicateItem(repeate);

  // Math.round(Math.random())

  const claimPattern = claims.map((claim, index) => {
    return (
      <div
        key={index}
        className="claim-background claim-text"
        style={{ transform: `translate(0px, 300px) rotate(-38deg)` }}
      >
        <span
          style={{
            color:
              Math.round(Math.random()) === 0
                ? "rgba(247, 247, 249, 0.2)"
                : "rgba(247, 247, 249, 0.05)",
          }}
        >
          QUALIDADE{" "}
        </span>
        <span
          style={{
            color:
              Math.round(Math.random()) === 0
                ? "rgba(247, 247, 249, 0.2)"
                : "rgba(247, 247, 249, 0.05)",
          }}
        >
          VARIEDADE{" "}
        </span>
        <span
          style={{
            color:
              Math.round(Math.random()) === 0
                ? "rgba(247, 247, 249, 0.2)"
                : "rgba(247, 247, 249, 0.05)",
          }}
        >
          PREÇOS BAIXO.{" "}
        </span>
      </div>
    );
  });

  return claimPattern;
}

const Home = () => {
  return (
    <section className="claim-section">
      <Claim repeate={50} />
    </section>
  );
};

export default Home;
