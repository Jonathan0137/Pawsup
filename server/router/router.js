const { AuthController } = require("../controllers/AuthController");
const { ServicesController } = require("../controllers/ServicesController");
const { UserController } = require("../controllers/UserController");
const express = require("express");
const router = express.Router();

router.use("/auth", AuthController);
router.use("/services", ServicesController);
router.use("/user", UserController);

exports.router = router;
