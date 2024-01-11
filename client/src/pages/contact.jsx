import { Link } from "react-router-dom";

function contact() {
  return (
  <div className="navbar">
      <div className="header-text">
      <h2>Contact </h2>
      </div>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default contact;
