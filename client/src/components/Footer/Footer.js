import React from "react";
import "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faLinkedin, faGithubSquare, faStackOverflow);

const Footer = () => (
  <footer>
    <div>{`© 2019 Patrick Kearney`}</div>
    <div className="soc-media-div">
      <a
        className="soc-media-links hvr-grow"
        href="https://www.linkedin.com/in/patrickckearney/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} className="fab" />
      </a>
      <a
        className="soc-media-links hvr-grow"
        href="https://github.com/pckearney25"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "github-square"]} className="fab" />
      </a>
      <a
        className="soc-media-links hvr-grow"
        href="https://stackoverflow.com/users/9205863/pckearney"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "stack-overflow"]} className="fab" />
      </a>
    </div>

    <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async />
  </footer>
);

export default Footer;
