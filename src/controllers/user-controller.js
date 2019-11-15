const user = require('../models/user-model');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config/config');

exports.store = async (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    const user = new user(req.body);
    user.password = hashedPassword;
    
    await user.save().then(() => {
        // create a token
        let token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({auth: true, token: token});
    }).catch(reason => res.send(reason));
};

exports.me = async (req, res) => {
    const user = await user.find({email: req.body.email}, {password: 0}).exec();
    await res.json(user)
};

exports.login = async (req, res) => {
    try {
        console.log(req.body);
        await user.findOne({email: req.body.email}).then(response => {
            //if (err) return res.status(500).send('Error on the server.');
            if (response == null) {
                return res.status(404).send('No user found.');
            }
            
            let passwordIsValid = bcrypt.compareSync(req.body.password, response.password);
            
            if (!passwordIsValid) {
                return res.status(401).send({auth: false, token: null});
            }
            else {
                let token = jwt.sign({id: response._id}, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({auth: true, token: token});
            }
        }).catch(reason => res.send(reason));
    }catch (e) {
        res.send(e);
    }
};

exports.logout = async (req, res) => {
    res.status(200).send({auth: false, token: null});
};

exports.getAllUser = async (req, res) => {
    const user = await user.find({}, {password: 0}).exec();
    await res.json({data: user})
};

exports.deleteAllUsers = async (req, res) => {
    const user = await user.find({email: req.body.email}, {password: 0}).exec().catch(reason => console.log(reason));
    await user.deleteMany({}).exec().catch(reason => console.log(reason));
    await user.save().then(() => {
        res.status(200).send("Deleted All users, except you");
    }).catch(reason => res.send(reason));
};

exports.deleteSpecificUser = async (req, res) => {
    await user.deleteMany({
        email: req.params.email
    }).exec()
        .then(res.status(204).send())
        .catch(reason => res.send(reason));
};
