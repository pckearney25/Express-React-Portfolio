import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import "../../assets/css/Blog.css";

class NewPost extends React.Component {
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
                    src={require("../../assets/images/post-images/confetti.jpg")}
                    alt="post-pic"
                  />
                </div>
                <div className="post-text-div">
                  <h3>{`Joyful Coding`}</h3>
                  <div className="post-teaser">{`I'm resolving to create joy-inspiring user experiences in 2019.`}</div>
                </div>
              </div>
              <div className="line-div" />
              <div className="content-div">
                <p className="content-regular-paragraph">
                  {`I’ve always loved the relaxed time of the holidays between the Christmas and New Year’s Day. The frenzied commercial portion of Christmas is over and the more formal, business-as-usual work days of the new year still lie ahead. For me it is a time to read, think, and create. This year, with the tidings of comfort and joy and wishes for a joyous and prosperous new year are still ringing in the air, I’ve been studying the concept of joy. While relaxing by the decorated live tree in my home, sipping hot tea, and savoring the nearby company of my two sleeping dogs, I’ve been reading `}{" "}
                  <a
                    className="blog-link"
                    href="https://www.amazon.com/Joyful-Surprising-Ordinary-Extraordinary-Happiness/dp/0316399264/ref=asc_df_0316399264/?tag=hyprod-20&linkCode=df0&hvadid=312178271755&hvpos=1o1&hvnetw=g&hvrand=2843462324686165385&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9023227&hvtargid=aud-467077737785:pla-523437063811&psc=1&tag=&ref=&adgrpid=60258871377&hvpone=&hvptwo=&hvadid=312178271755&hvpos=1o1&hvnetw=g&hvrand=2843462324686165385&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9023227&hvtargid=aud-467077737785:pla-523437063811"
                  >
                    {`“Joyful: The Surprising Power of Ordinary Things to Create Extraordinary Happiness”`}
                  </a>
                  {` by Ingrid Fetell Lee, which I ordered a month ago after listening to an interview with the author on the `}
                  <a
                    className="blog-link"
                    href="https://www.npr.org/programs/ted-radio-hour/668359164/where-joy-hides"
                  >{`TED Radio Hour`}</a>
                  {`. It has been a very pleasant experience.`}
                </p>

                <p className="content-regular-paragraph">
                  {`I was prompted to order the book because I was trying to figure out why the reactions to `}{" "}
                  <a
                    className="blog-link"
                    href="https://bee-z-street.herokuapp.com/login"
                  >{`Bee-Z-Street`}</a>
                  {`, a coding team project I had done with `}
                  <a
                    className="blog-link"
                    href="https://www.samanthamccallfp18.com/"
                  >{`Samantha McCall`}</a>
                  {` and two other students during coding class last spring, have been so positive when we have shown it around informally.  At this point Bee-Z-Street is little more than a student demonstration project: you sign up, enter a short list of parameters about your yard (sun, soil, water), and get a list of (Midwest) native plants. There is a rudimentary garden design feature, and for each plant you get information on the pollinators that visit the plant. `}
                </p>

                <p className="content-regular-paragraph">
                  {`The original idea for the project came to me last spring while I was pursuing my hobbies of gardening and beekeeping. I was working through the book, `}{" "}
                  <a
                    className="blog-link"
                    href="https://www.amazon.com/Pollinators-Native-Plants-Identify-Beneficial/dp/0991356306/ref=asc_df_0991356306/?tag=hyprod-20&linkCode=df0&hvadid=312014159412&hvpos=1o1&hvnetw=g&hvrand=13051730183009903998&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9023227&hvtargid=aud-467077737785:pla-567916679211&psc=1"
                  >
                    {`“Pollinators of Native Plants”`}
                  </a>{" "}
                  {` by Heather N. Holm, and it struck me how much more impactful the valuable information it contained could be, if it were lifted off of paper pages and incorporated into an electronic database.  Later if I had coded Bee-Z-Street by myself, I think it would have been useful but dull. Fortunately for me, my teammates brought a perspective of fun to the sight: a garden design page was added, bright colors were used, and the page for each plant displayed pictures of that plant’s pollinators to take a user on a digital safari of sorts. `}
                </p>

                <p className="content-regular-paragraph">{`I came out of the project with a feeling that there were valuable things to be developed: things that could be businesses someday and, more importantly, things that I should bring into my coding work now—one of which is a sense of joy.  `}</p>

                <p className="content-regular-paragraph">{`Let’s face it, the internet has become a darker place. Our data is being mined for commercial profit. Trolls are out to steal our identities and manipulate our opinions. Carefully curated sites provide as much interest as a monocultured landscape. However, it doesn’t have to be this way. It has to be possible to navigate the dangers of the digital rainforest while still wondering in the beauty of it. This is where joy comes in.`}</p>

                <p className="content-regular-paragraph">{`I’m being energized as I read about the ten aesthetics of joy identified by Ingrid Lee in Joyful. These are: Energy, Abundance, Freedom, Harmony, Play, Surprise, Transcendence, Magic, Celebration and Renewal. These are concepts that can find application both in front and back end web development. The client-side application should have an energy and harmony that draws you into a site. A server-side application should provide the safety that enables the freedom to explore and play.`}</p>

                <p className="content-regular-paragraph">{`In 2018, I encountered all of these aesthetics of joy as a student in a coding boot camp. I’ve also been incorporating some of them in my more recent projects. My website incorporates an animation of dawn in a meadow that you encounter when the site first loads. In the slider game, I added a more playful picture version of the puzzle. In both of these I’ve been trying to instill a sense of harmony on the pages through ordered layouts. In 2019, I’m looking forward to incorporating more of these concepts in my work. Wait and see. It’s going to be a great year.`}</p>

                <p className="content-regular-paragraph">{`Wishing You All a Joyous and Prosperous New Year!`}</p>
              </div>
              <div className="line-div" />
              <Link to={`/blog`} role="button" className="blog-btn">
                <div className="btn-message">{`Return to Blog`}</div>
              </Link>
              <h6>{`Published December 28, 2018`}</h6>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default NewPost;
