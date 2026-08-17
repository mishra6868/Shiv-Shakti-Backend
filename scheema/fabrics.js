let mongoose = require("mongoose")

let fabricSchema = new mongoose.Schema({
    products: [
        {
            id: Number,
            name: String,
            image: String,
            subTypes: [
                {
                    id: Number,
                    name: String
                }
            ]
        }
    ]
}, {
    collection: "Fabrics list with subtypes"
})

let fabricModel = mongoose.model("Fabric", fabricSchema)


// GARMENT SCHEMA

let garmentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String
})


// COTTON SPECIFICATION

let cottonspecificationSchema = new mongoose.Schema({
    id: Number,
    name: String,
    gsm: Number,
    composition: String,
    width: String,
    fabricType: String,
    finish: String,

    availableColors: [String],

    garmentApplications: [garmentSchema],

    stock: String
}, {
    collection: "Cottonspecification"
})

let cottonspecificationModel = mongoose.model(
    "CottonSpecification",
    cottonspecificationSchema
)


// POLYESTER SPECIFICATION

let polyesterSpecificationSchema = new mongoose.Schema({

    id: Number,
    name: String,
    gsm: Number,
    composition: String,
    width: String,
    fabricType: String,
    finish: String,

    availableColors: [String],

    garmentApplications: [garmentSchema],

    stock: String

}, {
    collection: "polyesterspecification"
})

let polyesterSpecificationModel = mongoose.model(
    "PolyesterSpecification",
    polyesterSpecificationSchema
)


// NYLON SPECIFICATION

let nylonSpecificationSchema = new mongoose.Schema({

    id: Number,
    name: String,
    gsm: Number,
    composition: String,
    width: String,
    fabricType: String,
    finish: String,

    availableColors: [String],

    garmentApplications: [garmentSchema],

    stock: String

}, {
    collection: "nylonspecification"
})

let nylonSpecificationModel = mongoose.model(
    "NylonSpecification",
    nylonSpecificationSchema
)

// BLENDED SPECIFICATION

let blendedSpecificationSchema = new mongoose.Schema({

    id: Number,
    name: String,
    gsm: Number,
    composition: String,
    width: String,
    fabricType: String,
    finish: String,

    availableColors: [String],

    garmentApplications: [garmentSchema],

    stock: String

}, {
    collection: "blendedspecification"
})


let blendedSpecificationModel = mongoose.model(
    "BlendedSpecification",
    blendedSpecificationSchema
)
module.exports = {
    fabricModel,
    cottonspecificationModel,
    polyesterSpecificationModel,
    nylonSpecificationModel,
    blendedSpecificationModel
}