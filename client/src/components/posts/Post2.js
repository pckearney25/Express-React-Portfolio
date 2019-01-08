import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import "../../assets/css/Blog.css";

class Post2 extends React.Component {
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
                    src={require("../../assets/images/post-images/snail.jpg")}
                    alt="post-pic"
                  />
                </div>
                <div className="post-text-div">
                  <h3>{`About Me In 18 Interview Questions (Part 3 of 3):`}</h3>
                  <div className="post-teaser">{`A snail in a well? Really? Let’s talk about what I’m working on instead.`}</div>
                </div>
              </div>
              <div className="line-div" />
              <div className="content-div">
                <p className="content-regular-paragraph">{`I started diligently answering more questions for this final post in the series…`}</p>
                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 13. "A snail is at the bottom of a 30-foot well. Each day he climbs up three feet, but at night he slips back two feet. How many days will it take him to climb out of the well?"`}</span>
                </p>
                <p className="content-indented-statement">
                  {`On the very last day, the snail will climb three feet and be out of the well before nightfall, unless some little twerp placed a ring of salt around the edge.  So, on day 28 the snail starts at 27 feet and should escape. `}
                </p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 14. How important is it to work directly with your business users?`}</span>
                </p>

                <p className="content-indented-paragraph">{`It’s very important, as I learned as a business user back in my pharma days. My team worked several times over the years with our informatics group to develop new products for streamlining our lab operations. Because we worked together to define what was needed/possible up front and diligently tested product iterations as they became available, things went really smoothly.`}</p>

                <p className="content-regular-paragraph">{`…when I realized that I was getting bored both asking and answering the questions. I wanted to write about things that excite me—what I’m working on now, what’s up next, and where I want to end up. So, I did. After all it is my blog. Final four questions: `}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 15. Tell me about a side project that you are proud of.`}</span>
                </p>

                <p className="content-indented-paragraph">{`I’m actually proud of the “Slider Game”, which is listed over on the “Portfolio” page. The project is a digital version of those old-fashioned plastic puzzles, in which you reorder a set of numbered tiles in sequence. I had the idea for the game when we covered the “Tic Tact Toe” example on the React.js website in web-development class.`}</p>
                <p className="content-indented-paragraph">{`I tackled this as my first personal coding project for a number of reasons: primarily to learn more about React and to kick my front-end skills up a notch. I incorporated some of what I had learned from tutorials on pluralsite.com about CSS Flexbox, from the book “Don’t Make Me Think” by Steve Krug about creating a great user interface, and from palleton.com about color theory.  At the onset, I also wanted to add functionality to the classic slider puzzle, by including a picture mode, in which images assemble into a picture (of my dog); simple instructions on how to play; and a timer.  `}</p>
                <p className="content-indented-paragraph">{`The algorithms needed to make the game both functional and winnable were also fun to figure out and to code. In the game, only tiles adjacent to the open (black) space can move. The game must also signal a win when all the tiles are back in the correct order. Most importantly, the tiles must scramble at the start the game to produce a winnable outcome. Here winnable scrambles were created by performing 256 tile swaps between the16 tiles on the board, with each swap involving the blank tile and one other tile. If the blank is in an “even” space, it must be swapped with a random tile in any “odd” space. Similarly, if in an “odd” space, it is swapped with a random tile in any “even” space. What is really neat is that to make the math work for any n x n square board, “even” and “odd” are two dimensional constructs determined by not by position in an array, but by summing the vertical and horizontal position (i+j) of any square on the board.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 16. What are your next side projects?`}</span>
                </p>
                <p className="content-indented-paragraph">{`I have two quick portfolio reworks and one major original project lined up. For the reworks, I want to replace the Bootstrap front-end my West World project with CSS Grid. I also want to make my “Meet the Divas” hangman-style game playable on mobile devices.  I added the video “prizes” to it a few months back, and I think it would be far more fun to play on a mobile device instead of a laptop. It’s styling also needs freshening`}</p>
                <p className="content-indented-paragraph">{`For the original project, I’m going to work with APIs and MySQL and maybe add Vue.js. I have this idea for a lawncare app, which I’m tentatively calling “Operation Fescue”. (Fescue is a type of grass.) In the program, a user would enter his location and yard size, the server would get the weather data for that location, and the user would be notified by text once a week if watering or mowing were recommended. It would also send out annual fertilization and reseeding information. I don’t have it all sketched out, but there are a lot of side things I’m interested in exploring here, such as securing against SQL injection and really testing the product via Mocha and Chai. I also have some back-end code I wrote for a disastrous team project from my web-development class that I’m interested in salvaging here.`}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 17. Describe your dream job.  `}</span>
                </p>

                <p className="content-indented-paragraph">{`I’m at a tech start-up with a great management team, and I head product development. We’re in either the agricultural or horticultural space – working on sustainability products. Through information technology, we make it easier for people to use scientific data in ways that make them feel smarter and enable them to work/live more efficiently/economically. I’ve learned enough about web-development, algorithm design, and data analytics to be a driving force in the process. `}</p>

                <p className="content-indented-statement">
                  <span className="content-span-bold">{`Question 18. Finally, why do you get up in the morning?`}</span>
                </p>

                <p className="content-indented-paragraph">{`I always have a list of things that I want to do, and I will always be striving to work on the big problems. So, getting out of bed is pretty easy for me since I wake up every day knowing that learning and creating something new always awaits.`}</p>
                <p className="content-indented-paragraph">{`Right now, I’m really intrigued by the world of smart-products/services, which bring information technology to everyday items and activities. I think there is huge potential here to help people build healthier, happier, and more sustainable lives while avoiding the information overload and paralysis that comes from having too many unfiltered choices. I obviously have a lot to learn, but as I have seen over my career, many discoveries are often hiding in plain sight, and I’m going to find one of those.`}</p>

                <p className="content-regular-paragraph">{`Hope you found the series informative. Remember to wander on over to the "Contact" page, if you want to talk more!`}</p>
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

export default Post2;
