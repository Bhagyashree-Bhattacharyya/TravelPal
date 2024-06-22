const express = require('express');


const singupHandler = require("../Controllers/signupController");
const loginHandler = require("../Controllers/loginController");

const router = express.Router();

router.route("/register").post(singupHandler);

router.route("/login").post(loginHandler);

module.exports = router;