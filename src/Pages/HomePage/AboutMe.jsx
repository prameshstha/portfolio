import React from "react";
import images from "../../Assets";

const AboutMe = () => {
  return (
    <div>
      {" "}
      {/* about section start */}
      <div className="about">
        <div id="about" className="paddsection">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 ">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img src={images.me} className="" alt="me" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-descr">
                  <p className="p-heading">
                    I design, build websites. Have a project, idea or problem
                    you'd like to discuss?
                  </p>
                  <p className="separator">
                    I primarily use Python, but picking up a new framework or
                    language is not a problem. I am comfortable developing on
                    frontend or backend as well as setting up and managing
                    infrastructure. My bread and butter is Django and its
                    associate stacks for all sorts of projects: CMS websites,
                    database-driven web application, Web APIs.
                  </p>
                  <p className="separator">
                    Tech: Python/Django, MySQL, Bootstrap, SQL, C#, JAVA,
                    ASP.NET, JavaScript, CSS, jQuery, Json, Redis.
                  </p>
                  <p className="separator">
                    Helping start-ups, small businesses, and agencies achieve
                    high quality websites and exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
    </div>
  );
};

export default AboutMe;
