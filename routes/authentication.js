let express = require("express")
let router = express.Router()
let { usersignup, userlogin } = require("../controller/authentication")

router.post("/signup", usersignup)
router.post("/login", userlogin)
module.exports = router
