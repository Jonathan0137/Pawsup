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

//POST /api/user/login
UserController.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password ) {
        return res.status(400).json({
            message: "[username, password] cannot be empty in response body",
          });
    }
    try {
        const user = await UserModel.loginUser(username, password);
        if (!user) {
            return res.status(404).json({
              message: `No matching user found.`,
            });
          }
          res.status(200).json(user.cleanCopy());

    } catch (err) {
        console.error(err);
        res
        .status(500)
        .json({ message: "Encountered an error while fetching services" });
    }
    
});

exports.UserController = UserController;