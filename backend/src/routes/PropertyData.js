let { Router } = require("express");

const propertyData = Router();
const propertyDataController = require("../application/Controllers/PropertyData");

propertyData.post("/create", propertyDataController.new);
propertyData.get("/lists", propertyDataController.lists);
propertyData.get("/view/:id", propertyDataController.view);

module.exports = propertyData;
