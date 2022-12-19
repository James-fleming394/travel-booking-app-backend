const User = require('../models/User.js');
var bcrypt = require('bcryptjs');


//REGISTER 

const register = async (req, res) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save();
        res.status(200).send("User created")
    } catch (err) {
        res.status(500).json(err);
    }
};

//LOGIN

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) return next(createError(404, "User not found!"));

        const isRightPassword = await bcrypt.compare(req.body.password, user.password)
        if (isRightPassword) return next(createError(400, "Wrong password or username!"));

        const {password, isAdmin, ...otherDetails} = user._doc;

        res.status(200).json({...otherDetails});
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    register,
    login
}