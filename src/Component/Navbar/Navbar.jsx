import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="main__nav__div">
      <header className="nav__header">
        <strong>Pramesh</strong>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/movie-rs">Movie RS</a>
          <a href="/workspace">Workspace</a>
          <a href="/#">Blogs</a>
          <a href="/#">About me</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
