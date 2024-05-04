const express = require('express');
const router = express.Router();
const {currentSneakers, createSneaker, updateSneaker, deleteSneaker, singleSneaker} = require("../controllers/sneakerController");
const validateToken = require('../middleware/validateTokenHandler');


router.use(validateToken);
router.route("/current").get(currentSneakers);
router.route("/create").post(createSneaker);
router.route("/:id").put(updateSneaker).delete(deleteSneaker).get(singleSneaker);



module.exports = router;