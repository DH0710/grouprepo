const express = require('express');
const router = express.Router();
const {currentSneakers, createSneaker} = require("../controllers/sneakerController");

router.route("/").get(currentSneakers).post(createSneaker);











module.exports = router;