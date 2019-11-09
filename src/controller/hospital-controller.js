const Hospital = require('../models/hospital-model');

exports.store = async (req, res) => {
    await Hospital.insertMany(req.body);
    res.status(201).json({ data: Hospital })
};
