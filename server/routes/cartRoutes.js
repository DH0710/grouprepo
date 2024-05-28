const express = require("express")
const validateToken = require("../middleware/validateTokenHandler");
const {updateCart, deleteCart, getCart, createCart, currentCart} = require("../controllers/cartController")
const router = express.Router();


router.use(validateToken);

//CREATE
router.route("/createCart").post(createCart)

//UPDATE CART
router.route("/:id/cart").put(updateCart)

//DELETE CART
router.route("/:id/cart").delete(deleteCart)

//GET USER CART
router.route("/find/:userId").get(getCart)

// //GET ALL

router.route("/").get(currentCart)

module.exports = router;