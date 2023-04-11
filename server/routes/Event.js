const express = require('express');
const router = express.Router();
const { User, Manager, Events } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthMiddleware');

//event
router.post('/', validateToken, async (req, res) => {
    try {
        const {name, date, time, description, venueId, caterId, productionId, companyId, managerId} = req.body;
        const newEvent = await Events.create({
            name,
            date,
            time,
            description,
            venueId,
            caterId,
            productionId,
            companyId,
            managerId
        });
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
    
module.exports = router;