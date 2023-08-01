// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.13;

interface IHospital {
    enum Symptoms {
        neurology,
        cardiology,
        addictionAndMetabolicDisorders,
        surgery,
        hemorrhage,
        ophthalmology,
        allergy,
        pediatrics,
        psychiatry,
        infected
    }

    struct Status {
        uint8 _bedCount;
        uint8 _currentBedCount;
        Symptoms[] _impossiblePatient;
    }

    function getStatus() external view returns (Status memory);
    function setCount(uint8 bedCount) external;
    function setHospitalData(uint8 currentBedCount, Symptoms[] memory impossibleSymptoms) external;
    
}