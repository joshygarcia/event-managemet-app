const express = require("express")
const router = express.Router()
const { Op } = require("sequelize")

const { Manager, User } = require("../models")
const { validateToken } = require("../middlewares/AuthMiddleware")

//get all managers
router.get("/", validateToken, async (req, res) => {
  try {
    const managers = await User.findAll({
      where: {
        role: "admin",
      },
    })
    res.json(managers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//get one manager
router.get("/:id", validateToken, async (req, res) => {
  try {
    const { id } = req.params
    const manager = await Manager.findOne({
      where: { managerId: id },
    })
    res.json(manager)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
