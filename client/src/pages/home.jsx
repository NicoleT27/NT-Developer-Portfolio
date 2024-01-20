import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./home.css";
import "../../src/App.css";
import "./contact.css";
import "./about.css";
import me from "../assets/images/circle-me.jpg";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import ReactImg from "../assets/images/React.png";
import JS from "../assets/images/JS-logo.png";
import Mongo from "../assets/images/mongo.png";
import Node from "../assets/images/node.png";
import Express from "../assets/images/express.png";
import Mysql from "../assets/images/MySQL-Logo.png";
import jQuery from "../assets/images/jquery.png";

function home() {
  return (
    <div>
      <header>
        <div className="header-text">
          <h2>NT</h2>
          <h2 className="dot">.</h2>
        </div>
        <div className="navbar">
          {/* <RouterLink to="/">Home</RouterLink> */}
          <ScrollLink
            to="bg"
            className="link"
            smooth={true}
            duration={500}
          >
            About
          </ScrollLink>
          <ScrollLink to="" className="link" smooth={true} duration={500}>
            {" "}
            Projects
          </ScrollLink>
          <ScrollLink to="" className="link" smooth={true} duration={500}>
            {" "}
            Contact
          </ScrollLink>

          <a href="https://www.linkedin.com/in/nicolet27/">
            <iconify-icon icon="cib:linkedin"></iconify-icon>
          </a>
          <a href="https://github.com/NicoleT27">
            <iconify-icon icon="cib:github"></iconify-icon>
          </a>
        </div>
      </header>
      <div className="me-container">
        {" "}
        <div className="container-left">
          <div className="header-name">
            <h1>Nicole Torres</h1>
            <div className="container-links">
              <a href="https://www.linkedin.com/in/nicolet27/">
                <h6>linkedin</h6>
              </a>
              <h6 className="space">|</h6>
              <a href="https://github.com/NicoleT27">
                <h6>Github</h6>
              </a>
            </div>
            <button className="contact-me">Contact Me</button>
          </div>
        </div>
        <img className="me" src={me} alt="Image of Nicole" />
        <div className="header-title">
          <h3>Introduction</h3>
          <h6 className="title">Full Stack Web Developer</h6>
          <p className="paragraph-home">
            I bring a unique perspective to software engineering, having
            initially built my career as an Occupational Therapy Assistant.
            Transitioning into software engineering, I seamlessly blend
            technical proficiency with a compassionate approach, leveraging my
            diverse background to drive innovative solutions and contribute
            meaningfully to projects.
          </p>
        </div>
      </div>
      <ScrollLink
        to="bg"
        className="learn-more"
        smooth={true}
        duration={500}
      >
        Learn More ↓
      </ScrollLink>
      <div className="me-container"></div>
      <div className="header-name"></div>

      {/* <div id="logo-holder" className="logo-holder"> */}
      <h3 className="bg">Frameworks/Languages</h3>
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
      </div>
      {/* <div className="bar fill0" data-label="Javascript"></div>
        <div className="bar fill1" data-label="MongoDB"></div>
        <div className="bar fill2" data-label="CSS"></div>
        <div className="bar fill3" data-label="React"></div>
        <div className="bar fill4" data-label="HTML"></div>
        <div className="bar fill5" data-label="Express.js"></div>
        <div className="bar fill6" data-label="Node.js"></div>
        <div className="bar fill7" data-label="SQL"></div> */}
      {/* </div> */}
      <div className="projects">
        <p>This is where page three comes in talking about the projects worked on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa fuga impedit soluta libero odit pariatur veritatis fugit maxime commodi ducimus voluptates repellendus, natus itaque facilis! Voluptatum voluptate facilis quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident expedita nostrum dolorum alias! Repellendus quos numquam distinctio accusamus, fuga, veritatis asperiores, repellat delectus omnis esse sit cupiditate aut laudantium. </p>
      </div>
      <footer>
        <div className="letter-image">
          <div className="animated-mail">
            <div className="back-fold"></div>
            <div className="letter">
              <div className="letter-border"></div>
              <div className="letter-title"></div>
              <div className="letter-context"></div>
              <div className="letter-stamp">
                <div className="letter-stamp-inner"></div>
              </div>
            </div>
            <div className="top-fold"></div>
            <div className="body"></div>
            <div className="left-fold"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </footer>
    </div>
  );
}


export default home;
{
  //  <div className="sliders">
  //         <div className="bg-text-container">
  //           <div className="animate-text">
  //             <span className="synonym">Web&nbsp;</span>
  //             <span className="synonym">Developer&nbsp;</span>
  //           </div>
  //           <div className="animate-text left">
  //             <span className="synonym">Software&nbsp;</span>
  //             <span className="synonym">Engineer&nbsp;</span>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="card">
  //         <h1>
  //           {" "}
  //           I am a
  //           <div className="scroller">
  //             <span>
  //               Web Developer
  //               <br />
  //               Software Engineer
  //               <br />
  //               Singer
  //               <br />
  //               Travel Enthusiast
  //             </span>
  //           </div>
  //         </h1>
  //       </div>
  //       <img className="leafBg" src={leafBg} alt="jpg of leaves" />
}
