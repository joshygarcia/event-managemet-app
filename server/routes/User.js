require('dotenv').config();
const express = require('express');
const router = express.Router();
const { User, Manager, Company } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateTokenAdmin } = require('../middlewares/AuthMiddleware');

//register

// company
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, name, phone, address, city, state, zip, paymentInfo, industry } = req.body;
        const newUser = await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, 8),
        role: 'company',
        name,
        phone,
        address,
        city,
        state,
        zip
        });
        const newCompany = await Company.create({
            paymentInfo,
            industry,
            userId: newUser.userId
        });
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// manager
router.post('/register/manager', validateTokenAdmin, async (req, res) => {
    try {
        const { username, email, password, name, phone, address, city, state, zip, jobTitle, department, salary} = req.body;
        const newUser = await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, 8),
        role: 'manager',
        name,
        phone,
        address,
        city,
        state,
        zip
        });
        const newManager = await Manager.create({
            jobTitle,
            department,
            salary,
            userId: newUser.userId
        });
        res.status(201).json(newManager);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// admin
router.post('/register/admin', validateTokenAdmin, async (req, res) => {
    try {
        const { username, email, password, name, phone, address, city, state, zip} = req.body;
        const newUser = await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, 8),
        role: 'admin',
        name,
        phone,
        address,
        city,
        state,
        zip
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//login
router.post('/login', async (req, res) => {
    try {
    const { username, password } = req.body;
    let user = await User.findOne({ where: { username: username } });
    if (!user) {
        user = await User.findOne({ where: { email: username } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
    return res.status(401).json({ error: "Invalid password" });
    }
    const token = jwt.sign({ userId: user.userId, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token: token });
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
    }
});

module.exports = router;
