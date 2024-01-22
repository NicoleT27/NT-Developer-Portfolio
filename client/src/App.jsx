import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import Interests from "./pages/interests.jsx";



function App() {
return (
  <BrowserRouter>
    <Home />
    <About />
    <Projects />
    <Interests />
    <Contact />
  </BrowserRouter>
);

}


export default App;
