const express = require("express")
const router = express.Router()

const { Venue } = require("../models")
const {
  validateToken,
  validateTokenAdmin,
  validateTokenManager,
} = require("../middlewares/AuthMiddleware")

//get all venues
router.get("/", validateToken, async (req, res) => {
  try {
    const venues = await Venue.findAll()
    res.json(venues)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//get one venue
router.get("/:id", validateToken, async (req, res) => {
  try {
    const { id } = req.params
    const venue = await Venue.findOne({
      where: { venueId: id },
    })
    res.json(venue)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//create venue
router.post("/", validateTokenManager, async (req, res) => {
  try {
    const {
      name,
      address,
      city,
      state,
      zip,
      email,
      phone,
      capacity,
      pricePerDay,
      availability,
      description,
      type,
    } = req.body
    const newVenue = await Venue.create({
      name,
      address,
      city,
      state,
      zip,
      email,
      phone,
      capacity,
      pricePerDay,
      availability,
      description,
      type,
    })
    res.status(201).json(newVenue)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//update venue
router.put("/:id", validateTokenManager, async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
