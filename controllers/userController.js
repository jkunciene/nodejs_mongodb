const User = require('../models/userModel');

const registerUser = async(req, res) => {
    const { name, email, password, role } = req.body;

    const user = await User.create({
        name, 
        email, 
        password,
        role: 'vartotojas'
    })
    res.send(user);
}

module.exports = {
    registerUser,
}