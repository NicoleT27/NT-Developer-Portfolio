import { Link } from "react-router-dom";
import leftLeaf from "../assets/images/leftLeaf.png";
import "./projects.css";

function projects() {
  return (
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
      <img className="leftLeaf" src={leftLeaf} alt="svg of leaves" />
    </header>
  );
}

export default projects;
