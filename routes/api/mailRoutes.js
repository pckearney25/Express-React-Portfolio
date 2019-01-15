const router = require("express").Router();
const mailController = require("../../controllers/mailController");

//Matches with "/api/mail"
router.route("/").post(mailController.sendNodeMail);

module.exports = router;
