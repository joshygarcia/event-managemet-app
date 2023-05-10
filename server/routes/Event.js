const express = require("express")
const router = express.Router()
const { User, Manager, Events, Venue } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { validateToken } = require("../middlewares/AuthMiddleware")

//event
router.post("/create", validateToken, async (req, res) => {
  console.log("create event")
  try {
    const {
      name,
      date,
      time,
      description,
      venueId,
      caterId,
      productionId,
      companyId,
      managerId,
    } = req.body

    console.log(req.body)

    let valid = true
    let manager = await Manager.findOne({ where: { userId: managerId } })
    let company = await Company.findOne({ where: { userId: companyId } })
    let venue = await Venue.findOne({ where: { venueId } })

    if (!manager || !company || !venue) {
      valid = false
    }
    if (!valid) {
      return res.status(401).json({ error: "Invalid Event" })
    } else {
      const newEvent = await Events.create({
        name,
        date,
        time,
        description,
        venueId,
        caterId,
        productionId,
        companyId,
        managerId,
      })
      res.status(201).json(newEvent)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get("/", validateToken, async (req, res) => {
  console.log("get events")
  try {
    const events = await Events.findAll()
    res.json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
