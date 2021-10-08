const express = require("express");
const { UserModel } = require("../models/UserModel");
// Base route: /api/user
const UserController = express.Router();

// GET /api/user
UserController.get("/", async (req, res) => {
    try {
      const users = await UserModel.getUsers();
      res.json(users.map((user) => user.cleanCopy()));
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Encountered an error while fetching users" });
    }
});

//CREATE /api/user
UserController.post("/", async (req, res) => {
  const { username, password, email, location } = req.body;

  if (!username || !password || !email || !location) {
    return res.status(400).json({
      message: "[username, password, email, location] cannot be empty in response body",
    });
  }

  const user = new UserModel({
    username: username,
    password: password,
    email: email,
    location: location,
  });

  try {
    await user.insert();
    res.status(201).json(user.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while creating account" });
  }
});
// PUT /api/user/:uid
// Able to change user's password, email, or location fields. Username cannot be changed.
// At least one of these fields must be in request body. 
UserController.put("/:uid", async(req, res) => {
  const { uid } = req.params;
  const { password, email, location } = req.body;

  if (!password && !email && !location) {
    return res.status(400).json({
      message: "[password, email, location] cannot all be empty in response body. Nothing to edit!",
    });
  }

  try {
    const user = await UserModel.getUserByID(uid);
    if (!user) {
      return res.status(404).json({
        message: `User with ID '${uid}' not found`,
      });
    }

    if (password) {
      user.password = password;
    }

    if (email) {
      user.email = email;
    }

    if (location) {
      user.location = location;
    }

    await user.save();
    res.status(200).json(user.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while updating user" });
  }
});

exports.UserController = UserController;