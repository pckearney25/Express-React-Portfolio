import React from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import WrapperHome from "../../WrapperHome";
import "./Home.css";

class Home extends React.Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <WrapperHome>
        <CSSTransitionGroup
          transitionName="boxer"
          transitionAppear={true}
          transitionAppearTimeout={600000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div id="quote-container">
            <CSSTransitionGroup
              transitionName="quote1"
              transitionAppear={true}
              transitionAppearTimeout={1700}
              transitionEnter={false}
              transitionLeave={false}
            >
              <h2> {`"Absorb the opportunities around you."`}</h2>
            </CSSTransitionGroup>
            <CSSTransitionGroup
              transitionName="quote2"
              transitionAppear={true}
              transitionAppearTimeout={3200}
              transitionEnter={false}
              transitionLeave={false}
            >
              <h2> {`"Bloom where you're planted."`}</h2>
            </CSSTransitionGroup>

            <CSSTransitionGroup
              transitionName="quote3"
              transitionAppear={true}
              transitionAppearTimeout={4700}
              transitionEnter={false}
              transitionLeave={false}
            >
              <h2>{`"And create the seeds for a better world."`}</h2>
            </CSSTransitionGroup>
          </div>
        </CSSTransitionGroup>
      </WrapperHome>
    );
  }
}

export default Home;
