const dbConfig = require("../db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.operations = require("./operation.model.js")(mongoose);

module.exports = db;
