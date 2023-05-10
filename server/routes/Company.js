const express = require("express")
const router = express.Router()

const { Company, User } = require("../models")
const { validateToken } = require("../middlewares/AuthMiddleware")

//get all companies
router.get("/", validateToken, async (req, res) => {
  try {
    const companies = await User.findAll({
      where: {
        role: "company",
      },
    })
    res.json(companies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
