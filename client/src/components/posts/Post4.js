import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import "../../assets/css/Blog.css";

class Post4 extends React.Component {
  render() {
    window.scrollTo(0, 0);
    const cat = this.props.cat;
    console.log(cat);
    return (
      <Wrapper>
        <SectionTitle
          src={require("../../assets/images/sunflowers.jpg")}
          sectiontitle={"Blog Article"}
        />

        <div className="blog-container">
          <div className="blog-post">
            <div className="post-container">
              <div className="image-text-div">
                <div className="post-image-div">
                  <img
                    className="post-image"
                    src={require("../../assets/images/post-images/poker.jpg")}
                    alt="post-pic"
                  />
                </div>
                <div className="post-text-div">
                  <h3>{`Learning to Fold ‘em`}</h3>
                  <div className="post-teaser">{`As a beginning web-developer, my time is too valuable to solve every technical challenge.`}</div>
                </div>
              </div>
              <div className="line-div" />
              <div className="content-div">
                <p className="content-regular-paragraph">{`I’m really happy to have gotten my personal website up here at Heroku. A lot of thought went into designing the site and the content, making sure all of the features and links worked, the contact form prompted for all the info before sending mail, and that the user experience follows the joyful ideal that I described in my last post. It was a long process, not without road-blocks, but worth it; and I think the site shows my current skill level as a web-developer fairly accurately.  My original intent was to host this site over at GoDaddy, where I re-parked the domain name (pckearney.com) two months ago and bought a hosting package.`}</p>
                <p className="content-regular-paragraph">{`This brings us to the Kenny Rogers poker-themed title to this post. While I was able to get the site posted to and working on Heroku within a few minutes, I was unable to get the site up at GoDaddy over several days.  This is not a slam against GoDaddy. This is about recognizing that I probably made a poor choice in a hosting service for a Node-Express-React app and that I needed to make a strategic decision to move on to efforts that deliver larger dividends now. Simply put, there is simply too much to learn at this early stage in my web-development career. It’s a long game with many rounds, so it is critical that I don’t get caught up with any one hand. As the song says, you’ve got to know when to hold ‘em, fold ‘em, walk away, and run.`}</p>
                <iframe
                  className="video-div"
                  src="https://www.youtube.com/embed/7hx4gdlfamo"
                  title="the-gambler"
                />
                <p className="content-regular-paragraph">{`I think I’m at a critical point in my development. I can now read code that seemed mysterious to me several months ago when it was presented in coding boot camp.  With the help of Google and the amazing community on Stack-Overflow, I’ve been able to research and solve a number of issues I’ve encountered. (I swear I’ll start working to remove the “user chooses to remain anonymous” status that I have over at Stack-Overflow soon.) I feel like I can solve any coding problem presented to me given enough time, but “time” is the key word here. There is a huge difference between “Can I solve this problem?” and “Should I solve this problem?”`}</p>
                <p className="content-regular-paragraph">{`My gut instinct is usually to go with “can”, and I was partly successful in deploying the site. I made an initial faux pas by locking myself out of my shell access to GoDaddy, but after two visits to the online help-desk, I was in.  (Tip: Adding “I’m counting on you!”, “Great job!”, and “Don’t let me down, man!” to the ends of your online messages will get you much better service with the technicians there than trying to win points with logic.) Installing Node JS through a judicious reading of online posts, was easy enough. However, it all went downhill from there. GoDaddy’s site wouldn’t enable my server.js to run Nodemailer JS. My React App would render, but without any images (which shouldn’t intuitively happen). The React routing, which worked so flawlessly on Heroku, was also malfunctioning.    `}</p>
                <p className="content-regular-paragraph">{`After a couple of evenings at home self-irritating/consoling myself with “hold ‘em” type slogans, “Tomorrow is another day, so don’t give up!”, I recognized that solving these problems was going to be a deep dive into the nitty gritty of GoDaddy file structure and recoding the contact form for a third time. While I want to be successful at everything I code, I had to remind myself of the bigger game here: employment. I told myself that employers will be far more impressed with experience hosting on AWS. They will want to see more original works from me. They will want to see if I understand how to code more advanced sites, employing libraries such as Flux or GraphQL. They’ll be looking to see if I know how to incorporate more advanced CSS stylings to make the front-ends of my sites more vibrant. These are things I’m also far more interested in and want to move onto now. `}</p>
                <p className="content-regular-paragraph">
                  {`So, for this week, “Should I solve this problem?” wins, and I fold: `}
                  <a
                    className="blog-link"
                    href="https://pckearney.herokuapp.com/"
                    target={"_blank"}
                  >{`pckearney.herokuapp.com`}</a>{" "}
                  {` is just fine. I’m running onto new things.`}
                </p>
              </div>
              <div className="line-div" />
              <Link to={`/blog`} role="button" className="blog-btn">
                <div className="btn-message">{`Return to Blog`}</div>
              </Link>
              <h6>{`Published November 26, 2018`}</h6>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Post4;
