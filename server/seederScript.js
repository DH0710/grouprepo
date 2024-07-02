require("dotenv").config();

const sneakerData = require("./data/sneakers");
const connectDB = require("./config/dbConnection");
const Sneaker = require("./Models/sneakerModel");

connectDB();

const importData = async () => {
  try {
    await Sneaker.deleteMany({});

    await Sneaker.insertMany(sneakerData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();