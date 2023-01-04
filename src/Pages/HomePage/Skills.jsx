import {
  FaCalculator,
  FaDatabase,
  FaLightbulb,
  FaNetworkWired,
  FaPython,
} from "react-icons/fa";
import { AiFillApi, AiOutlineTeam } from "react-icons/ai";
const Skills = () => {
  return (
    <div className="d-flex justify-content-center">
      {/* start section services */}
      <div id="services">
        <div className="services-block">
          <div>
            <FaCalculator />
          </div>
          <span>Problem Solving</span>
          <p className="separator">
            Ability to make informed decisions and take ownership in providing
            solutions to customers while working.
          </p>
        </div>
        <div className="services-block">
          <FaLightbulb />
          <span>System Thinking</span>
          <p className="separator">
            I can view systems from a broad prespective, rather than seeing only
            specific events in the system.
          </p>
        </div>

        <div className="services-block">
          <AiFillApi />
          <span>API</span>
          <p className="separator">
            Create a publicly available web-based API that returns data, likely
            in JSON, to communicate with application{" "}
          </p>
        </div>
        <div className="services-block">
          <FaDatabase />
          <span>Communicating</span>
          <p className="separator">
            I can explain things clearly, communicate problems quickly and write
            accurately and concisely.{" "}
          </p>
        </div>
        <div className="services-block">
          <FaNetworkWired />
          <span>Organizing</span>
          <p className="separator">
            Cordinate resources, policies and procedures to facilitate the goals
            identified in the project.
          </p>
        </div>
        <div className="services-block">
          <FaPython />
          <span>Python/Django</span>
          <p className="separator">
            Used for developing both desktop, web applications and Data Science
          </p>
        </div>
      </div>
      {/* end section services */}
    </div>
  );
};

export default Skills;
