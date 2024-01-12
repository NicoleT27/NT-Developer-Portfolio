import { Link } from "react-router-dom";
import leftLeaf from "../assets/images/leftLeaf.png";

function projects() {
  return (
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
      <div>
      <img className="leftLeaf" src={leftLeaf} alt="svg of leaves" />
    </div>
    </header>
  );
}

export default projects;
