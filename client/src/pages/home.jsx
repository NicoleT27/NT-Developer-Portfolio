import { Link } from "react-router-dom";
import "./home.css";
// import leafBg from "../assets/images/leaf-background.jpg";
import me from "../assets/images/circle-me.jpg";

function home()  {
  return (
    <div>
      <header>
        <div className="header-text">
          <h2>NT.</h2>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact </Link>
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
        <div className="header-name">
          <h1>Nicole Torres</h1>
          <div className="container-links">
            <h6>Linkedin</h6>
            <h6>|</h6>
            <h6>Github</h6>
          </div>
          <button className="contact-me">Contact Me</button>
        </div>
        <img className="me" src={me} alt="Image of Nicole" />
        <div className="header-title">
          <h3>Introduction</h3>
          <h6 className="title">Full Stack Web Developer</h6>
          <p>This is where I talk about myself</p>
          <p>Learn More ↓</p>
        </div>
      </div>
      <div className="me-container">
        <div className="header-name"></div>
      </div>
    </div>
  );
}

export default home;

{
  /* <div className="sliders">
        <div className="bg-text-container">
          <div className="animate-text">
            <span className="synonym">Web&nbsp;</span>
            <span className="synonym">Developer&nbsp;</span>
          </div>
          <div className="animate-text left">
            <span className="synonym">Software&nbsp;</span>
            <span className="synonym">Engineer&nbsp;</span>
          </div>
        </div>
      </div>
      <div className="card">
        <h1>
          {" "}
          I am a
          <div className="scroller">
            <span>
              Web Developer
              <br />
              Software Engineer
              <br />
              Singer
              <br />
              Travel Enthusiast
            </span>
          </div>
        </h1>
      </div>
      <img className="leafBg" src={leafBg} alt="jpg of leaves" /> */
}