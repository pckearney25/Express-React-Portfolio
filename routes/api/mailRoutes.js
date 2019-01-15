const router = require("express").Router();
//const nodemailer = require("nodemailer");
//const creds = require("../../config/config");
const mailController = require("../../controllers/mailController");

//Pass credentials to the SMPT transport.
//var transport = {
//host: "smtp.gmail.com",
//host: "pckearney-com.mail.protection.outlook.com",
//auth: {
//user: creds.USER,
//  pass: creds.PASS
// }
//};

//var transporter = nodemailer.createTransport(transport);

//transporter.verify((error, success) => {
//if (error) {
//  console.log(error);
// } else {
//   console.log("Server is ready to take messages");
//  }
//});

//Matches with "/api/mail"
router.route("/").post(mailController.sendNodeMail);

module.exports = router;
