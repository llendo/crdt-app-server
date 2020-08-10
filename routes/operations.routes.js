module.exports = app => {
    const operations = require("../controllers/operation.controller.js");
    var router = require("express").Router();

    router.post("/sync", operations.processOperations);

    app.use('/api', router);
};