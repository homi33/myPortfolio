import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Portfolio",
      des: "Simple Frontend web page. || Role: Developer.",
      projectlink: "https://homi33.github.io/Homi-sWcesite//",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
      ],
    },

    {
      name: "TinDogs",
      des: "Frontend web page. || Role: Developer.",
      projectlink: "https://homi33.github.io/TindDogs//",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },

    {
      name: "ColorFlipper",
      des: "Frontend application. || Features: Changes random background color on each Click. || Role: Developer.",
      projectlink: "https://homi33.github.io/ColorFlipper//",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JavaScript",
        },
      ],
    },
    {
      name: "Drum-Stick-Sounds",
      des: "Frontend application. || Features: On clicking on particular letters we can hear the sound of the musical instruments.|| Role: Developer.",
      projectlink: "https://homi33.github.io/DrumStick//",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JavaScript",
        },
      ],
    },
    {
      name: "Guess the Correct Number",
      des: "Frontend Application(Game). || Features: Guess the number with 5 attempts(Hard-level) or with 10 attempts(Easy-level). On each guess of the wrong number 1 attempt loss. If given attempts are finished show the correct number.|| Role: Developer.",
      projectlink: "https://homi33.github.io/GuessGameHomi.github.io//",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JavaScript",
        },
      ],
    },

    {
      name: "Add to CART",
      des: "Frontend Application. || Features: Simple cart clone, it removes item, modifies several items, and get the total of items.|| Role: Developer.",
      projectlink: "https://f1jej7-3000.preview.csb.app/",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "React-Js",
        },
      ],
    },

    {
      name: "ToDoList",
      des: "Frontend Application. || Features: Simple to-do list, where u can Add your daily task and after completing the task, delete the completed task.|| Role: Developer.",
      projectlink: "https://jmy8br-3000.preview.csb.app///",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "React-Js",
        },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
