let express = require('express');
let router = express.Router();

let hospitalRoutes = require('./hospital-routes');
let authRoutes = require('./user-routes');

router.use('/hospitals', hospitalRoutes);
router.use('/auth', authRoutes);

module.exports = router;
