module.exports = {
  sendNodeMail: function(req, res, next) {
    //Parses the incoming resquest
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`;

    //Composes the mail message
    var mail = {
      from: name,
      //to: `"RECEIVING_EMAIL_ADDRESS_GOES_HERE"`, //Change to email address that you want to receive messages on
      to: "pckearney@yahoo.com", //Change to email address that you want to receive messages on
      subject: req.body.subject,
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
