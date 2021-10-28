const { AuthController } = require("../controllers/AuthController");
const { ServicesController } = require("../controllers/ServicesController");
const { UserController } = require("../controllers/UserController");
const { MediaPagesController } = require("../controllers/MediaPagesController");
const { ProductsController } = require("../controllers/ProductsController");
const { CommentsController } = require("../controllers/CommentsController");
const { ProvidersController } = require("../controllers/ProvidersController");
const { RepliesController } = require("../controllers/RepliesController");

const express = require("express");
const router = express.Router();

router.use("/auth", AuthController);
router.use("/services", ServicesController);
router.use("/user", UserController);
router.use("/mediapages", MediaPagesController);
router.use("/products", ProductsController);
router.use("/comments", CommentsController);
router.use("/providers", ProvidersController);
router.use("/replies", RepliesController);

exports.router = router;
