const express = require('express');
const router = express.Router();

const categoryHandler = require("../Controllers/categoryController");

router.route("/").get(categoryHandler);

module.exports =  router;