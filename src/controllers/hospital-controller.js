const Hospital = require('../models/hospital-model');

exports.store = async (req, res) => {
    await Hospital.insertMany(req.body);
    res.status(201).json({ data: Hospital })
};

exports.findAllHospitals = async (req, res) => {
    const hospital = await Hospital.find().exec();
    res.json({ data:hospital });
};

exports.lookupByProviderId = async (req, res) => {
    const hospital = await Hospital.find({
        provider_id: req.params.providerId }).exec()
    res.json({ data: hospital })
};

exports.lookupByCity = async (req, res) => {
    const hospital = await Hospital.find({
        city: { $regex: req.params.cityName, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.lookupByState = async (req, res) => {
    const hospital = await Hospital.find({
        state: { $regex: req.params.stateName, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.lookupByCounty = async (req, res) => {
    const hospital = await Hospital.find({
        county_name: { $regex: req.params.countyName, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.lookupByCityState = async (req, res) => {
    const hospital = await Hospital.find({
        city: { $regex: req.params.cityName, $options: 'i' },
        state: { $regex: req.params.stateName, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.lookupByHospitalName = async (req, res) => {
    const hospital = await Hospital.find({
        hospital_name: { $regex: req.params.hospitalName, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.lookupByHospitalType = async (req, res) => {
    const hospital = await Hospital.find({
        hospital_type: { $regex: req.params.hospitalType, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.lookupByHospitalOwner = async (req, res) => {
    const hospital = await Hospital.find({
        hospital_ownership: { $regex: req.params.hospitalOwner, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.lookupByHospitalEmergency = async (req, res) => {
    const hospital = await Hospital.find({
        emergency_services: { $regex: req.params.hospitalEmergency, $options: 'i' }
    }).exec()
    res.json({ data: hospital })
};

exports.deleteAllHospitals = async (req, res) => {
    await Hospital.deleteMany({}).exec()
    res.status(204).send()
};

exports.deleteByID = async (req, res) => {
    await Hospital.deleteMany({
        provider_id: req.params.providerId
    }).exec()
    res.status(204).send()
};

exports.deleteByCity = async (req, res) => {
    await Hospital.deleteMany({
        city: { $regex: req.params.cityName, $options: 'i' }
    }).exec()
    res.status(204).send()
};

exports.deleteByState = async (req, res) => {
    await Hospital.deleteMany({
        state: { $regex: req.params.stateName, $options: 'i'}
    }).exec()
    res.status(204).send()
};

exports.deleteByCounty = async (req, res) => {
    await Hospital.deleteMany({
        county: {$regex: req.params.countyName, $options: 'i'}
    }).exec()
    res.status(204).send()
};

exports.deleteByCityState = async (req, res) => {
    await Hospital.deleteMany({
        city: { $regex: req.params.cityName, $options: 'i'},
        state: { $regex: req.params.stateName, $options: 'i'}
    }).exec()
    res.status(204).send()
};

exports.deleteByHospitalName = async (req, res) => {
    await Hospital.deleteMany({
        hospital_name: { $regex: req.params.hospitalName, $options: 'i' }
    }).exec()
    res.status(204).send()
};

exports.deleteByHospitalType = async (req, res) => {
    await Hospital.deleteMany({
        hospital_type: { $regex: req.params.hospitalType, $options: 'i' }
    }).exec()
    res.status(204).send()
};

exports.deleteByHospitalOwner = async (req, res) => {
    await Hospital.deleteMany({
        hospital_owner: { $regex: req.params.hospitalOwner, $options: 'i'}
    }).exec()
    res.status(204).send()
};

exports.deleteByHospitalEmergency = async (req, res) => {
    await Hospital.deleteMany({
        emergency_services: { $regex: req.params.hospitalEmergency, $options: 'i'}
    }).exec()
    res.status(204).send()
};

exports.updateById = async (req, res) => {
    await Hospital.findOneAndUpdate({
        provider_id: req.params.providerId
    }, req.body).exec()
    res.status(200).send()
};
