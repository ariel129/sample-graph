const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// Models which handle database table
db.User = require("./User.model")(mongoose);
db.PropertyData = require("./PropertyData.model")(mongoose);

module.exports = db;
