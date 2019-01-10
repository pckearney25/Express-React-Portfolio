import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import "./Contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

library.add(faDove);

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageStatus: "New Message",
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleInputChange(event) {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const subject = this.state.subject;
    const message = this.state.message;
    //Note. These might be changed to type const name = document.getElementById('name').value if state
    //not used in the checking portions.
    //TODO: Will add client side checking to ensure field completion and CSS changes later.
    //TODO: Will work on importing (API from utils eventually)

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        subject: subject,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        this.setState({ messageStatus: "Message Sent." });
        this.resetForm();
      } else if (response.data.msg === "fail") {
        this.setState({ messageStatus: "Uh. Oh. Message failed to send." });
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
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
            <span>{`Contact Form: `}</span> {this.state.messageStatus}
          </p>
          <div className="contact-container">
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
              <div id="form-info-container">
                <div className="form-group">
                  <label htmlFor="contact-name">Name:</label>
                  <input
                    name="name"
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    id="contact-name"
                    placeholder="e.g. Patrick Mahomes"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email address:</label>
                  <input
                    name="email"
                    value={this.state.email}
                    type="email"
                    className="form-control"
                    id="contact-email"
                    placeholder="e.g. pmahomes@coding.com"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject:</label>
                  <input
                    name="subject"
                    value={this.state.subject}
                    className="form-control"
                    type="text"
                    id="contact-subject"
                    placeholder="e.g. Networking Telecon"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-body">Message:</label>
                  <textarea
                    name="message"
                    value={this.state.message}
                    className="form-control"
                    id="contact-body"
                    rows="10"
                    placeholder="Type message here."
                    onChange={this.handleInputChange}
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
