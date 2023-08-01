const apiUrl = 'http://localhost:8000/hospital/nearby';

async function getNearbyHospitals(lat, lng, km) {
    const response = await fetch(`${apiUrl}?lat=${lat}&lng=${lng}&km=${km}`);
    if (!response.ok) {
        throw new Error('Failed to fetch nearby hospitals.');
    }
    return await response.json();
}

function displayHospitals(hospitals) {
    const hospitalList = document.getElementById('hospitalList');
    hospitalList.innerHTML = '';

    hospitals.forEach((hospital) => {
        const hospitalDiv = document.createElement('div');
        hospitalDiv.innerHTML = `
            <h3>${hospital.name}</h3>
            <p>Address: ${hospital.address}</p>
            <p>Latitude: ${hospital.location.coordinates[0]}</p>
            <p>Longitude: ${hospital.location.coordinates[1]}</p>
            <hr>
        `;
        hospitalList.appendChild(hospitalDiv);
    });
}

async function init() {
    try {
        const lat = 37.567181;
        const lng = 127.005696;
        const km = 100;

        const hospitals = await getNearbyHospitals(lat, lng, km);

        displayHospitals(hospitals);
    } catch (error) {
        console.error(error.message);
    }
}

// 버튼 클릭 시 init() 함수 호출
const loadButton = document.getElementById('loadButton');
loadButton.addEventListener('click', init);
