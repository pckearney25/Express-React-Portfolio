import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const styles = {
  width: "26px",
  height: "26px"
};
export default [
  {
    id: "0",
    date: "November 2018",
    title: "React Portfolio",
    description: "My New Personal Website Created with React",
    highlights:
      "React, ReactCSSTransitionGroup, ReactVerticalTimeline, ReactFontAwesome, CSS Flexbox, Form Submission via PHP.",
    deployed: "https://pckearney.com",
    repo: "https://github.com/pckearney25/React-Portfolio",
    imgSrc: require("../../assets/images/portfolio.jpg"),
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon={["fab", "react"]}
        style={styles}
      />
    )
  },
  {
    id: "1",
    date: "October 2018",
    title: "Slider Game",
    description:
      "A React Clickable Puzzle Based on Those Old Plastic Childrens Toys.",
    highlights:
      "React, JavaScript Timers, CSS Flexbox, Playable as a Numbers or Picture Puzzle.",
    deployed: "https://pckearney25.github.io/Slider-Game/",
    repo: "https://github.com/pckearney25/Slider-Game",
    imgSrc: require("../../assets/images/slider.jpg"),
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon={["fab", "react"]}
        style={styles}
      />
    )
  },
  {
    id: "2",
    date: "July 2018",
    title: "Bee-Z Street",
    description: "A Full-Stack MERN App for Creating Native Plant Gardens.",
    highlights:
      "React, React-Materialize, Mongo Databases, Passport Authentication.",
    deployed: "https://bee-z-street.herokuapp.com/",
    repo: "https://github.com/pckearney25/Bee-Z_Street",
    imgSrc: require("../../assets/images/bee.jpg"),
    icon: <FontAwesomeIcon className="fa-icon" icon="database" style={styles} />
  },
  {
    id: "3",
    date: "June 2018",
    title: "NYT Scrubber",
    description: "A Full-Stack MERN App for Gathering News Articles.",
    highlights: "React, Mongo Databases, Passport Authentication.",
    deployed: "https://pck-ntyscrubber-mern-app.herokuapp.com/",
    repo: "https://github.com/pckearney25/NYT_MERN_App",
    imgSrc: require("../../assets/images/nytimes.jpg"),
    icon: <FontAwesomeIcon className="fa-icon" icon="database" style={styles} />
  },
  {
    id: "4",
    date: "May 2018",
    title: "Esquire Scraper",
    description:
      "An App for Reviewing and Commenting on Articles from Esquire.",
    highlights:
      "Mongodb Database, Express-Handlebars, and the Cheerio package for Website Scraping.",
    deployed: "https://pck-mongo-esquire-scrapper.herokuapp.com/",
    repo: "https://github.com/pckearney25/Esquire-Mongo-Scraper",
    imgSrc: require("../../assets/images/mensfashion.jpg"),
    icon: <FontAwesomeIcon className="fa-icon" icon="database" style={styles} />
  },
  {
    id: "5",
    date: "April 2018",
    title: "Handling Burgers and ORMs",
    description:
      "A Full-Stack App Using a MySQL Database to Keep Track of Hamburgers",
    highlights:
      "Node, MySQL, Express, Express-Handlebars, and a Custom-Coded ORM.",
    deployed: "https://pck-mysql-burger-app.herokuapp.com/",
    repo: "https://github.com/pckearney25/Burger",
    imgSrc: require("../../assets/images/burger.jpg"),
    icon: <FontAwesomeIcon className="fa-icon" icon="database" style={styles} />
  },
  {
    id: "6",
    date: "March 2018",
    title: "Divas Game",
    description: "A JavaScript 'Music Diva' Themed Hangman Style Game",
    highlights:
      "Written Completely in JavaScript, Includes a Message Board and YouTube Video Rewards.",
    deployed: "https://pckearney25.github.io/Divas-Game/",
    repo: "https://github.com/pckearney25/Divas-Game",
    imgSrc: require("../../assets/images/diva.jpg"),
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon={["fab", "js-square"]}
        style={styles}
      />
    )
  },
  {
    id: "7",
    date: "March 2018",
    title: "Triva Game",
    description: "A'World Cities' Themed bar-style Trivia Game.",
    highlights:
      "JavaScript, jQuery, and JS-timers Are Used to Present a Slide-show of Questions and Answers.",
    deployed: "https://pckearney25.github.io/TriviaGame/",
    repo: "https://github.com/pckearney25/TriviaGame",
    imgSrc: require("../../assets/images/kyoto.jpg"),
    icon: (
      <FontAwesomeIcon
        className="fa-icon"
        icon={["fab", "js-square"]}
        style={styles}
      />
    )
  }
];
