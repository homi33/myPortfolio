import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Newton School(Trainee)",
      position: "Web Developer",
      des: "Web development along with problem-solving. || Technical stack learned: HTML, CSS, Bootstrap, JavaScript, React JS, Material-UI. || Collaborate with other developers to update the website and create new features. ",
      year: "20 March, 2022 - Present",
      techskills: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },

    {
      companyname: "Unibite  Foods Pvt Ltd.",
      position: "Production Planning & Junior Manager",
      des: "Managing Inventory with the team. || Production planning based on clients' requirements. || In charge of receiving shipments and inspecting the product quality. ",
      year: "07 July, 2021 - 04 April, 2022",

      techskills: [
        {
          techname: "Product Quality Management",
        },
        {
          techname: "Production Planning",
        },
      ],
    },

    {
      companyname: "Synnova Gears & Transmissions Pvt Ltd.",
      position: "Maintenance Engineer",
      des: "Machine Reconditioning. || Machine Retro-fitting.",
      year: "03 March, 2020 - 05 July, 2021",

      techskills: [
        {
          techname: "Maintenance Engineer",
        },
      ],
    },

    {
      companyname: "Pickwell Engineering Pvt Ltd.",
      position: "Production Supervisor",
      des: "Supervise Production of Jacquard Machine. || Mechanical Drawings for piece parts of Jacquard Machine.",
      year: "01 January, 2019 - 01 March, 2020",

      techskills: [
        {
          techname: "Production Supervisor",
        },
      ],
    },
  ];

  const colors = [
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
