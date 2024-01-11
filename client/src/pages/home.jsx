import { Link } from "react-router-dom";

function home()  {
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
    </header>
  );
}

export default home;
