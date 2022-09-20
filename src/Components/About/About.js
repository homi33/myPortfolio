import React from "react";
import "./About.css";
import profilepic from "../../Image/h.JPG";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={profilepic} alt="Profile " />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
                Inspired to pick up new challenges, learn new skills, and push
                possibilities.
                <br />I am looking to start my career as an entry-level software
                engineer with a reputed firm driven by technology. Ability to
                create innovative, creative, & interactive web designs to boost
                customer engagement.
                <br />
                Sound knowledge in HTML, CSS, JavaScript, React-Js & other
                frameworks.
                <br />
                Passionate individual with great interpersonal and communication
                skills.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
