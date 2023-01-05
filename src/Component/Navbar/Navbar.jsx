import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
          <Link to="/movie-rs" onClick={showNavbar}>
            Movie RS
          </Link>
          <Link to="/laptop-price" onClick={showNavbar}>
            Laptop Price
          </Link>
          <Link to="/#" onClick={showNavbar}>
            Blogs
          </Link>
          <Link to="/#" onClick={showNavbar}>
            About me
          </Link>
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
