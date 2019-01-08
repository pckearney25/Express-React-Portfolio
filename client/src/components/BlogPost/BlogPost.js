import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Blog.css";

class BlogPost extends React.Component {
  render() {
    return (
      <div>
        <div className="post-container">
          <div className="image-text-div">
            <div className="post-image-div">
              <img
                className="post-image"
                src={this.props.imgSrc}
                alt="post-pic"
              />
            </div>
            <div className="post-text-div">
              <h3>{`${this.props.title}`}</h3>
              <div className="post-teaser">{`${this.props.teaser}`}</div>
            </div>
          </div>
          <div className="line-div" />
          <Link to={this.props.link} role="button" className="blog-btn">
            <div className="btn-message">Read Full Post</div>
          </Link>
          <h6>{`${this.props.date}`}</h6>
        </div>
      </div>
    );
  }
}

export default BlogPost;
