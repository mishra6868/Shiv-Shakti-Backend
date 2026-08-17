require("../dbs/db");

let { Signup } = require("../scheema/authentication");


// =========================
// SIGNUP
// =========================

const usersignup = async (req, res) => {

    try {

        let { name, email, password, confirmpassword } = req.body;


        // NAME VALIDATION
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required"
            });
        }


        // EMAIL VALIDATION
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email"
            });
        }


        // PASSWORD VALIDATION
        if (!password || password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters"
            });
        }


        // CONFIRM PASSWORD
        if (password !== confirmpassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }


        // CHECK EMAIL ALREADY EXISTS
        let existingUser = await Signup.findOne({
            email: email
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }


        // CREATE USER
        await Signup.create({
            name: name,
            email: email,
            password: password
        });


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



// =========================
// LOGIN
// =========================

const userlogin = async (req, res) => {

    try {

        let { email, password } = req.body;


        // EMAIL EMPTY
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }


        // EMAIL FORMAT
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email"
            });
        }


        // PASSWORD EMPTY
        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required"
            });
        }


        // FIND USER
        let user = await Signup.findOne({
            email: email,
            password: password
        });


        // USER NOT FOUND
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        // LOGIN SUCCESS
        res.status(200).json({
            success: true,
            message: "Login successful"
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


module.exports = {
    usersignup,
    userlogin
};