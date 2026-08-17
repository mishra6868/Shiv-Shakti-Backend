let mongoose = require("mongoose")

let quoteScheema = new mongoose.Schema({
    customer_id: String,
    Customer_name: String,
    Company_name: String,
    fabric_Category: String,
    fabric_subtype: String,
    Colour: String,
    gsm_expected: String,
    quantity_require_kg_m: String,
    phone_no: Number,
    email: String,
    additional_message: String

})

let RequestQuote = mongoose.model("Request Quote", quoteScheema)
module.exports = RequestQuote