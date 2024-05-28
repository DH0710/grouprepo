const asyncHandler = require("express-async-handler");
const Cart = require("../Models/cartModel")


//CREATE NEW CART

const createCart = asyncHandler(async (req, res) => {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
})


//GET USER CART

const getCart = asyncHandler(async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
      } catch (err) {
        res.status(500).json(err);
      }
});

// UPDATE CART
const updateCart = asyncHandler(async (req,res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCart);
      } catch (err) {
        res.status(500).json(err);
      }
});

// DELETE CART
const deleteCart = asyncHandler(async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
});




module.exports = {updateCart, deleteCart, getCart, createCart}