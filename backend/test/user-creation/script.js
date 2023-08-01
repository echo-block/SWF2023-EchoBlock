// script.js

const apiUrl = 'http://localhost:8000/auth/user/hospital';

const hospitals = [
  {
    "name": "국립중앙의료원",
    "address": "지갑주소1",
    "location": {
      "type": "Point",
      "coordinates": [127.005696, 37.567181]
    }
  },
  {
    "name": "인제대서울백병원",
    "address": "지갑주소2",
    "location": {
      "type": "Point",
      "coordinates": [126.989013, 37.564999]
    }
  },
  {
    "name": "중앙대의료원 교육협력 현대병원 응급실",
    "address": "지갑주소3",
    "location": {
      "type": "Point",
      "coordinates": [127.1796515, 37.7156973]
    }
  },
  {
    "name": "부천우리병원 응급실",
    "address": "지갑주소4",
    "location": {
      "type": "Point",
      "coordinates": [126.805058, 37.5207525]
    }
  },
  {
    "name": "한림대학교성심병원 권역응급의료센터 응급실",
    "address": "지갑주소5",
    "location": {
      "type": "Point",
      "coordinates": [126.9619483, 37.391604]
    }
  }
];


hospitals.forEach(hospital => {
  $.ajax({
    type: 'POST',
    url: apiUrl,
    data: JSON.stringify(hospital),
    contentType: 'application/json',
    success: function(response) {
      console.log(`User created for ${hospital.name} successfully!`);
      console.log(response);
    },
    error: function(error) {
      console.error(`User creation for ${hospital.name} failed.`);
      console.error(error.responseJSON);
    }
  });
});
