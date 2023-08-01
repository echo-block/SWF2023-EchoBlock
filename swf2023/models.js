const mongoose = require('mongoose');
const { Schema, Types: { ObjectId } } = mongoose;

const AmbulanceSchema = new Schema({
    address: { type: String, required: true },
    name: { type: String, required: true },
});

const Ambulance = mongoose.model('Ambulance', AmbulanceSchema);

const HospitalSchema = new Schema({
    address: { type: String, required: true },
    name: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

const Hospital = mongoose.model('Hospital', HospitalSchema);

module.exports = {
  Ambulance,
  Hospital,
};
