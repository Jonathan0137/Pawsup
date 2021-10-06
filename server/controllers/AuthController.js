const express = require("express");
const { passport } = require("../config/passport-config");
// Base route: /api/auth
const AuthController = express.Router();

// POST /api/auth/login
AuthController.post("/login", passport.authenticate("local"), (req, res) => {
  // req.user can now be accessed in subsequent requests to know which logged in user is sending the request
  res.json({ message: "Successfully logged in", user: req.user });
});

// POST /api/auth/logout
AuthController.post("/logout", (req, res) => {
  req.logOut();
  res.json({ message: "Successfully logged out" });
});

exports.AuthController = AuthController;
