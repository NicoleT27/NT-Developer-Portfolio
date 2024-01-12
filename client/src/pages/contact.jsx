import { Link } from "react-router-dom";
import "./contact.css";
import leaf from "../assets/images/leaf.png";

function contact() {
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
      this is the contact page
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
      <img className="leaf" src={leaf} alt="svg of leaves" />
    </div>
  );
}

export default contact;
