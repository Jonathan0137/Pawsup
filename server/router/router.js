const { ServicesController } = require("../controllers/ServicesController");
const { UserController } = require("../controllers/UserController")
const express = require("express");
const router = express.Router();

router.use("/services", ServicesController);
router.use("/user", UserController);

exports.router = router;
