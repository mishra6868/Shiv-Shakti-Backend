let mongoose = require("mongoose")
let authscheema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmpassword: String
})

let loginscheema = new mongoose.Schema({
    email: String,
    password: String
})

let Signup = mongoose.model("Signup", authscheema)
let Login = mongoose.model("Login", loginscheema)
module.exports = { Signup, Login };