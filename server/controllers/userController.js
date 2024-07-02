const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blacklist = new Set(); // This should ideally be a persistent store like Redis

// Register a user
// route POST /api/users/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
   const { username, email, password } = req.body;
   if (!username || !email || !password) {
      res.status(400)
      throw new Error("All fields are mandatory!")
   };

   const userAvailable = await User.findOne({ email });
   if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
   }

   // hash password
   const hashedPassword = await bcrypt.hash(password, 10);
   console.log("Hashed Password: ", hashedPassword);

   const user = await User.create({
      username,
      email,
      password: hashedPassword,
   });

   console.log(`User created ${user}`);
   if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
   } else {
      res.status(400);
      throw new Error("User data is not valid")
   }

   res.json({ message: "Register the user" })
});



// Login a user
// route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {


   const { email, password } = req.body;

   if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!")
   }

   const user = await User.findOne({ email });

   // compare password with hashedpassword

   if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign({

         user: {
            username: user.username,
            email: user.email,
            id: user.id,
         },

      }, process.env.ACCESS_TOKEN_SECRET,
         { expiresIn: "30m" }
      );

      res.status(200).json({ accessToken });
   } else {
      res.status(401)
      throw new Error("email or password is not valid")
   }
});

// Logout a user
// route GET /api/users/login
// @access private

const logoutUser = asyncHandler(async (req, res) => {

   const token = req.headers["authorization"]?.split(" ")[1];

   if (!token) {
      return res.status(401).send("Access token is missing or invalid");
   }

   // Invalidate token by adding it to the blacklist

   blacklist.add(token);

   return res.status(200).send("User logged out successfully!")
});


const isTokenBlacklisted = asyncHandler(async (req, res, next) => {

   const token = req.headers["authorization"]?.split(" ")[1];

   if (blacklist.has(token)) {
      return res.status(401).send("Token is blacklisted")
   }

   next();


});




// Current user
// route POST /api/users/current
// @access private

const currentUser = asyncHandler(async (req, res) => {
   res.status(200).json(req.user);
});








module.exports = { registerUser, loginUser, logoutUser, currentUser, isTokenBlacklisted }