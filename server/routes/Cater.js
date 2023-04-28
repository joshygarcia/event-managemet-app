const express = require("express")
const router = express.Router()

const { Cater } = require("../models")
const {
  validateToken,
  validateTokenManager,
} = require("../middlewares/AuthMiddleware")

//get all Cater
router.get("/", validateToken, async (req, res) => {
  try {
    const caters = await Cater.findAll()
    res.json(caters)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//get one cater
router.get("/:id", validateToken, async (req, res) => {
  try {
    const { id } = req.params
    const cater = await Cater.findOne({
      where: { caterId: id },
    })
    res.json(cater)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//create cater
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
      pricePerPerson,
      availability,
      description,
      type,
      menu,
      diets,
      alcohol,
    } = req.body
    const newCater = await Cater.create({
      name,
      address,
      city,
      state,
      zip,
      email,
      phone,
      pricePerPerson,
      availability,
      description,
      type,
      menu,
      diets,
      alcohol,
    })
    res.status(201).json(newCater)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
