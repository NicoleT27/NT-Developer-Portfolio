import React from "react";
import Playful from "../assets/images/playful-pixels.png";

function Projects() {
  return (
    <div className="projects">
      <img src={Playful} />
      <p className="playful-desc">
        This Project is a full MERN Stack utilizing topics such as hooks,JS,
        HTML, CSS, React, MongoDB, Express, and Node.js.{" "}
      </p>
    </div>
  );
}
export default Projects;

