const express = require('express');
const router = express.Router();

// const hotels = require("../Data/hotels")
const Hotel = require("../Models/hotel.model")

// router.route("/").get((req, res) => {
//         res.json(hotels.data)
//     })

router.route("/").get(async (req, res) => {
    const hotelCategory = req.query.category
    try{
        let hotels
        if (hotelCategory) {
            hotels = await Hotel.find({ category: hotelCategory });
        } else {
            hotels = await Hotel.find({});
        }
        hotels ? res.json(hotels) : res.status(404).json({ message: "Oops! No data found" })
    }catch(err){
        console.log(err);
    }
})

module.exports = router;