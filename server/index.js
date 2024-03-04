const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./config/dbConnection")
const dotenv = require("dotenv").config();

connectDB();


app.use(express.json());
app.use('/api/sneakers', require ("./routes/sneakerRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});