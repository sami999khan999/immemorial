import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGesapDownStagger } from "../hooks/gsap";

const NavBar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const favRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [favRef];
  const logoArr = [logoRef];

  useGesapDownStagger(liArr, 1.7);
  useGesapDownStagger(logoArr, 2.4);
  useGesapDownStagger(favArr, 2.9);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="/featured">Featured</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to="/">
          <h2>Immemorial</h2>
        </Link>
      </div>
      <div className="favourite-link" ref={favRef}>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
