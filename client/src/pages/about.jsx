import { Link } from "react-router-dom";
import "./about.css";
// import profile from "../assets/images/larger-profile-picture2.jpg";
import aboutLeaf from "../assets/images/leaf.png";


function about() {
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
        <img
          className="profile"
          src={profile}
          alt="Profile Picture of Nicole"
        />
        <div className="logo-holder">
          <div className="bg">Frameworks/Languages</div>
          <div className="bar fill0" data-label="Javascript"></div>
          <div className="bar fill1" data-label="MongoDB"></div>
          <div className="bar fill2" data-label="CSS"></div>
          <div className="bar fill3" data-label="React"></div>
          <div className="bar fill4" data-label="HTML"></div>
          <div className="bar fill5" data-label="Express.js"></div>
          <div className="bar fill6" data-label="Node.js"></div>
          <div className="bar fill7" data-label="SQL"></div>
        </div>
        <img className="aboutLeaf" src={aboutLeaf} alt="svg of leaves" />
      </div>
    );
}

export default about;
