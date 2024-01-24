import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./home.css";
import "../../src/App.css";
import me from "../assets/images/profile-pic4.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function home() {
  return (
    <div>
      <header>
        <div className="header-text">
          <h2>NT</h2>
          <h2 className="dot">.</h2>
        </div>
        <div className="navbar">
          <ScrollLink to="bg" className="link" smooth={true} duration={500}>
            About Me
          </ScrollLink>
          <ScrollLink
            to="projects"
            className="link"
            smooth={true}
            duration={500}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="test-title"
            className="link"
            smooth={true}
            duration={500}
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="interest-title"
            className="link"
            smooth={true}
            duration={500}
          >
            Interests
          </ScrollLink>
          <ScrollLink
            to="contact-title"
            className="link"
            smooth={true}
            duration={500}
          >
            Contact
          </ScrollLink>
          <a
            href={"../../src/assets/Full-Stack-Web-Development-Resume.pdf"}
            download
          >
            Resume
          </a>
          {/* <a href="https://www.linkedin.com/in/nicolet27/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/NicoleT27">
            <FaGithub />
          </a> */}
        </div>
      </header>
      <div className="me-container">
        {" "}
        <div className="container-left">
          <div className="header-name">
            <h1>Nicole Torres</h1>
            <div className="container-links">
              <a href="https://www.linkedin.com/in/nicolet27/">
                <h6>Linkedin</h6>
              </a>
              <h6 className="space">|</h6>
              <a href="https://github.com/NicoleT27">
                <h6>Github</h6>
              </a>
            </div>
            <button className="contact-me">
              <ScrollLink
                to="contact-title"
                className="link"
                smooth={true}
                duration={500}
              >
                Contact Me
              </ScrollLink>
            </button>
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
      <ScrollLink to="bg" className="learn-more" smooth={true} duration={500}>
        Learn More ↓
      </ScrollLink>
      <div className="me-container"></div>
      <div className="header-name"></div>
    </div>
  );
}


export default home;

{/* 
  // extra word sliding page code 
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
} */}
