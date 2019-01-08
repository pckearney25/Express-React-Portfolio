import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const styles = {
  width: "26px",
  height: "26px"
};

export default [
  {
    id: "0",
    className: "vertical-timeline-element--work",
    date: "July 2018 - present",
    title: "Founder",
    organization: "Bee-Z Street",
    location: "Kansas City, MO",
    description:
      "Market Research, Business Plan Development, Web-Design, Web-Development",
    styles: { background: "#58B041", color: "#fff" },
    icon: (
      <FontAwesomeIcon className="fa-icon" icon="briefcase" style={styles} />
    )
  },
  {
    id: "1",
    className: "vertical-timeline-element--education",
    date: "January 2018 - July 2018",
    title: "Certificate in Full-Stack Web-Development",
    organization: "University of Kansas Extention",
    location: "Overland Park, KS",
    description: "JavaScript, Node, React, MySQL, MongoDB, Node and more.",
    styles: { background: "#C84A59", color: "#fff" },
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon="graduation-cap"
        style={styles}
      />
    )
  },
  {
    id: "2",
    className: "vertical-timeline-element--work",
    date: "November 2012 - September 2017",
    title: "Founder and CEO",
    organization: "HD Sciences",
    location: "Kansas City, KS",
    description:
      "Microscale Chemical Synthesis Technology Development, Grant Writing, Business Development",
    styles: { background: "#58B041", color: "#fff" },
    icon: (
      <FontAwesomeIcon className="fa-icon" icon="briefcase" style={styles} />
    )
  },
  {
    id: "3",
    className: "vertical-timeline-element--education",
    date: "March 2013 - April 2013",
    title: "Certificate in Tech Entrepreneurship",
    organization: "Kauffman Foundation TechVenture Program",
    location: "Kansas City, MO",
    description: "Study of Start-up Entrepreneurship",
    styles: { background: "#C84A59", color: "#fff" },
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon="graduation-cap"
        style={styles}
      />
    )
  },
  {
    id: "4",
    className: "vertical-timeline-element--work",
    date: "Aug 1999 - January 2011",
    title: "Senior Director, Medicinal Chemistry",
    organization: "Exelixis LLC",
    location: "South San Francisco, CA",
    description:
      "Cancer and Inflammation Drug Discovery, Chemical Library Development, Team Leadership, Department and Project Management",
    styles: { background: "#58B041", color: "#fff" },
    icon: (
      <FontAwesomeIcon className="fa-icon" icon="briefcase" style={styles} />
    )
  },
  {
    id: "5",
    className: "vertical-timeline-element--education",
    date: "January 1994",
    title: "PhD in Chemistry",
    organization: "California Insitute of Technology",
    location: "Pasadena, CA",
    description: "Specialization in Physical Organic Chemistry",
    styles: { background: "#C84A59", color: "#fff" },
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon="graduation-cap"
        style={styles}
      />
    )
  },
  {
    id: "6",
    className: "vertical-timeline-element--education",
    date: "June 1987",
    title: "Bachelor of Science, Chemistry",
    organization: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    description: "Graduation with honors.",
    styles: { background: "#C84A59", color: "#fff" },
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon="graduation-cap"
        style={styles}
      />
    )
  }
];
