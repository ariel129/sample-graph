let { Router } = require("express");

const user = Router();
const userController = require("../application/Controllers/User");

user.post("/signin", userController.signin);
user.post("/signup", userController.signup);
user.get("/refresh", userController.refresh);

module.exports = user;
