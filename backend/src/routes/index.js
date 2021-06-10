let express = require("express");

const api = express();
const user = require("./User");
const propertyData = require("./PropertyData");

// Routes which should handle requests
api.use("/user", user);
api.use("/property-data", propertyData);

module.exports = api;
