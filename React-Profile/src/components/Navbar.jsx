import React from "react";
import "../assets/style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#aboutme">About Me</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#">Contact Me</a>
      </li>
    </div>
  );
};

export default Navbar;
