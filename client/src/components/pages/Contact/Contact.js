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
      messageStatus: "fail",
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
      this.resetForm();
    } else if (response.data.msg === "fail") {
      this.setState({
        messageStatus: "fail"
      });
    }
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

    //Note. These might be changed to type const name = document.getElementById('name').value if state
    //not used in the checking portions.
    //TODO: Will add client side checking to ensure field completion and CSS changes later.
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    const iconStyles = {
      width: "14px",
      height: "14px"
    };

    const messageStatus = this.state.messageStatus;
    let formMessage;
    let buttonIcon;
    let buttonMessage;
    let buttonId;

    switch (messageStatus) {
      case "new":
        formMessage = "Fill out all fields before sending.";
        buttonIcon = "dove";
        buttonMessage = " Contact Patrick";
        buttonId = "btn-contact-new";
        break;

      case "missing":
        formMessage = "Fill out the highlighted fields and send again.";
        buttonIcon = "dove";
        buttonMessage = " Contact Patrick";
        buttonId = "btn-contact-missing";
        break;

      case "success":
        formMessage =
          "Message sent! Click 'Contact Again' button for a new form. ";
        buttonIcon = "sun";
        buttonMessage = " Contact Again";
        buttonId = "btn-contact-success";
        break;

      case "fail":
        formMessage = "Uh. Oh. There was a problem. please try again later.";
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
            {formMessage}
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
