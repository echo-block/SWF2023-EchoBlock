const { Ambulance, Hospital } = require('../models');

const userService = {
    async createAmbulance(payload) {
        const newUser = new Ambulance({
            address: payload.address,
            name: payload.name,
        });

        try {
            await newUser.save();
            console.log('User created!');
            return newUser;
        } catch (error) {
            throw error;
        }
    },

    async createHospital(payload) {
        const newUser = new Hospital({
            address: payload.address,
            name: payload.name,
            location: payload.location,
        });

        try {
            await newUser.save();
            console.log('User created!');
            return newUser;
        } catch (error) {
            throw error;
        }
    },

    async checkAmbulanceExist(address) {
        try {
            const user = await Ambulance.findOne({ address: address });
            if (user) {
                console.log('User exists!');
                return true;
            } else {
                console.log('User does not exist!');
                return false;
            }
        } catch (error) {
            throw error;
        }
    },

    async checkHospitalExist(address) {
        try {
            const user = await Hospital.findOne({ address: address });
            if (user) {
                console.log('User exists!');
                return true;
            } else {
                console.log('User does not exist!');
                return false;
            }
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;
