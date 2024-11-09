const express = require("express");
const router = express.Router() // to define and use router
const { registerUser, userConfirmation } = require("./UserController") // 


// router.route("/api-2/v1/register").post(registerUser);  // calling the registerUser importing from userController, we have defned registerUser func in userController just for the sake of convience and structuring of code
// router.route("/api-2-0/v1/register").post(registerUser); // diff url this way calling, any method
router.route("/register").post(registerUser).get(userConfirmation); // calling multiple methods as shown with same url/api

// suppose we have to make multiple routes 

// router.route("/api-2/v1/register").post(registerUser)
// router.route("/api-2/v1/login").post(loginUser)
// router.route("/api-2/v1/about").post(aboutUser)
// router.route("/api-2/v1/product").post(productUser)
// router.route("/api-2/v1/contact").post(contactUser)
// router.route("/api-2/v1/message").post(messageUser)

// here "/api-2/v1" is repetiton, so solution is add "/api-2/v1" as constant in index.js and use this instead

// router.route("/register").post(registerUser)
// router.route("/login").post(loginUser)
// router.route("/about").post(aboutUser)
// router.route("/product").post(productUser)
// router.route("/contact").post(contactUser)
// router.route("/message").post(messageUser)



module.exports = router; // exporting router 