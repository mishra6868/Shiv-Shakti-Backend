require("../dbs/db")
let { Signup, Login } = require("../scheema/authentication")
const usersignup = async (req, res) => {
    try {
        let user = await Signup.create(req.body)

        res.status(200).json({
            success: true,
            message: "Account Created Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
let userlogin = async (req, res) => {
    try {
        let user = await Login.create(req.body)
        res.status(200).json({
            success: "true",
            message: "Login successfull"
        })

    } catch (error) {
        error
    }

}


module.exports = { usersignup, userlogin };