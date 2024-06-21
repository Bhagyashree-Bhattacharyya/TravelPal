const express = require('express');
const mongoose = require('mongoose');

const Hotel = require("../Models/hotel.model");
const hotels = require("../Data/hotels");

const router = express.Router();

router.route("/").post(async (req, res) => {
    try {
        await Hotel.remove();
        const hotelsInDB = await Hotel.insertMany(hotels.data);
        res.json(hotelsInDB)
    } catch (err) {
        console.log(err);
        res.json({message: "Error inserting data to DB"});
    }
})

module.exports = router;