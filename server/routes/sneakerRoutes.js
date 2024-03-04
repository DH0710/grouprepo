const express = require('express');
const router = express.Router();
const {currentSneakers, createSneaker, updateSneaker, deleteSneaker} = require("../controllers/sneakerController");

router.route("/").get(currentSneakers).post(createSneaker)

router.route("/:id").put(updateSneaker).delete(deleteSneaker)



module.exports = router;