import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import PortfolioTimeline from "../../Timelines/PortfolioTimeline";

class Portfolio extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <Wrapper>
        <SectionTitle
          src={require("../../../assets/images/butterflyweed.jpg")}
          sectiontitle={"Portfolio"}
          quote={`"I strive to build clean, enjoyable, and informative user experiences."`}
        />
        <p className="section-paragraph">
          <span>About the Portfolio: </span> Presented below are a few of the
          projects that I've enjoyed working on. These span a range from a
          simple JavaScript game to a full-stack MERN application with user
          authentication. I try to place an emphasis on providing a clean user
          interface and an enjoyable user experience. Links to project code and
          deployed applications will open in new windows.
        </p>

        <p className="section-paragraph">
          <span>{`Selected Projects: `}</span>
        </p>
        <PortfolioTimeline />
      </Wrapper>
    );
  }
}

export default Portfolio;
