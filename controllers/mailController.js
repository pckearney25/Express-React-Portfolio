const nodemailer = require("nodemailer");
const creds = require("../config/config");

//Pass credentials to the SMPT transport.
var transport = {
  //host: "smtp.gmail.com",
  service: "Outlook365",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

module.exports = {
  sendNodeMail: function(req, res, next) {
    //Parses the incoming resquest
    var name = req.body.name;
    var email = req.body.email;
    var subject = `${name}: ${req.body.subject}`;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`;
    console.log(content);
    //Composes the mail message
    var mail = {
      from: name,
      //to: `"RECEIVING_EMAIL_ADDRESS_GOES_HERE"`, //Change to email address that you want to receive messages on
      to: "pckearney@yahoo.com", //Change to email address that you want to receive messages on
      subject: subject,
      text: content
    };

    //Sends the mail message
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: "fail"
        });
      } else {
        res.json({
          msg: "success"
        });
      }
    });
  }
};
