import { Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Foother from "./components/Foother";
import NotFound from "./components/NotFound";

const App = () => {
  useSmoothScroll();

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog needFullHight={true} />} />
        <Route path="*" element={<NotFound needFullHight={true} />} />
      </Routes>
      <Foother />
    </div>
  );
};

export default App;
