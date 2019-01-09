import React from "react";
import "./SectionTitle.css";

const SectionTitle = props => (
  <div>
    <div className="section-div">
      <div className="section-img-div">
        <img src={props.src} alt="PCK pic" className="section-image" />
      </div>
      <div className="section-title-div">
        <h2 className="section-title">{props.sectiontitle}</h2>
        <p className="section-quote">{props.quote}</p>
      </div>
    </div>
    <div className="section-line-div" />
  </div>
);

export default SectionTitle;
