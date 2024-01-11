import { Link } from "react-router-dom";
import "./contact.css";

function contact() {
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
      this is the contact page
      <div class="letter-image">
        <div class="animated-mail">
          <div class="back-fold"></div>
          <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title"></div>
            <div class="letter-context"></div>
            <div class="letter-stamp">
              <div class="letter-stamp-inner"></div>
            </div>
          </div>
          <div class="top-fold"></div>
          <div class="body"></div>
          <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </div>
  );
}

export default contact;
