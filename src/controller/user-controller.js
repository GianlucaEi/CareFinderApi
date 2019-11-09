const User = require('../models/user-model');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config/config');

exports.store = async (req, res) => {
    await User.insert(req.body);
    res.status(201).json({data: User})
};

exports.me = async (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        admin: req.body.admin
    }).then(function (err, user) {
        if (err) return res.status(500).send("There was a problem registering the user.");
        // create a token
        let token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({auth: true, token: token});
    }).catch(reason => res.send(reason));
};

exports.login = async (req, res) => {
    await User.findOne({email: req.body.email}).then( function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({auth: false, token: null});
        var token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({auth: true, token: token});
    }).catch(reason => res.send(reason));
};

exports.logout = async (req, res) => {
    res.status(200).send({auth: false, token: null});
};

exports.getAllUser = async (req, res) => {
    const user = await User.find({}, {password: 0}).exec();
    await res.json({data: user})
};

exports.deleteAllUsers = async (req, res) => {
    await User.deleteMany({}).exec();
    res.status(204).send()
};

exports.deleteSpecificUser = async (req, res) => {
    await User.deleteMany({
        email: req.params.email
    }).exec();
    res.status(204).send()
};
