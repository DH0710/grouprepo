const asyncHandler = require("express-async-handler");
const Sneaker = require("../Models/sneakerModel")


const currentSneakers = asyncHandler(async (req, res) => {
    const sneakers = await Sneaker.find({ user_id: req.user.id});
    res.status(200).json(sneakers);
});



const singleSneaker = asyncHandler(async (req, res) => {

    const singleItem = await Sneaker.findById(req.params.id);
    if (!singleItem) {
        res.status(404);
        throw new Error("Sneaker not found")
    }
    res.status(200).json(singleItem);

});



const createSneaker = asyncHandler( async (req, res) => {
    console.log("The request body is: ", req.body);

    const {brand, name, size, image, price, color, instock} = req.body;
    if (!brand || !name || !size || !image || !price || !color || !instock ) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const sneakers = await Sneaker.create({
        brand,
        name,
        size,
        image,
        price,
        color,
        instock,
        user_id: req.user.id
    });

    res.status(201).json(sneakers)
   
});








const updateSneaker = asyncHandler(async (req, res) => {
    const sneakers = await Sneaker.findById(req.params.id);
    if (!sneakers) {
        res.status(404);
        throw new Error("Sneaker not found")
    }

    if (sneakers.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error ("Current user does not have permission to update this sneaker!")
    }


    const updatedSneaker = await Sneaker.findByIdAndUpdate(

        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedSneaker);
});


const deleteSneaker = asyncHandler(async (req, res) => {
    const sneaker = await Sneaker.findById(req.params.id);

    if (!sneaker) {
        res.status(404);
        throw new Error("Sneaker not found")
    }

    if (sneaker.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error ("Current user does not have permission to delete this sneaker!")
    }


    await Sneaker.deleteOne({_id: req.params.id})
    res.status(200).json(sneaker)
});




module.exports = { currentSneakers, createSneaker, updateSneaker, deleteSneaker, singleSneaker }