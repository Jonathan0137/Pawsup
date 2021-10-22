const { AuthController } = require("../controllers/AuthController");
const { ServicesController } = require("../controllers/ServicesController");
const { UserController } = require("../controllers/UserController");
const { ServicePagesController } = require("../controllers/ServicePagesController");
const { ProductsController } = require("../controllers/ProductsController");
const { CommentsController } = require("../controllers/CommentsController");

const express = require("express");
const router = express.Router();

router.use("/auth", AuthController);
router.use("/services", ServicesController);
router.use("/user", UserController);
router.use("/servicepages", ServicePagesController);
router.use("/products", ProductsController);
router.use("/comments", CommentsController);

exports.router = router;
