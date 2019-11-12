let express = require('express');
let router = express.Router();
let hospitalController = require('../controllers/hospital-controller');
let VerifyToken = require('../auth/VerifyToken');
let VerifyAdmin = require('../auth/VerifyAdmin');

/* GET hospitals listing. */
router.get('/', VerifyToken, hospitalController.findAllHospitals);
router.get('/id/:providerId', VerifyToken, hospitalController.lookupByProviderId);
router.get('/city/:cityName', VerifyToken, hospitalController.lookupByCity);
router.get('/state/:stateName', VerifyToken, hospitalController.lookupByState);
router.get('/county/:countyName', VerifyToken, hospitalController.lookupByCounty);
router.get('/city_state/:cityName/:stateName', VerifyToken, hospitalController.lookupByCityState);
router.get('/name/:hospitalName', VerifyToken, hospitalController.lookupByHospitalName);
router.get('/type/:hospitalType', VerifyToken, hospitalController.lookupByHospitalType);
router.get('/ownership/:hospitalOwner', VerifyToken, hospitalController.lookupByHospitalOwner);
router.get('/emergency/:hospitalEmergency', VerifyToken, hospitalController.lookupByHospitalEmergency);
/* GET hospitals listing end. */

/* POST hospitals listing. */
router.post('/', hospitalController.store);
/* POST hospitals listing end. */

/* DELETE hospitals listing. */
router.delete('/', VerifyToken, VerifyAdmin, hospitalController.deleteAllHospitals);
router.delete('/id/:providerId', VerifyToken, VerifyAdmin, hospitalController.deleteByID);
router.delete('/city/:cityName', VerifyToken, VerifyAdmin, hospitalController.deleteByCity);
router.delete('/state/:stateName', VerifyToken, VerifyAdmin, hospitalController.deleteByState);
router.delete('/county/:countyName', VerifyToken, VerifyAdmin, hospitalController.deleteByCounty);
router.delete('/city_state/:cityName/:stateName', VerifyToken, VerifyAdmin, hospitalController.deleteByCityState);
router.delete('/name/:hospitalName', VerifyToken, VerifyAdmin, hospitalController.deleteByHospitalName);
router.delete('/type/:hospitalType', VerifyToken, VerifyAdmin, hospitalController.deleteByHospitalType);
router.delete('/ownership/:hospitalOwner', VerifyToken, VerifyAdmin, hospitalController.deleteByHospitalOwner);
router.delete('/emergency/:hospitalEmergency', VerifyToken, VerifyAdmin, hospitalController.deleteByHospitalEmergency);
/* DELETE hospitals listing end. */

/* UPDATE hospitals listing. */
router.put('/id/:providerId', hospitalController.updateById);
/* UPDATE hospitals listing end. */


module.exports = router;
