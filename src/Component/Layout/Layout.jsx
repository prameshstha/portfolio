import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import "./Layout.css";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main__layout">
      <Navbar window={window} />
      <div className="layout__children">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
