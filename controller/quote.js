require("../dbs/db")
let requestquote = require("../scheema/quote")

let quote = async (req, res) => {
    try {
        let user = await requestquote.create(req.body)
        res.status(200).json({
            sucess: "true",
            message: "thankyou your order is placed"
        })
    } catch (error) {
        res.json(error)
    }

}

module.exports = quote