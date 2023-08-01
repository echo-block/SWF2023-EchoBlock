const express = require("express");
const hospitalService = require('../service/hospital_service.js');
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(process.env.CONTRACT_NETWORK_URL);
const signer = new ethers.Wallet(process.env.CONTRACT_PRIVATE_KEY, provider);
const {abi} = require("../../contract/MoonlightContract.sol/MoonlightContract.json");
const contractInstance = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);

const hospitalRouter = express.Router();

hospitalRouter.get('/nearby', async (req, res) => {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);
    const km = parseFloat(req.query.km);
    console.log(`lat: ${lat}, lng: ${lng}, km: ${km}`)
    const hospitals = await hospitalService.getHospitalsWithinKm(lat, lng, km);
    res.json(hospitals);
});

module.exports = hospitalRouter;
