const express = require('express');
const router = express.Router();
const userModels = require('../models/users.model')

// Signup Route
// Handle data being sent /api/users/signup
router.post("/signup", (req, res) => {
    // {username: "Mike", password: "Password"}
    const username = req.body.username;
    const password = req.body.password;
    // Check requirements
    // If they don't, send an error
    if (!username || username.length < 2 || username.length > 20 ||
        !password || password.length < 4 || password.length > 16) {
        return res.send({ success: false, msg: 'Invalid data provided.' })
    }

    userModels.signUp(res, username, password)

})
// Login Route
router.post("/login", (req, res) => {
    // Make sure they gave us a username and password
    const username = req.body.username;
    const password = req.body.password;
    // Check requirements
    // If they don't, send an error
    if (!username || username.length < 2 || username.length > 20 ||
        !password || password.length < 4 || password.length > 16) {
        return res.send({ success: false, msg: 'Invalid data provided.' })
    }
    userModels.login(res, username, password);
});

module.exports = router;
