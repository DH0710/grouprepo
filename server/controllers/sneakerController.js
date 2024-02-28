const asyncHandler = require("express-async-handler");


const currentSneakers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Current sneakers information"})
});

const createSneaker = asyncHandler(async (req, res) => {
    res.status(201).json({ message: "Sneaker created!"})
});

const deleteSneaker = asyncHandler(async (req, res) => {
    res.status(201).json({ message: "Sneaker deleted!"})
});




module.exports = {currentSneakers, createSneaker, deleteSneaker}