import React from "react";
import save from "./save-india.jpg";
import love from "./love.png";

const Home = () => {
  return (
    <div className="home">
      <img className="love" src={love} alt="" width="200px" />
      <img className="india" src={save} alt="name" width="400px" />
      <img className="love" src={love} alt="" width="200px" />
    </div>
  );
};

export default Home;
