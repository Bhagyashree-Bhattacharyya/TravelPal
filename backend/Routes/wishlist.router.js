const express = require('express');
const Wishlist = require("../Models/wishlist.model");

const router = express.Router();

router.route("/").post(async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    try {
        const savedWishList = await newWishlist.save();
        res.status(201).json(savedWishList);
    } catch(err) {
        res.status(500).json({ message: "failed to create" })
    }
})

router.route("/:id").delete(async (req, res) => {
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel Deleted from WishList"});
    } catch(err) {
        res.status(500).json({ message: "could not delete" })
    }
})

router.route("/").get(async (req, res) => {
    try{
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({ message: "No items found in the wishlist"})
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;