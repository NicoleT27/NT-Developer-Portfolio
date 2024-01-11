import { Link } from "react-router-dom";

function home()  {
  return (
    <div>
      <h2>Home</h2>
        <div className="navbar">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default home;
