import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Featured from "./components/Featured";

const App = () => {
  useSmoothScroll();

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/featured" element={<Featured />} /> */}
      </Routes>
    </div>
  );
};

export default App;
