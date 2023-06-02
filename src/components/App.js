import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
// import Projectdetails from "./Projectdetails";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Projectdetails from "./Projectdetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectId" element={<Projectdetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
