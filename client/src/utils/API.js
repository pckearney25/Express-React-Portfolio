import axios from "axios";

export default {
  //Sends contact information to server to forward to nodemailer
  sendMail: function(mailData) {
    return axios.post("/api/mail", mailData);
  }
};
