const User = require('../models/User.js');

const register = async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        await newUser.save();
        res.status(200).send("User created")
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    register
}