import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import "./Contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

library.add(faDove);

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const styles = {
      width: "14px",
      height: "14px"
    };
    return (
      <Wrapper>
        <SectionTitle
          src={require("../../../assets/images/bees.jpg")}
          sectiontitle={"Contact"}
          quote={`"Write me and let's do business. I'm always up for discussing ideas and opportunities."`}
        />
        <div className="section-content">
          <p className="section-paragraph">
            <span>{`To Reach Me: `}</span>
            {`Simply fill out and submit the form
            below.`}
            <sup>{`*`}</sup>{" "}
            {`I love meeting and talking with people, so let me hear
            from you!`}
          </p>

          <p className="section-paragraph">
            <span>{`Contact Form: `}</span>
          </p>
          <div className="contact-container">
            <form action="/webformmailer.php" method="post" id="contact-form">
              <input type="hidden" name="subject" value="Submission" />
              <input type="hidden" name="redirect" value="thankyou.html" />
              <div id="form-info-container">
                <div className="form-group">
                  <label htmlFor="contact-name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact-name"
                    placeholder="e.g. Patrick Mahomes"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="contact-email"
                    placeholder="e.g. pmahomes@coding.com"
                  />
                </div>
                <div className="form-group">
                  <label or="contact-subject">Subject:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="contact-subject"
                    placeholder="e.g. Networking Telecon"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-body">Message:</label>
                  <textarea
                    className="form-control"
                    id="contact-body"
                    rows="10"
                    placeholder="Type message here."
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Your personal information will not be shared with anyone
                    else without your consent.
                  </small>
                </div>
              </div>
              <button type="submit" className="btn-contact">
                <FontAwesomeIcon
                  className="fa-icon"
                  icon="dove"
                  style={styles}
                />
                <span>{` Contact Patrick!`}</span>
              </button>
              <input type="hidden" name="form_order" value="alpha" />
              <input type="hidden" name="form_delivery" value="hourly_digest" />
              <input type="hidden" name="form_format" value="html" />
            </form>
          </div>
          <p className="section-paragraph" id="contact-addendum">
            * I can also be reached at the email address listed on either my
            technical resume or CV (in the "About Me" section) or by clicking
            the LinkedIn icon in the page footer.
          </p>
        </div>
      </Wrapper>
    );
  }
}

export default Contact;
