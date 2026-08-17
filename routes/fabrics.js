let express = require("express")
let router = express.Router()

let {

    getFabricNames,
    getFabricSubtypes,
    getCottonSpecification,
    getPolyesterSpecification,
    getNylonSpecification,
    getBlendedSpecification

} = require("../controller/fabrics")

router.get("/names", getFabricNames)

router.get("/subtypes", getFabricSubtypes)

router.get(
    "/cottonspecification",
    getCottonSpecification
)
router.get(
    "/blendedspecification",
    getBlendedSpecification
)

router.get(
    "/polyesterspecification",
    getPolyesterSpecification
)

router.get(
    "/nylonspecification",
    getNylonSpecification
)


module.exports = router