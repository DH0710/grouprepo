const express = require('express');
const router = express.Router();
const {currentSneakers, createSneaker, deleteSneaker} = require("../controllers/sneakerController");

router.route("/").get(currentSneakers)

router.route("/create").post(createSneaker)

router.route("/:id").delete(deleteSneaker)











module.exports = router;