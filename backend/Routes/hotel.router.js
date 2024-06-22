const express = require('express');
const router = express.Router();

const hotelHandler = require("../Controllers/hotelController");

router.route("/").get(hotelHandler);

module.exports = router;