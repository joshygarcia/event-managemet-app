require('dotenv').config();
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ error: "User not logged in" });

    try {
        const validToken = jwt.verify(accessToken, process.env.JWT_SECRET );
        req.user = validToken;
        if (validToken) {
            return next();
        }
    } catch (error) {
        return res.json({ error: error });
    }
}

const validateTokenAdmin = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ error: "User not logged in" });

    try {
        const validToken = jwt.verify(accessToken, process.env.JWT_SECRET );
        req.user = validToken;
        if (validToken.role === 'admin') {
            return next();
        } else {
            return res.json({ error: "User is not an admin" });
        }
    } catch (error) {
        return res.json({ error: error });
    }
}

const validateTokenManager = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ error: "User not logged in" });

    try {
        const validToken = jwt.verify(accessToken, process.env.JWT_SECRET );
        req.user = validToken;
        if (validToken.role === 'manager' || validToken.role === 'admin') {
            return next();
        } else {
            return res.json({ error: "User is not a manager" });
        }
    } catch (error) {
        return res.json({ error: error });
    }
}

module.exports = { validateToken, validateTokenAdmin, validateTokenManager};