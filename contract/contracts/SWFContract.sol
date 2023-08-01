//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 <= 0.9.0;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./interface/IHospital.sol";


contract SWFContract {
	address[] public hospitals;
	address public implementationContract;

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

	constructor(address _implementation) {
		implementationContract = _implementation;
	}

	event NewHospital(address indexed hospital);

	function createNewHospital(
		uint8 bedCount
		) external returns(address instance) {
		instance = Clones.clone(implementationContract);
		(bool success, ) = instance.call(abi.encodeWithSignature("initialize(address,address,address)", msg.sender, bedCount));
		if (success){
            hospitals.push(instance);
		    emit NewHospital(instance);
        }
		return instance;
	}

	function allHospitalData() view external returns (IHospital.Status[] memory) {
		uint256 length = hospitals.length;
		IHospital.Status[] memory statuses = new IHospital.Status[](length);
		for (uint256 i = 0; i < length; i++) {
			IHospital hospital = IHospital(hospitals[i]);
			statuses[i] = hospital.getStatus();
		}
		return statuses;
	}

	function getHospitalData(address[] memory nearHospitals) view external {
		uint256 length = nearHospitals.length;
		for (uint256 i = 0; i < length; i++) {
			IHospital hospital = IHospital(nearHospitals[i]);
			hospital.getStatus();
		}
	}
}