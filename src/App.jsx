import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
