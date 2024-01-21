import React from "react";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import ReactImg from "../assets/images/reactjs.png";
import JS from "../assets/images/javascript.png";
import Mongo from "../assets/images/mongodb.png";
import Node from "../assets/images/nodejs.png";
import Express from "../assets/images/express.png";
import Mysql from "../assets/images/MySQL-Logo.png";
import jQuery from "../assets/images/jQuery.png";
import git from "../assets/images/git.png";
  
  
  function About() {
  return (
    <div>
      <h3 className="bg">Experience</h3>
      <p className="overview">Overview</p>
      <p className="About-me">
        A Full Stack Web Developer, with a unique combination of a background in
        Occupational Therapy and a fervent passion for bringing ideas to life in
        the digital realm. I have proudly earned my Full Stack Web Development
        certificate through the University of Central Florida Coding Bootcamp
        consisting of a condensed 2 years of intensive coding experience into an
        accelerated program, and the She Codes online learning platform. Both
        fluent in English and Spanish, I offer the added dimension of bilingual
        communication skills to foster international collaborations. I'm on the
        lookout for opportunities to contribute my technical expertise to a
        dynamic organization and be a part of its journey to success.
      </p>
      <div className="media-scroller-container">
        <div className="media-element">
          <img src={HTML} />
          <h2 className="lang">HTML</h2>
        </div>
        <div className="media-element">
          <img src={CSS} />
          <h2 className="lang">CSS</h2>
        </div>
        <div className="media-element">
          <img src={ReactImg} />
          <h2 className="lang">React</h2>
        </div>
        <div className="media-element">
          <img src={JS} />
          <h2 className="lang">JS</h2>
        </div>
        <div className="media-element">
          <img src={Mongo} />
          <h2 className="lang">Mongo</h2>
        </div>
        <div className="media-element">
          <img src={Node} />
          <h2 className="lang">Node</h2>
        </div>
        <div className="media-element">
          <img src={Express} />
          <h2 className="lang">Express</h2>
        </div>
        <div className="media-element">
          <img src={Mysql} />
          <h2 className="lang">MySQL</h2>
        </div>
        <div className="media-element">
          <img src={jQuery} />
          <h2 className="lang">jQuery</h2>
        </div>
        <div className="media-element">
          <img src={git} />
          <h2 className="lang">Git</h2>
        </div>
      </div>
    </div>
  );
  }
  export default About;