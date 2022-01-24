import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "swiper/css";
import Header from "./components/header";
import About from "./views/about";
import Home from "./views/home";
import Project from "./views/projects";
import Resume from "./views/resume";
import Contacts from "./views/contacts";

function App() {
  return (
    <Router>
      <div className="home">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
