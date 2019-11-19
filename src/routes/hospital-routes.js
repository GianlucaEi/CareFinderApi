let express = require('express');
let router = express.Router();
let hospitalController = require('../controllers/hospital-controller');
const {verifyToken, verifyAdmin} = require('../middleware/authHandler');

/* GET hospitals listing. */
router.get('/', hospitalController.findAllHospitals);
router.get('/id/:providerId', hospitalController.lookupByProviderId);
router.get('/city/:cityName', hospitalController.lookupByCity);
router.get('/state/:stateName', hospitalController.lookupByState);
router.get('/county/:countyName', hospitalController.lookupByCounty);
router.get('/city_state/:cityName/:stateName', hospitalController.lookupByCityState);
router.get('/name/:hospitalName', hospitalController.lookupByHospitalName);
router.get('/type/:hospitalType', hospitalController.lookupByHospitalType);
router.get('/ownership/:hospitalOwner', hospitalController.lookupByHospitalOwner);
router.get('/emergency/:hospitalEmergency', hospitalController.lookupByHospitalEmergency);
/* GET hospitals listing end. */

/* POST hospitals listing. */
router.post('/', verifyToken, verifyAdmin, hospitalController.store);
/* POST hospitals listing end. */

/* DELETE hospitals listing. */
router.delete('/', verifyToken, verifyAdmin, hospitalController.deleteAllHospitals);
router.delete('/id/:providerId', verifyToken, verifyAdmin, hospitalController.deleteByID);
router.delete('/city/:cityName', verifyToken, verifyAdmin, hospitalController.deleteByCity);
router.delete('/state/:stateName', verifyToken, verifyAdmin, hospitalController.deleteByState);
router.delete('/county/:countyName', verifyToken, verifyAdmin, hospitalController.deleteByCounty);
router.delete('/city_state/:cityName/:stateName', verifyToken, verifyAdmin, hospitalController.deleteByCityState);
router.delete('/name/:hospitalName', verifyToken, verifyAdmin, hospitalController.deleteByHospitalName);
router.delete('/type/:hospitalType', verifyToken, verifyAdmin, hospitalController.deleteByHospitalType);
router.delete('/ownership/:hospitalOwner', verifyToken, verifyAdmin, hospitalController.deleteByHospitalOwner);
router.delete('/emergency/:hospitalEmergency', verifyToken, verifyAdmin, hospitalController.deleteByHospitalEmergency);
/* DELETE hospitals listing end. */

/* UPDATE hospitals listing. */
router.put('/id/:providerId', verifyToken, verifyAdmin, hospitalController.updateById);
/* UPDATE hospitals listing end. */


module.exports = router;
