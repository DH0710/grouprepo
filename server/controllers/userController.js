// Register a user
// route POST /api/users/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
   res.status(200).json({message: "Register the User"});
});



// Login a user
// route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Login the User"});
 });











module.exports = {registerUser, loginUser}