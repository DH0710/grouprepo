const mongoose = require("mongoose");

const sneakerSchema = mongoose.Schema ({
    brand: {
        type: String,
        required: [true, "Please add brand of sneaker"]
    },
    name: {
        type: String,
        required: [true, "Please add the name of the sneaker"]

    },
    size: {
        type: Number,
        required: [true, "Please add sneaker size"]
    },
    price: {
        type: Number,
        required: [true, "Please add the price of sneaker"]
    },
    color: {
        type: String,
        required: [true, "Please add color of your sneaker"]
    }
},
{
    timestamp: true
});


module.exports = mongoose.model("Sneaker", sneakerSchema)