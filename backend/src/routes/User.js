let { Router } = require("express");

const user = Router();
const userController = require("../application/Controllers/User");
const auth = require("../system/auth/Authentication");

// Find a user by username
user.post("/signin", userController.signin);
// Create a user
user.post("/signup", userController.signup);
// Check a token expired
user.get("/refresh", auth, userController.refresh);

module.exports = user;
