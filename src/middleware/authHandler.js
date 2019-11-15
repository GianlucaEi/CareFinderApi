let jwt = require('jsonwebtoken');
let config = require('../config/config');
let errorHandler = require('../middleware/error-handlers');
let User = require('../models/user-model');

exports.verifyAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId, {password: 0}).exec();
    if (!user)
        return res.status(403).send({ auth: false, message: 'Not an User.' });
    if(!user.admin)
        return res.status(403).send({ auth: false, message: 'Not an Admin.' });
    next()
};

exports.verifyToken = async (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send(errorHandler.createError(403, 'no-token', res));
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
};
