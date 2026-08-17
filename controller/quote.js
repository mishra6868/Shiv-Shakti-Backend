require("../dbs/db");

let requestquote = require("../scheema/quote");


let quote = async (req, res) => {

    try {

        let user = await requestquote.create(req.body);

        res.status(200).json({

            success: true,
            message: "Thank you, your quote request has been submitted successfully"

        });

    } catch (error) {

        res.status(400).json({

            success: false,
            message: error.message

        });

    }

};


module.exports = quote;