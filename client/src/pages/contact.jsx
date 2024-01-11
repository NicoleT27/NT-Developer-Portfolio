import { Link } from "react-router-dom";

function contact() {
  return (
    <header>
      <div className="header-text">
      <h2>Contact </h2>
      </div>
       <div className="navbar">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/">Home</Link>
    </div>
    </header>
  );
}

export default contact;
