import { Link } from "react-router-dom";

function projects() {
  return (
    <header>
      <div className="header-text">
        <h2>Projects </h2>
      </div>
      <div className="navbar">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}

export default projects;
