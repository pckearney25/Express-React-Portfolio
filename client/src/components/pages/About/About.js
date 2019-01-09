import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import WorkTimeline from "../../Timelines/WorkTimeline";

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Wrapper>
          <SectionTitle
            src={require("../../../assets/images/author.jpg")}
            sectiontitle={"About Me"}
            quote={`"I want my work to help create the tech products and services needed for a better world."`}
          />
          <p className="section-paragraph">
            <span>{`Career: `}</span>
            {`In my work as a both a PhD
        pharmaceutical research scientist and an entrepreneur, I’ve seen a need
        for making information more useful to everyday people. In the next phase
        of my career, I want to help companies, organizations, and individuals
        better utilize information to create the products we’ll need in order to
        build a healthier and more sustainable world.`}
          </p>

          <p className="section-paragraph">
            <span>{`Coding Interest: `}</span>
            {`I started studying full-stack web-development, because in my opinion there remains plenty of
        information, which can be incorporated into databases (e.g. SQL or Mongo),
        be accessed through well designed web interfaces, and serve as the foundation
        of new businesses. I recently completed the six-month program in
        web-development offered by University of Kansas, am currently seeking
        employment in the field, and work everyday to develop my coding
        skills.`}
          </p>

          <p className="section-paragraph">
            <span>{`Career Highlights: `}</span>
          </p>

          <WorkTimeline />

          <p className="section-paragraph">
            <span>Personal Interests: </span>
            {`I’m an active life-long learner, and
        in addition to web-development I am also studying to become a certified
        master gardener through the University of Missouri Extension Program. I'm 
       currently developing Bee-Z Street, a home gardening
        application that I’m working on with `}
            <a href="https://www.samanthamccallfp18.com/">{`Samantha McCall`}</a>
            {`,
        whom I met during the KU program. I'm also developing ideas to
        make fitness and nutrition more generally appealing to men of all walks
        of life.`}
          </p>

          <p className="section-paragraph">
            <span>Technical Resume and Scientific CV: </span>
          </p>
          <ul className="section-list">
            <li>
              <a
                href={require("../../../assets/files/PCK_Technical_Resume.pdf")}
                target={"_blank"}
                className="hvr-grow"
              >
                Technical Resume
              </a>
            </li>
            <li>
              <a
                href={require("../../../assets/files/PCK_CV.pdf")}
                target={"_blank"}
                className="hvr-grow"
              >
                Scientific CV
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
    );
  }
}
export default About;
