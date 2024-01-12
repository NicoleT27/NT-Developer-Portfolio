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
