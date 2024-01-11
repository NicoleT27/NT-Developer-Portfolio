import { Link } from "react-router-dom";
import "./about.css";

function about() {
    return (
      <div>
        <header>
          <div className="header-text">
            <h2>Nicole</h2>
          </div>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </header>
        <div class="logo-holder">
          <div class="bg"></div>
          <div class="bar"></div>
          <div class="bar fill1"></div>
          <div class="bar fill2"></div>
          <div class="bar fill3"></div>
          <div class="bar fill4"></div>
          <div class="bar fill1"></div>
          <div class="bar fill5"></div>
          <div class="bar fill6"></div>
          <div class="bar"></div>
        </div>
      </div>
    );
}

export default about;
