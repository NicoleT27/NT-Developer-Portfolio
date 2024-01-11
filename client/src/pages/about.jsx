import { Link } from "react-router-dom";

function about() {
    return (
    <header>
      <div className="header-text">
        <h2>About </h2>
      </div>
      <div className="navbar">
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      </div>
    </header>
  );
}

export default about;
