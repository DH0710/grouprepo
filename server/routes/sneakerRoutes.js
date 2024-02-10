const express = require('express');
const router = express.Router();
const {currentSneaker} = require("../controllers/sneakerController");

router.get("/current", currentSneaker);










module.exports = router;