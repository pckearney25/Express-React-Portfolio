import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import "../../assets/css/Blog.css";

class Post1 extends React.Component {
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
                    src={require("../../assets/images/post-images/gardening.jpg")}
                    alt="post-pic"
                  />
                </div>
                <div className="post-text-div">
                  <h3>{`About Me In 18 Interview Questions (Part 2 of 3):`}</h3>
                  <div className="post-teaser">{`I'm not a brand. I’m a person, and I want to sound like one during professional conversations.`}</div>
                </div>
              </div>
              <div className="line-div" />
              <div className="content-div">
                <p className="content-regular-paragraph">{`I observed while reading my answers in Part I of this series that it is pretty easy to lose one’s personality when answering interview questions. I think the stuffing only fell out of my shirt when I was talking about dolphins. Maybe this is because answering interview questions entails a certain bland/brand professionalism. In any case, I’m going to try to remedy that here as I answer this next set of interview questions.`}</p>
                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 7. What do you like to do outside of work? `}</span>
                </p>
                <p className="content-indented-paragraph">{`I like to be outside a lot. When I lived in San Francisco, I would mountain bike, sail, ride motorcycles, and take my dog to the beach. When I moved to Kansas City, I made adjustments. Now I road bike, walk my dogs on the trails near my home, keep bees, and garden. Gardening has become an absolute passion for me here. I love the diversity of things you can grow, how using native plants attracts butterflies and bees to my yard, and how the sun and the air feel over the course of a day as I’m playing in the dirt. I’m also working toward becoming a certified master gardener with the Master Gardeners of Greater Kansas City. It’s a great organization and I’m happy to have found a community of people that I can relate to there.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 8. What are your greatest professional strengths?`}</span>
                </p>
                <p className="content-indented-paragraph">{`Resilience: I’ve experienced plenty of setbacks, and I’m grateful to have had a mentor early in my career who taught me how look at a “failure” and rework it into a success. This strength was particularly handy, when I had to redesign research plans to meet compound delivery and revenue goals, when I was leading drug-discovery teams that had to achieve as much as teams twice our size and resources, and when I repurposed my own skills both to start HD Sciences and to transition to web-development.`}</p>
                <p className="content-indented-paragraph">{`Grit: I don’t mind rolling up my sleeves, getting dirty, and mustering the resolve to see things through. My career has been built on trying to accomplish big things, such as meeting the non-negotiable deadlines for delivering large numbers of chemical compounds to business partners and starting a business around a new chemical technology. A lot of my personal satisfaction comes from knowing I did my best to make things happen.`}</p>
                <p className="content-indented-paragraph">{`Fairness and Honesty:  People want to be treated justly and sweeping inconvenient news under the rug is rarely worth it. Because of my reputation, I’ve noticed both that I have often had an easier time forging collaborations, and that I haven’t had to resolve nearly as many personnel issues as others.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 9. What do you consider to be your weaknesses?`}</span>
                </p>

                <p className="content-indented-paragraph">{`While I’m an extrovert by nature, have no qualms about speaking up in large meetings, and enjoy public speaking, I’m not very comfortable in large social situations. In general, I would rather be working than attending holiday parties, big group lunches, or company picnics, even though I know that these events are vital for building a solid career network. Some of this is residual from being a nerdy kid.  It didn’t get any easier later when I lost most of my hearing in one ear¬. Without stereo hearing and in only a moderately loud room, I can’t follow an individual conversation easily and the din of multiple conversations becomes very disorienting.`}</p>
                <p className="content-indented-paragraph">{`Using some of the techniques in Jean Martinet’s “The Art of Mingling”, has helped, especially in situations where I don’t know a soul. I deal with the hearing issues by strategic positioning, such as sitting at the corner of a table or holding conversations on a group’s periphery.`}</p>
                <p className="content-indented-paragraph">{`I also make an effort in to hold more one on one conversations at other times. These conversations have had an added benefit for me in high pressure situations. I thrive in these situations, but I can be a bit too focused. Having a “gritty” attitude is great and all but can come off as cold. Holding these conversations enable me to help reduce the emotional stresses my team can be feeling, and they’re remarkably easy for me. I just need to actively remind myself to hold them.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 10. What is your greatest professional achievement?`}</span>
                </p>
                <p className="content-indented-paragraph">{`There may be more obvious ones, but I consider my greatest achievement to be the start of HD Sciences, even though it ultimately failed. To make that company happen, I not only had to have an original idea, which I refined through many hours of conversation with a local professor, but also had to spend almost a year building the network of academic, business, and legal professionals needed to lay the groundwork for making working on the KU campus as a non-academic possible. To this day I think I may be the only person to walk in off the street and into a virtual office at the Bioscience and Technology Business Center there. I surprised myself with my hustle and dedication on that one. I didn’t know a soul in the region when I started.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 11. Why should we hire you? `}</span>
                </p>
                <p className="content-indented-statement">{`As I discussed in the previous post, good programming requires organization, an attention to detail, a willingness to experiment, and the ability to analyze data and formulate hypotheses—all skills I possess. Tech is also a social enterprise that requires excellent communication, leadership and management skills, which I can transfer from my experience in other work environments, including coding team projects. It also requires creativity, which I’ve demonstrated in my portfolio of work from both during the full-stack web-development course I took at KU and afterward.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 12. “Describe yourself in three words.”`}</span>
                </p>
                <p className="content-indented-statement">{`I don’t want to use something too corporate sounding, as if it were extracted from a Myers-Briggs personality test report, so I’m going with:`}</p>
                <p className="content-indented-statement">{`Powerfully, Passionately, Alive. – That’s me.`}</p>
                <p className="content-indented-statement">{`Because my life is lived both inside and outside of work, because I throw myself directly into and enjoy living it, and because there is a lot more that I want to experience.`}</p>

                <p className="content-regular-paragraph">
                  <span className="content-span-bold">{`Next Post: `}</span>
                  {`How many days it takes for a snail to escape a well. Until then!`}
                </p>

                <p className="content-regular-paragraph">{``}</p>
                <p className="content-indented-paragraph">{``}</p>
                <p className="content-indented-statement">{``}</p>
                <p className="content-indented-statement">
                  <span className="content-span-bold">{``}</span>
                </p>
                <span className="content-span-italic">{``}</span>
                <span className="content-span-bold">{``}</span>
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

export default Post1;
