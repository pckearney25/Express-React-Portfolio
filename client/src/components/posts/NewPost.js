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
                    src={require("ADD IMAGE SRC")}
                    alt="post-pic"
                  />
                </div>
                <div className="post-text-div">
                  <h3>{`ADD BLOG TITLE`}</h3>
                  <div className="post-teaser">{`ADD TEASER`}</div>
                </div>
              </div>
              <div className="line-div" />
              <div className="content-div">
                <p className="content-regular-paragraph">{``}</p>
                <p className="content-indented-paragraph">{``}</p>
                <p className="content-indented-statement">{``}</p>
                <span className="content-span-italic">{``}</span>
                <span className="content-span-bold">{``}</span>
                <a className="blog-link" href="">{``}</a>
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

export default NewPost;
