const asyncHandler = require("express-async-handler");


const currentSneakers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "All current sneakers information within the database"})
});

const createSneaker = asyncHandler(async (req, res) => {
    res.status(201).json({ message: "Your Sneaker is created!"})
});

const deleteSneaker = asyncHandler(async (req, res) => {
    res.status(201).json({ message: "Sneaker deleted!"})
});




module.exports = {currentSneakers, createSneaker, deleteSneaker}