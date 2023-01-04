import {
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaRegCopyright,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__div">
      <div className="footer__icons">
        <a
          href="https://linkedin.com/in/pramesh-shrestha-190778a/"
          target="_blank"
        >
          <FaLinkedin color="white" size={15} />
        </a>

        <a href="https://github.com/prameshstha" target="_blank">
          <FaGithub color="white" size={15} />
        </a>
        <a
          href="https://stackoverflow.com/users/17323426/atigdawgahb"
          target="_blank"
        >
          <FaStackOverflow color="white" size={15} />
        </a>

        <a href="https://twitter.com/pramesh11172" target="_blank">
          <FaTwitter color="white" size={15} />
        </a>

        <a href="https://shresthapramesh.com.np" target="_blank">
          <FaGlobe color="white" size={15} />
        </a>
      </div>
      <div className="text-light copyright">
        <div>
          <FaRegCopyright color="white" size={15} />
        </div>
        <div>Pramesh Shrestha</div>
        <div>pramesh11172@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
