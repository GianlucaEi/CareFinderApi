let express = require('express');
let router = express.Router();
let hospitalController = require('../controllers/hospital-controller');
let VerifyToken = require('../auth/VerifyToken');
let VerifyAdmin = require('../auth/VerifyAdmin');

/* GET hospitals listing. */
router.get('/', VerifyToken, hospitalController.allHospitals);
router.get('/id/:providerId', VerifyToken, hospitalController.lookupProviderId);
router.get('/city/:cityName', VerifyToken, hospitalController.lookupCity);
router.get('/state/:stateName', VerifyToken, hospitalController.lookupState);
router.get('/county/:countyName', VerifyToken, hospitalController.lookupCounty);
router.get('/citystate/:cityName/:stateName', VerifyToken, hospitalController.lookupCityState);
router.get('/name/:hospitalName', VerifyToken, hospitalController.lookupHospitalName);
router.get('/type/:hospitalType', VerifyToken, hospitalController.lookupHospitalType);
router.get('/ownership/:hospitalOwner', VerifyToken, hospitalController.lookupHospitalOwner);
router.get('/emergency/:hospitalEmergency', VerifyToken, hospitalController.lookupHospitalEmergency);
/* GET hospitals listing end. */

/* POST hospitals listing. */
router.post('/', hospitalController.store);
/* POST hospitals listing end. */

/* DELETE hospitals listing. */
router.delete('/', VerifyToken, VerifyAdmin, hospitalController.deleteAllHospitals);
router.delete('/id/:providerId', VerifyToken, VerifyAdmin, hospitalController.deleteID);
router.delete('/city/:cityName', VerifyToken, VerifyAdmin, hospitalController.deleteCity);
router.delete('/state/:stateName', VerifyToken, VerifyAdmin, hospitalController.deleteState);
router.delete('/county/:countyName', VerifyToken, VerifyAdmin, hospitalController.deleteCounty);
router.delete('/citystate/:cityName/:stateName', VerifyToken, VerifyAdmin, hospitalController.deleteCityState);
router.delete('/name/:hospitalName', VerifyToken, VerifyAdmin, hospitalController.deleteHospitalName);
router.delete('/type/:hospitalType', VerifyToken, VerifyAdmin, hospitalController.deleteHospitalType);
router.delete('/ownership/:hospitalOwner', VerifyToken, VerifyAdmin, hospitalController.deleteHospitalOwner);
router.delete('/emergency/:hospitalEmergency', VerifyToken, VerifyAdmin, hospitalController.deleteHospitalEmergency);
/* DELETE hospitals listing end. */

/* UPDATE hospitals listing. */
router.put('/id/:providerId', hospitalController.updateId);
/* UPDATE hospitals listing end. */


module.exports = router;
