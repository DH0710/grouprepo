const express = require('express');
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")

  },
  filename: (req, file, cb) => {
    console.log(file)

    cb(null, Date.now() + path.extname(file.originalname) )
  }
  
});


// Multer is a node.js middleware for handling multipart/form-data. 
// Usually for uploading a file/data.


const upload = multer ({storage: storage})

connectDB();
const app = express();




const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api/sneakers', require ("./routes/sneakerRoutes"));
app.use('/api/users', require ("./routes/userRoutes"));
app.use(errorHandler);





// logic for uploading images for sneakers once theyre created. 

app.get("/upload", (req, res) => {
  res.sender("upload")
});


app.post("/upload", upload.single("image") , (req, res) => {
  res.send("Image Uploaded")
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});