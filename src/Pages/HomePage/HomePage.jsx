import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import "./HomePage.css";
import Skills from "./Skills";
const HomePage = () => {
  return (
    <div className="main__homepage__div">
      <AboutMe />
      <Skills />
      <ContactMe />
    </div>
  );
};

export default HomePage;
