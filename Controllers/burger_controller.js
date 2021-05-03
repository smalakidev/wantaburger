const express = require('express');
const burger = require('../models/burger');
const router = express.Router();
const chalk = require('chalk');

//This selects all the values from the burger table
router.get("/", function (req, res) {
    try {
        return burger.selectAll("burger").then(function (data) {
            var hbsObject = {
                burger: data
            };
            res.render("index", hbsObject);
        });
    }
    catch
    {
        console.log(chalk.yellowBright.black("error"));
    }
});
//.Post route for the burger
router.post("/api/burger", function (req, res) {
    try {
        return burger.insertOne("burger", req.body.burgername, true).then(function (data) {
            res.json({ id: data?.insertId });
        });
    }
    catch
    {
        console.log(chalk.yellowBright.black("error"));
    }
});
//.put for the burger
router.put("/api/burger/:id", function (req, res) {
    try {
        return burger.updateOne("burger", false, req.params.id).then(function (data) {
            res.json({ id: data?.insertId });
        });
    }
    catch
    {
        console.log(chalk.yellowBright.black("error"));
    }
});
module.exports = router;