//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 <= 0.9.0;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./interface/IHospital.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract SWFContract is Ownable{
	address[] public hospitals;
	address private implementationContract;
	address[] public emergency;

	constructor(address _implementation) {
		implementationContract = _implementation;
	}

	event NewHospital(address indexed hospital);

	function changeImplementationContract (address _implementation) external onlyOwner {
		implementationContract = _implementation;
	}

	function addEmergency(address hospital) external onlyOwner {
		emergency.push(hospital);
	}

	function deleteEmergency(address element) internal {
		for (uint256 i = 0; i < emergency.length; i++) {
			if (emergency[i] == element) {
				if (i < emergency.length - 1) {
					emergency[i] = emergency[emergency.length - 1];
				}
				emergency.pop();
				break;
			}
		}
	}

	function createNewHospital(
		uint8 bedCount
		) external onlyOwner returns(address instance) {
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

	function deleteHospital(address element) internal {
		for (uint256 i = 0; i < hospitals.length; i++) {
			if (hospitals[i] == element) {
				if (i < hospitals.length - 1) {
					hospitals[i] = hospitals[hospitals.length - 1];
				}
				hospitals.pop();
				break;
			}
		}
	}
	
	function allHospital() view external returns (address[] memory) {
		return hospitals;
	}
}