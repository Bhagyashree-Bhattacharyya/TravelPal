const express = require('express');

const wishlistController = require("../Controllers/wishlistController");
const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = wishlistController;

const verifyUser = require("../MiddleWare/verifyUser");

const router = express.Router();

router.route("/").post(verifyUser, createWishlistHandler);

router.route("/:id").delete(verifyUser, deleteWishlistHandler);

router.route("/").get(verifyUser, getWishlistHandler);

module.exports = router;