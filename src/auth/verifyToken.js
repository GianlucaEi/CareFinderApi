let jwt = require('jsonwebtoken');
let config = require('../config/config');
let errorHandler = require('../middleware/error-handlers');

function verifyToken(req, res, next) {
    
    let token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send(errorHandler.createError(403, 'no-token', res));//{ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
}
module.exports = verifyToken;
