import React from "react";
import "./projects.css"
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Projects() {
let redIconStyles = { background: "#DC2F02" };
let orangeIconStyles = { background: "#F48C06" };

  return (
    <div className="projects">
    <h3 className="project-title">Projects</h3>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isRedIcon = element.iconColor === "red";
          let showButton =
            element.buttonText1 || element.buttonText2 !== undefined &&
            element.buttonText1 || element.buttonText2!== null &&
            element.buttonText1 || element.buttonText2 !== "";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isRedIcon ? redIconStyles : orangeIconStyles}
              icon={element.icon}
              iconClassName="icon"
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.catagory}
              </h5>
              <p id="description">{element.description}</p>
              <div>
                {showButton && (
                  <a
                    className="buttonText1"
                    href={element.buttonLink1}
                    target="_blank"
                  >
                    {element.buttonText1}
                  </a>
                )}
                {showButton && (
                  <a
                    className="buttonText2"
                    href={element.buttonLink2}
                    target="_blank"
                  >
                    {element.buttonText2}
                  </a>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    // </div>
  );
}
export default Projects;

