var express = require('express');
var router = express.Router();

var hospitalRoutes = require('./hospital-routes');
var authRoutes = require('./user-routes');

router.use('/hospitals', hospitalRoutes);
router.use('/auth', authRoutes);

module.exports = router;
