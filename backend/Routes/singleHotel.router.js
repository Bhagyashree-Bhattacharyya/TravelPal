const express = require('express');
const router = express.Router();

const singlehotelHandler = require("../Controllers/singleHotelController");

router.route("/:id").get(singlehotelHandler);

module.exports = router;