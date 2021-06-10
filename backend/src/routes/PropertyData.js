let { Router } = require("express");

const propertyData = Router();
const propertyDataController = require("../application/Controllers/PropertyData");
const auth = require("../system/auth/Authentication");

// Create a property data
propertyData.post("/create", auth, propertyDataController.new);
// Retrieve all property data
propertyData.get("/lists", auth, propertyDataController.lists);
//  Retrieve a single property data with propertyId
propertyData.get("/view/:id", auth, propertyDataController.view);

module.exports = propertyData;
