let {
    fabricModel,
    cottonspecificationModel,
    polyesterSpecificationModel,
    nylonSpecificationModel,
    blendedSpecificationModel
} = require("../scheema/fabrics")

// GET ALL FABRIC NAMES
let getFabricNames = async (req, res) => {
    try {
        let data = await fabricModel.findOne()

        let names = data.products.map((product) => {
            return {
                id: product.id,
                name: product.name
            }
        })

        res.json(names)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error getting fabric names"
        })
    }
}

//subtype
let getFabricSubtypes = async (req, res) => {
    try {
        let fabricName = req.query.name

        let data = await fabricModel.findOne()

        let fabric = data.products.find((product) => {
            return product.name === fabricName
        })

        let subtypes = fabric.subTypes.map((subtype) => {
            return {
                id: subtype.id,
                name: subtype.name
            }
        })

        res.json(subtypes)

    } catch (error) {
        res.status(500).json({
            message: "Error getting subtypes"
        })
    }
}


// fabric specification
let getCottonSpecification = async (req, res) => {

    try {

        console.log("Requested ID:", req.query.id);

        console.log(
            "Collection:",
            cottonspecificationModel.collection.name
        );

        let allData = await cottonspecificationModel.find();

        console.log("All cotton data:", allData);

        let subtypeId = Number(req.query.id);

        let data = await cottonspecificationModel.findOne({
            id: subtypeId
        });

        console.log("Found data:", data);

        res.json(data);

    } catch (error) {

        console.log("ERROR:", error);

        res.status(500).json({
            message: "Error getting polyester specification"
        });

    }

};


let getPolyesterSpecification = async (req, res) => {

    try {

        console.log("Requested ID:", req.query.id);

        console.log(
            "Collection:",
            polyesterSpecificationModel.collection.name
        );

        let allData = await polyesterSpecificationModel.find();

        console.log("All polyester data:", allData);

        let subtypeId = Number(req.query.id);

        let data = await polyesterSpecificationModel.findOne({
            id: subtypeId
        });

        console.log("Found data:", data);

        res.json(data);

    } catch (error) {

        console.log("ERROR:", error);

        res.status(500).json({
            message: "Error getting polyester specification"
        });

    }

};
let getNylonSpecification = async (req, res) => {

    try {

        let subtypeId = Number(req.query.id);

        let data = await nylonSpecificationModel.findOne({
            id: subtypeId
        });

        res.json(data);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error getting nylon specification"
        });

    }
};

let getBlendedSpecification = async (req, res) => {

    try {

        let subtypeId = Number(req.query.id)

        let data = await blendedSpecificationModel.findOne({
            id: subtypeId
        })

        res.json(data)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Error getting blended specification"
        })

    }

}
module.exports = {

    getFabricNames,
    getFabricSubtypes,
    getCottonSpecification,
    getPolyesterSpecification,
    getNylonSpecification,
    getBlendedSpecification
}