const { Hospital } = require('../models');

const earthRadiusKm = 6371; 
const hospitalService = {  
  async getHospitalsWithinKm(lat, lng, radiusInKm) {
    console.log("all hospitals: ", await Hospital.find());
    try {
      const hospitals = await Hospital.find({
        location: {
          $geoWithin: {
            $centerSphere: [[lng, lat], radiusInKm / earthRadiusKm]
          }
        }
      });
  
      console.log("hospitals: ", hospitals);
      return hospitals;
    } catch (error) {
      console.error('Error while querying hospitals:', error);
      return [];
    }
  }
}
module.exports = hospitalService;