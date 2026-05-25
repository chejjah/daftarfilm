import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Detail from "./pages/detail";
import NotFound from "./pages/notfound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">🎬 Home</Link>
        <Link to="/about">ℹ️ About</Link>
        <Link to="/contact">📞 Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;