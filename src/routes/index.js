let express = require('express');
let router = express.Router();

let hospitalRoutes = require('./hospital-routes');
let userRoutes = require('./user-routes');

router.use('/hospitals', hospitalRoutes);
router.use('/users', userRoutes);

module.exports = router;
