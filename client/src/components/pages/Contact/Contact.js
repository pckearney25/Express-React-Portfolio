import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import "./Contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faSun, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import API from "../../../utils/API";

library.add(faDove, faSun, faCloudRain);

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageStatus: "new", //options: new, missing, success, or fail.
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

  mailResponse = response => {
    if (response.data.msg === "success") {
      this.setState({
        messageStatus: "success"
      });
    } else if (response.data.msg === "fail") {
      this.setState({
        messageStatus: "fail"
      });
    }
    this.resetForm();
  };

  sendMail = mailData => {
    API.sendMail(mailData).then(response => this.mailResponse(response));
  };

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
    const messageStatus = this.state.messageStatus;
    const mailData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    //Checks that all fields are filled before sending mail.
    //If nodemailer has responded (succes/fail), sets up for a new message.
    if (messageStatus === "new" || messageStatus === "missing") {
      if (
        mailData.name &&
        mailData.email &&
        mailData.subject &&
        mailData.message
      ) {
        this.sendMail(mailData);
      } else {
        this.setState({ messageStatus: "missing" });
      }
    } else if (messageStatus === "success" || messageStatus === "fail") {
      this.setState({ messageStatus: "new" });
    }
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    const iconStyles = {
      width: "14px",
      height: "14px"
    };
    //variables used for dynamic CSS styling
    const messageStatus = this.state.messageStatus;
    let mailImgSrc;
    let formMessage;
    let formMessageStyle;
    let buttonIcon;
    let buttonMessage;
    let buttonId;
    let nameLabelStyle;
    let emailLabelStyle;
    let subjectLabelStyle;
    let bodyLabelStyle;
    let nameInputStyle;
    let emailInputStyle;
    let subjectInputStyle;
    let bodyInputStyle;
    let formInfoDisplay;

    switch (messageStatus) {
      case "new":
        mailImgSrc = require("../../../assets/images/wildflowers1.jpg");
        formMessage = "Complete all fields before sending.";
        buttonIcon = "dove";
        buttonMessage = " Contact Patrick";
        buttonId = "btn-contact-new";

        if (
          this.state.name &&
          this.state.email &&
          this.state.subject &&
          this.state.message
        ) {
          formMessage = "Ready to send!";
          formMessageStyle = { color: "#58b041", fontWeight: "bold" };
        }
        break;

      case "missing":
        mailImgSrc = require("../../../assets/images/tornado1.jpg");
        formMessage = "Compete the missing fields (red) and resubmit.";
        buttonIcon = "cloud-rain";
        buttonMessage = " Contact Patrick";
        formMessageStyle = { color: "red", fontWeight: "bold" };
        buttonId = "btn-contact-missing";
        if (!this.state.name) {
          nameLabelStyle = { color: "red" };
          nameInputStyle = { borderColor: "red" };
        }
        if (!this.state.email) {
          emailLabelStyle = { color: "red" };
          emailInputStyle = { borderColor: "red" };
        }
        if (!this.state.subject) {
          subjectLabelStyle = { color: "red" };
          subjectInputStyle = { borderColor: "red" };
        }
        if (!this.state.message) {
          bodyLabelStyle = { color: "red" };
          bodyInputStyle = { borderColor: "red" };
        }

        if (
          this.state.name &&
          this.state.email &&
          this.state.subject &&
          this.state.message
        ) {
          mailImgSrc = require("../../../assets/images/wildflowers1.jpg");
          formMessage = "Ready to send!";
          formMessageStyle = { color: "#58b041", fontWeight: "bold" };
          buttonIcon = "dove";
          buttonMessage = " Contact Patrick";
          buttonId = "btn-contact-new";
        }
        break;

      case "success":
        mailImgSrc = require("../../../assets/images/wildflowers2.jpg");
        formMessage =
          "Message sent. Click 'Contact Again' button for a new form. ";
        formMessageStyle = { color: "#58b041", fontWeight: "bold" };
        formInfoDisplay = { display: "none" };
        buttonIcon = "sun";
        buttonMessage = " Contact Again";
        buttonId = "btn-contact-new";
        break;

      case "fail":
        mailImgSrc = require("../../../assets/images/tornado2.jpg");
        formMessage = "Uh-oh. There was a problem. Please try again later.";
        formMessageStyle = { color: "red", fontWeight: "bold" };
        formInfoDisplay = { display: "none" };
        buttonIcon = "cloud-rain";
        buttonMessage = " Run Dorothy";
        buttonId = "btn-contact-missing";
        break;

      default:
        formMessage = "Fill out all fields before sending.";
        buttonIcon = "dove";
    }

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

          <p className="section-paragraph" id="form-message-paragrpah">
            <span>{`Contact Form: `}</span>
            <span id="form-message-span" style={formMessageStyle}>
              {formMessage}
            </span>
          </p>
          <div className="contact-container">
            <div id="mail-response-image-div">
              <img
                id="mail-response-image"
                src={mailImgSrc}
                alt="mail response"
              />
            </div>
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
              <div id="form-info-container" style={formInfoDisplay}>
                <div className="form-group">
                  <label
                    htmlFor="contact-name"
                    id="contact-name-label"
                    style={nameLabelStyle}
                  >
                    Name:
                  </label>
                  <input
                    name="name"
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    id="contact-name"
                    style={nameInputStyle}
                    placeholder="e.g. Patrick Mahomes"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="contact-email"
                    id="contact-email-label"
                    style={emailLabelStyle}
                  >
                    Email address:
                  </label>
                  <input
                    name="email"
                    value={this.state.email}
                    type="email"
                    className="form-control"
                    id="contact-email"
                    style={emailInputStyle}
                    placeholder="e.g. pmahomes@coding.com"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="contact-subject"
                    id="contact-subject-label"
                    style={subjectLabelStyle}
                  >
                    Subject:
                  </label>
                  <input
                    name="subject"
                    value={this.state.subject}
                    className="form-control"
                    type="text"
                    id="contact-subject"
                    style={subjectInputStyle}
                    placeholder="e.g. Networking Telecon"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="contact-body"
                    id="contact-body-label"
                    style={bodyLabelStyle}
                  >
                    Message:
                  </label>
                  <textarea
                    name="message"
                    value={this.state.message}
                    className="form-control"
                    id="contact-body"
                    style={bodyInputStyle}
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
              <button type="submit" className="btn-contact" id={buttonId}>
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={buttonIcon}
                  style={iconStyles}
                />
                <span>{buttonMessage}</span>
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
