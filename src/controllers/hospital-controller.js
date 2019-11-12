const Hospital = require('../models/hospital-model');

exports.store = async (req, res) => {
    await Hospital.insertMany(req.body);
    res.status(201).json({ data: Hospital })
};

exports.findAllHospitals = async (req, res) => {

};

exports.lookupByProviderId = async (req, res) => {

};

exports.lookupByCity = async (req, res) => {

};

exports.lookupByState = async (req, res) => {

};

exports.lookupByCounty = async (req, res) => {

};

exports.lookupByCityState = async (req, res) => {

};

exports.lookupByHospitalName = async (req, res) => {

};

exports.lookupByHospitalType = async (req, res) => {

};

exports.lookupByHospitalOwner = async (req, res) => {

};

exports.lookupByHospitalEmergency = async (req, res) => {

};

exports.deleteAllHospitals = async (req, res) => {

};

exports.deleteByID = async (req, res) => {

};

exports.deleteByCity = async (req, res) => {

};

exports.deleteByState = async (req, res) => {

};

exports.deleteByCounty = async (req, res) => {

};

exports.deleteByCityState = async (req, res) => {

};

exports.deleteByHospitalName = async (req, res) => {

};

exports.deleteByHospitalType = async (req, res) => {

};

exports.deleteByHospitalOwner = async (req, res) => {

};

exports.deleteByHospitalEmergency = async (req, res) => {

};

exports.updateById = async (req, res) => {

};
