import { Link } from "react-router-dom";
import "./home.css";
import leafBg from "../assets/images/leaf-background.jpg";


function home()  {
  return (
    <div>
      <header>
        <div className="header-text">
          <h2>Nicole Torres</h2>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
      <div className="sliders">
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
      <img className="leafBg" src={leafBg} alt="jpg of leaves" />
    </div>
  );
}

export default home;
