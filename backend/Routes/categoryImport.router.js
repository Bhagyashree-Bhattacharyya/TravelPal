const express = require('express');

const Category = require("../Models/category.model");
const categories = require("../Data/categories");

const router = express.Router();

router.route("/").post(async (req, res) => {
        try{
            await Category.remove();
            const categoriesInDB = await Category.insertMany(categories.data);
            res.json(categoriesInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add categories to DB"})
        }
    })

module.exports = router;