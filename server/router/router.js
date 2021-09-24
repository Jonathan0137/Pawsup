const { ServicesController } = require("../controllers/ServicesController");
const express = require("express");
const router = express.Router();

router.use("/services", ServicesController);

exports.router = router;
