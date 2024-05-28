const Cart = require("./Models/cartModel");
const validateToken = require("../middleware/validateTokenHandler");
const {updatedCart, deleteCart, getCart, createCart} = require("../controllers/cartController")
const router = express.Router();


router.use(validateToken);

//CREATE
router.route("/createCart").post(createCart)

//UPDATE CART
router.route("/:id/cart").put(updatedCart)

//DELETE CART
router.route("/:id/cart").delete(deleteCart)

//GET USER CART
router.route("/find/:userId").get(getCart)

// //GET ALL

router.get("/", validateToken, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;