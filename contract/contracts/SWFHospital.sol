// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IHospital.sol";

contract Hospital is IHospital, Initializable, Ownable {
  Status private status;

  uint8 _bedCount;
  uint8 _currentBedCount;
  Symptoms[] _impossiblePatient;

  function initialize(address _owner, uint8 bedCount) public payable initializer {
		_bedCount = bedCount;
    _owner = msg.sender;
	}

  function setHospitalData(uint8 currentBedCount, Symptoms[] memory impossibleSymptoms) external onlyOwner {
    if (currentBedCount != _currentBedCount){
      setCurrentCount(currentBedCount);
    }
    setSymptoms(impossibleSymptoms);
  }

  function getStatus() public view returns (Status memory) {
    return status;
  }

  function setSymptoms(Symptoms[] memory impossibleSymptoms) internal {
    _impossiblePatient = impossibleSymptoms;
  }

  function setCount(uint8 bedCount) external {
    _bedCount = bedCount;
  }

  function setCurrentCount(uint8 currentBedCount) internal {
    _currentBedCount = currentBedCount;
  }
}