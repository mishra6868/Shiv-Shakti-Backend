require("dotenv").config();
let express = require("express")
let app = express()
app.use(express.json())
let cors = require("cors")
app.use(cors())
let authRoutes = require("./routes/authentication")
let quoteRoutes = require('./routes/quote')
let fabricRoutes = require("./routes/fabrics")
app.use("/api/user", authRoutes)
app.use("/api/user", quoteRoutes)
app.use("/api/user", fabricRoutes)


console.log("server is running")
app.listen(process.env.PORT)