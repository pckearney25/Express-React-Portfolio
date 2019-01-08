import projects from "../../../assets/files/projects";
import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./PortfolioTimeline.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faPassport,
  faServer
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faJsSquare,
  faCss3
} from "@fortawesome/free-brands-svg-icons";
//Note we use faLeaf too, but its imported elsewhere.
//In future import all fa icons at App level for cleaner code?
library.add(
  fab,
  faDatabase,
  faCode,
  faPassport,
  faReact,
  faNodeJs,
  faJsSquare,
  faCss3,
  faServer
);

class PortfolioTimeline extends Component {
  state = {
    projects
  };
  render() {
    const styles = {
      width: "26px",
      height: "26px"
    };
    return (
      <div className="timeline-div">
        <VerticalTimeline>
          {this.state.projects.map(project => (
            <VerticalTimelineElement
              id={project.id}
              key={project.id}
              className="vertical-timeline-element--project"
              date={`Deployed: ${project.date}`}
              iconStyle={{ background: "#58B041", color: "#fff" }}
              icon={project.icon}
            >
              <div className="timeline-project-container">
                <div className="timeline-project-image-div">
                  <img
                    className="timeline-project-image"
                    src={project.imgSrc}
                    alt="project-pic"
                  />
                </div>

                <div className="timeline-project-container-div">
                  <h3 className="timeline-project-title">{project.title}</h3>
                  <h4 className="timeline-project-description">
                    {project.description}
                  </h4>
                </div>
              </div>
              <p className="timeline-project-paragraph">
                <span>{`Highlights: `}</span>
                {project.highlights}
              </p>
              <div className="timeline-buttons-container">
                <button className="timeline-repo-btn">
                  <a target={"_blank"} href={project.repo}>
                    Project Code
                  </a>
                </button>
                <button className="timeline-deployed-btn">
                  <a target={"_blank"} href={project.deployed}>
                    Deployed App
                  </a>
                </button>
              </div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            className="vertical-timeline-element--gardening"
            iconStyle={{ background: "#44220C", color: "#fff" }}
            icon={
              <FontAwesomeIcon className="fa-icon" icon="leaf" style={styles} />
            }
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default PortfolioTimeline;
