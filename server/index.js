const express = require('express');
const connectDB = require("./config/dbConnection")
const dotenv = require("dotenv").config();
const multer = require("multer")
const path = require("path")


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")

  },
  filename: (req, file, cb) => {
    console.log(file)

    cb(null, Dtae.now() + path.extname(file.originalname) )
  }
  
});





const upload = multer ({storage: storage})

connectDB();
const app = express();




const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api/sneakers', require ("./routes/sneakerRoutes"));





// logic for uploading images for sneakers once theyre created. 

app.get("/upload", (req, res) => {
  res.sender("upload")
});


app.post("/upload", upload.single("image") , (req, res) => {
  res.send("Image Uploaded")
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});