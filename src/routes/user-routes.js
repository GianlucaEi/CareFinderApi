let express = require('express');
let router = express.Router();
const userController = require('../controllers/user-controller');
const {verifyToken, verifyAdmin} = require('../middleware/authHandler');

/**
 * Router get routes
 */
router.get('/logout', userController.logout);
router.get('/me', verifyToken ,userController.me);
router.get('/getAllUsers', verifyToken, verifyAdmin, userController.getAllUser);

/**
 * Router post routes
 */
router.post('/register', userController.store);
//router.post('/registerAdmin', verifyToken, verifyAdmin, userController.store);
router.post('/login', userController.login);

/**
 * Router delete routes
 */
router.delete('/deleteAllUsers', verifyToken, verifyAdmin, userController.deleteAllUsers);
router.delete('/delete/user/:email', verifyToken, verifyAdmin, userController.deleteSpecificUser);

module.exports = router;
