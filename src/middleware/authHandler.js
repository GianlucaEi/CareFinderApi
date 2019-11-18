let jwt = require('jsonwebtoken');
let config = require('../config/config');
let errorHandler = require('../middleware/error-handlers');
let User = require('../models/user-model');

exports.verifyAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId, {password: 0}).exec();
    if (!user)
        res.status(403).send({ auth: false, message: 'Not an User.' });
    if(!user.admin)
        await res.json({status: 403, auth: false, message: 'Not an Admin.'});
    next()
};

exports.verifyToken = async (req, res, next) => {
    try {
        let token = req.headers['x-access-token'];
        if (!token) {
            errorHandler.createError(403, 'no-token', res);
        } else {
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err)
                    res.status(401).json({auth: false, message: 'Failed to authenticate token.'});
                // if everything good, save to request for use in other routes
                req.userId = decoded.id;
                next();
            });
        }
    } catch (e) {
        console.error(e)
    }
};
