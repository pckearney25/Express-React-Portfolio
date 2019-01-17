const router = require("express").Router();
const mailController = require("../../controllers/mailController");

//Matches with "/api/mail"
//calls the sendNodeMail function for posted request information
router.route("/").post(mailController.sendNodeMail);

module.exports = router;
