import { Link } from "react-router-dom";

function about() {
  return (
    <div>
      <h2>About </h2>
        <div className="navbar">
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default about;
