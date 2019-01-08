import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import "../../assets/css/Blog.css";

class Post0 extends React.Component {
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
                    src={require("../../assets/images/post-images/dolphin.jpg")}
                    alt="post-pic"
                  />
                </div>
                <div className="post-text-div">
                  <h3>{`About Me In 18 Interview Questions (Part 1 of 3):`}</h3>
                  <div className="post-teaser">{`"If you were an animal, which one would you want to be?"...and more!`}</div>
                </div>
              </div>
              <div className="line-div" />
              <div className="content-div">
                <p className="content-regular-paragraph">
                  {`On the “About” page of my website I described myself as “a career chemist transitioning into web-development”. Often when I say this in conversation though, I get a confused look and the response: “Why would you `}
                  <span className="content-span-italic">{`EVER `}</span>
                  {`want to do that?”.  Now, that is a valid question, since my last programming course was back when “The Reflex” by Duran Duran topped the charts, but my answer to date hasn’t been as solid as I would I like.`}
                </p>

                <p className="content-regular-paragraph">
                  {`Since the primary goal of my career transition is, well, employment, I also decided that I needed to practice answering common interview questions. (And who doesn’t enjoy answering some of these classic chestnuts?!!) So I did and realized that it was both good practice and a good way to kick off the blog by telling you more about myself. So let’s go!`}
                </p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 1: Can you tell me a little about yourself?`}</span>
                </p>

                <p className="content-indented-paragraph">{`I’m a lifelong scientist, and I have long loved experimenting both in and out of the lab to create new things.  I honed my scientific skills and developed my executive skills in the pharmaceutical industry, where I’ve led teams that have identified three clinical candidates and that have made compounds which resulted in millions of dollars in corporate revenue. After I moved to Kansas City, I used my knowledge of science and business to start a company, HD Sciences, that was developing a microscale chemical synthesis technology for use in drug discovery. Unfortunately, like most first time entrepreneurs, I failed but learned valuable lessons.`}</p>
                <p className="content-indented-paragraph">{`One observation I made at HD Sciences was that while generating information has gotten easier, communicating information to everyday people often remains cumbersome (e.g. spreadsheets or piles of articles). That sparked a renewed interest for me in information technology and led to my study of web-development at the KU extension campus. With these new skills I hope to someday start a new (non-pharmaceutical) business to help people live healthier lives.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 2: Can you explain why you changed career paths? `}</span>
                </p>

                <p className="content-indented-paragraph">{`In short, I no longer wanted to be defined by the career decisions I made decades ago and had become a bit disillusioned with the drug discovery business in general.  However, when I was working in the pharmaceutical industry, I knew that I had a strong interest in both science and business, and that someday I would take a shot at starting my own, which I did—a chemistry-based business aimed at drug discovery researchers.  Years of hard work later, I still I loved entrepreneurship but realized it was time to move on. So, I thought about other businesses I could enter.`}</p>
                <p className="content-indented-paragraph">{`Tech and web-development seemed like a good fit. Good programming requires organization, an attention to detail, a willingness to experiment, hypothesis formulation, and the ability to analyze data—all skills I could readily transfer. Tech is also a social enterprise that requires the leadership and management skills, which I could transfer from my experience directing large groups of researchers. It also requires creativity, which is really important to me. In the full-stack web-development course at KU I discovered not only that I enjoyed it, but also that I was generating new ideas for potential businesses. My team’s final project, Bee-Z-Street, was a prototype for one of those ideas. So, so far so good.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 3: What are you looking for in a new position? *`}</span>
                </p>

                <p className="content-indented-paragraph">{`Regarding web-development, I’m pretty realistic: I have a lot to learn. Finding a position that provides mentorship and great team colleagues is really important.  That position that should enable me to work on a variety of projects in a variety of coding roles. The entrepreneur in me wants a position that enables me to learn more about the client-side user experience; the scientist in me wants one, in which I’m exposed to server-side data storage and handling.  I enjoy working in fast-paced environments, so the position should be with a company dedicated to having a start-up mindset.`}</p>
                <p className="content-indented-paragraph">{`*Web-development opportunities are discussed here, but others certainly exist in technology-transfer, scientific/tech venture funding, patent writing, etc. `}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 4: Where do you see yourself in five years?`}</span>
                </p>

                <p className="content-indented-paragraph">{`At this point in my career, I need to both look for my next position and lay the foundation for what comes after that, and I’m optimistic about my prospects in web-development. In five years, I think I’ll have a good position at a small to mid-sized tech company, be regularly contributing ideas that influence the direction of the company and have led several small projects. I will have acquired advanced web-development skills, coded a few mobile apps, and learned something about data analytics. I’ll have put in a lot of hard hours to have gained the respect of my colleagues. At the same time, I also see myself ready to take another shot at entrepreneurship. I’m already exploring a few ideas for a web-based company now. It’s remarkable how much is often hiding in plain sight.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 5: How do you deal with pressure or stressful situations?`}</span>
                </p>

                <p className="content-indented-paragraph">{`I avoid being consumed by them. I first resolve myself to addressing the situation immediately. I then assess the situation and ask for other people’s perspectives. Next, I come up with a plan of action that utilizes the resources at hand (especially time). To avoid wasting mental energy worrying about failure, I also formulate several backup plans. I then dive into the needed work but mentally compartmentalize the situation by doing something each day that reminds me of my larger life, like walking my dogs. Finally, I talk a lot to my teammates, because conversation can often turn a “forced march of doom” into a “mission of glory”.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 6: If you were an animal, which one would you want to be?`}</span>
                </p>

                <p className="content-indented-paragraph">{`A dolphin. I’m a diver and have seen these animals up close all over the world. I would love to experience their graceful, effortless, and dynamic movement through water. They’re also very intelligent, social, curious, and known to do things for the pure fun of it, like swim in front of boats or jump out of the water and spin in the air. Of course, they aren’t perfect. Dolphins are also known to be incredibly horny, but I can assure you that as a dolphin, I would not come to work waddling through the parking lot, waving my flippers about, and creating problems for my coworkers and the folks over in human resources. `}</p>
                <p className="content-regular-paragraph">
                  <span className="content-span-bold">{`Next Post: `}</span>
                  {`How I describe myself in three words. Until then!`}
                </p>
              </div>
              <div className="line-div" />
              <Link to={`/blog`} role="button" className="blog-btn">
                <div className="btn-message">Return to Blog</div>
              </Link>
              <h6>{`Published November 26, 2018`}</h6>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Post0;
