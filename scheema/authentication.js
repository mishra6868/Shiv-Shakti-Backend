let mongoose = require("mongoose");

let authscheema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

});


let Signup = mongoose.model("Signup", authscheema, "users");


module.exports = { Signup };