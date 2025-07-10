import React from "react";
import { image } from "../data/data";
//import image from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>This is veering into jsx in react</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
  // return <div>About</div>;
}

export default About;
