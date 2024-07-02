const mongoose = require("mongoose");

const sneakerSchema = mongoose.Schema ({

    user_id: {
       type: mongoose.Schema.Types.ObjectId,
      required: true,
       ref: "User",

    },
    brand: {
        type: String,
        required: [true, "Please add brand of sneaker"]
    },
    name: {
        type: String,
        required: [true, "Please add the name of the sneaker"]

    },
    image: {
        type: String,
        required: [true, "Please add the image of the sneaker"]

    },
    size: {
        type: Number,
        required: [true, "Please add sneaker size"]
    },
    instock: {
        type: Number,
        required: [true, "Please show how many of the sneaker is in stock"]

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