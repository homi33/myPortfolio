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
      name: "Movie App",
      des: "Frontend Application(Game). || Features: Whenever you hover the poster it will show the overview of that movie.|| Role: Developer.",
      projectlink: "https://homi33.github.io/MovieApp/",
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

    {
      name: "Random Picker",
      des: "Frontend Application. || Features: When you Add Something this app will randomly select one value.|| Role: Developer.",
      projectlink: "https://homi33.github.io/RandomPicker/",
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
