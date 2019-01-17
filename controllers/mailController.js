const nodemailer = require("nodemailer");
const creds = require("../config/config");

//Pass credentials to the SMPT transport.
var transport = {
  service: "Outlook365",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

//set up the connection to the service and verify credentials are in order.
var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

//export the function for processing the request and sending it to the SMTP server.
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
      to: `"patrick.c.kearney@SpeechGrammarList.com"`,
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
