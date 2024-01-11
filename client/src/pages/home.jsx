import { Link } from "react-router-dom";
import "./home.css";

function home()  {
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
      <div className="sliders">
        <div class="bg-text-container">
          <div class="animate-text">
            <span className="synonym">Developer&nbsp;</span>
            <span className="synonym">Developer&nbsp;</span>
          </div>
          <div class="animate-text left">
            <span className="synonym">Engineer&nbsp;</span>
            <span className="synonym">Engineer&nbsp;</span>
          </div>
        </div>
      </div>
      <div class="card">
        <h1>
          {" "}
          I am a
          <div class="scroller">
            <span>
              Developer
              <br />
              Engineer
              <br />
              Designer
              <br />
              Dreamer
            </span>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default home;
