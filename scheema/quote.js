let mongoose = require("mongoose");


let quoteSchema = new mongoose.Schema({

    customer_id: {
        type: String,
        required: [true, "Customer ID is required"],
        trim: true
    },

    Customer_name: {
        type: String,
        required: [true, "Customer name is required"],
        trim: true
    },

    Company_name: {
        type: String,
        required: [true, "Company name is required"],
        trim: true
    },

    fabric_Category: {
        type: String,
        required: [true, "Fabric category is required"],
        trim: true
    },

    fabric_subtype: {
        type: String,
        required: [true, "Fabric subtype is required"],
        trim: true
    },

    Colour: {
        type: String,
        required: [true, "Colour is required"],
        trim: true
    },

    gsm_expected: {
        type: String,
        required: [true, "GSM is required"],
        trim: true
    },

    quantity_require_kg_m: {
        type: String,
        required: [true, "Quantity is required"],
        trim: true
    },

    phone_no: {
        type: Number,
        required: [true, "Phone number is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true
    },

    additional_message: {
        type: String,
        trim: true
    }

});


let RequestQuote = mongoose.model("Request Quote", quoteSchema);


module.exports = RequestQuote;