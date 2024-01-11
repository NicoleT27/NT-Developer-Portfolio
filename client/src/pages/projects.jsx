import { Link } from "react-router-dom";

function projects() {
  return (
    <div>
      <h2>Projects</h2>
        <div className="navbar">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default projects;
