require("dotenv").config()

const express = require("express")
const app = express()

//cors
const cors = require("cors")
app.use(cors())

//middleware
app.use(express.json())

const db = require("./models")

//routes
const userRouter = require("./routes/User")
app.use("/api/user", userRouter)

const managerRouter = require("./routes/Manager")
app.use("/api/manager", managerRouter)

const companyRouter = require("./routes/Company")
app.use("/api/company", companyRouter)

const eventRouter = require("./routes/Event")
app.use("/api/event", eventRouter)

const venueRouter = require("./routes/Venue")
app.use("/api/venue", venueRouter)

const caterRouter = require("./routes/Cater")
app.use("/api/cater", caterRouter)

const productionRouter = require("./routes/Production")
app.use("/api/production", productionRouter)

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`)
  })
})
