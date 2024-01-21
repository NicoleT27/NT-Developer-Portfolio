import React from "react";
import "./projects.css"
// import WorkIcon from "../assets/images/work.svg";
// import SchoolIcon from "../assets/images/work.svg";

// import { ReactComponent as WorkIcon } from "../assets/images/work.svg";
// import { ReactComponent as SchoolIcon } from "../assets/images/school.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Projects() {
let workIconStyles = { background: "#DC2F02" };
let schoolIconStyles = { background: "#F48C06" };

  return (
    <div className="projects">
    <h3 className="project-title">Projects</h3>
      <VerticalTimeline>
        {/* <h3 className="project-title">Projects</h3> */}
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={
                    'button ${isWorkIcon ? "workButton" : "schoolButton"}'
                  }
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    // </div>
  );
}
export default Projects;

