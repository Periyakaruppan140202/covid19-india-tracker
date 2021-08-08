import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <span className="topic">COVID-19 India Tracker</span>
      <Link to="/dailycases" className="link">
        <span className="navbar">Daily Cases</span>
      </Link>
      <Link to="/state" className="link">
        <span className="navbar">Statewise</span>
      </Link>
      <Link to="/" className="link">
        <span className="navbar">Home</span>
      </Link>
    </div>
  );
};

export default Header;
