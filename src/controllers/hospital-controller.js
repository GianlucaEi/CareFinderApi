const Hospital = require('../models/hospital-model');
let errorHandler = require("../middleware/error-handlers");

exports.store = async (req, res) => {
    await Hospital.insertMany(req.body)
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.findAllHospitals = async (req, res) => {
    await Hospital.find().exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByProviderId = async (req, res) => {
    await Hospital.find({
        provider_id: req.params.providerId
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByCity = async (req, res) => {
    await Hospital.find({
        city: {$regex: req.params.cityName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
    
};

exports.lookupByState = async (req, res) => {
    await Hospital.find({
        state: {$regex: req.params.stateName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByCounty = async (req, res) => {
    const hospital = await Hospital.find({
        county_name: {$regex: req.params.countyName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByCityState = async (req, res) => {
    const hospital = await Hospital.find({
        city: {$regex: req.params.cityName, $options: 'i'},
        state: {$regex: req.params.stateName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByHospitalName = async (req, res) => {
    const hospital = await Hospital.find({
        hospital_name: {$regex: req.params.hospitalName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByHospitalType = async (req, res) => {
    const hospital = await Hospital.find({
        hospital_type: {$regex: req.params.hospitalType, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByHospitalOwner = async (req, res) => {
    const hospital = await Hospital.find({
        hospital_ownership: {$regex: req.params.hospitalOwner, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.lookupByHospitalEmergency = async (req, res) => {
    await Hospital.find({
        emergency_services: {$regex: req.params.hospitalEmergency, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteAllHospitals = async (req, res) => {
    await Hospital.deleteMany({}).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByID = async (req, res) => {
    await Hospital.deleteMany({
        provider_id: req.params.providerId
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByCity = async (req, res) => {
    await Hospital.deleteMany({
        city: {$regex: req.params.cityName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByState = async (req, res) => {
    await Hospital.deleteMany({
        state: {$regex: req.params.stateName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByCounty = async (req, res) => {
    await Hospital.deleteMany({
        county: {$regex: req.params.countyName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByCityState = async (req, res) => {
    await Hospital.deleteMany({
        city: {$regex: req.params.cityName, $options: 'i'},
        state: {$regex: req.params.stateName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByHospitalName = async (req, res) => {
    await Hospital.deleteMany({
        hospital_name: {$regex: req.params.hospitalName, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByHospitalType = async (req, res) => {
    await Hospital.deleteMany({
        hospital_type: {$regex: req.params.hospitalType, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByHospitalOwner = async (req, res) => {
    await Hospital.deleteMany({
        hospital_owner: {$regex: req.params.hospitalOwner, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.deleteByHospitalEmergency = async (req, res) => {
    await Hospital.deleteMany({
        emergency_services: {$regex: req.params.hospitalEmergency, $options: 'i'}
    }).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};

exports.updateById = async (req, res) => {
    await Hospital.findOneAndUpdate({
        provider_id: req.params.providerId
    }, req.body).exec()
        .then(response => res.json({data: response}))
        .catch(err => errorHandler.createError(400, err.code, res, err.message))
};
