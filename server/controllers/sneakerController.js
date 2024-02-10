const asyncHandler = require("express-async-handler")


const currentSneaker = asyncHandler(async (req, res) => {
    res.json({ message: "Current sneaker information"})
});


module.exports = {currentSneaker}