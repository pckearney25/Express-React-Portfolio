import careers from "../../../assets/files/careers";
import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./WorkTimeline.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBriefcase,
  faGraduationCap,
  faBook
} from "@fortawesome/free-solid-svg-icons";

library.add(faLeaf, faBriefcase, faGraduationCap, faBook);

class WorkTimeline extends Component {
  state = {
    careers
  };
  render() {
    const styles = {
      width: "26px",
      height: "26px"
    };
    return (
      <div className="timeline-div">
        <VerticalTimeline>
          {this.state.careers.map(career => (
            <VerticalTimelineElement
              id={career.id}
              key={career.id}
              className={career.className}
              date={career.date}
              iconStyle={career.styles}
              icon={career.icon}
            >
              <h3 className="vertical-timeline-element-title work-timeline-title">
                {career.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {career.organization}
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                {career.location}
              </h4>

              <p>{career.description}</p>
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

export default WorkTimeline;
