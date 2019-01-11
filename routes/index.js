const nodemailer = require("nodemailer");
const creds = require("./config/config");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Pass credentials to the SMPT transport.
var transport = {
  host: "smtp.gmail.com",
  host: "pckearney-com.mail.protection.outlook.com",
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

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
