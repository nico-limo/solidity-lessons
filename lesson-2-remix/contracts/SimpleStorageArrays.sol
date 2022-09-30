// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorageArrays {

    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People public person = People({favoriteNumber: 2, name:"Nico"});

    // A best way to list a lot of elements is with an Array
   
    People[] public people; // Dynamic Array
    // People[3] public peopleStatic // Controlled Array

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns(uint256) {
    return favoriteNumber;
    }

    function addPerson(string calldata _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber,_name));
    }

    //calldata,memory,storage
    // calldata is temporary variable inmutable
    // memory is temporary variable mutable 
    // storage permanent variable mutable 

}