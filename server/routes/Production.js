const express = require("express")
const router = express.Router()

const { Production } = require("../models")
const {
  validateTokenManager,
  validateToken,
} = require("../middlewares/AuthMiddleware")

//get all Production
router.get("/", validateToken, async (req, res) => {
  try {
    const productions = await Production.findAll()
    res.json(productions)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//get one production
router.get("/:id", validateToken, async (req, res) => {
  try {
    const { id } = req.params
    const production = await Production.findOne({
      where: { productionId: id },
    })
    res.json(production)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//create production
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
      pricePerDay,
      availability,
      description,
      audio,
      video,
      lighting,
      electrical,
    } = req.body
    const newProduction = await Production.create({
      name,
      address,
      city,
      state,
      zip,
      email,
      phone,
      description,
      audio,
      video,
      electrical,
      lighting,
      availability,
      pricePerDay,
    })
    res.status(201).json(newProduction)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
