const router = require("express").Router();
const mailRoutes = require("./mailRoutes");

//continues to build route for sending mail (/api/mail)
router.use("/mail", mailRoutes);

module.exports = router;
