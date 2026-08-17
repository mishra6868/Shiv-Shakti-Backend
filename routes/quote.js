let express = require("express")
let router = express.Router()

let quote = require("../controller/quote")

router.post("/reqquote", quote)

module.exports = router