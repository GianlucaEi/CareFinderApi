let express = require('express');
let router = express.Router();

let hospitalRoutes = require('./hospital-routes');
let userRoutes = require('./user-routes');
let indexRoute = require('./index-routes');

router.use('/hospitals', hospitalRoutes);
router.use('/users', userRoutes);
router.use('/', indexRoute);

module.exports = router;
