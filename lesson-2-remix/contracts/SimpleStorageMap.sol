// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorageMap {
    uint256 favoriteNumber;

    // mappint is a data structure where a key is "mapped" to a single value
    mapping(string => uint256) public nameToFavoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people; 

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns(uint256) {
    return favoriteNumber;
    }

    function addPerson(string calldata _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber,_name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

    // Deployed on Rinkeby 0x2712DF2Adf30B64EB45cEB345F26635B06feC460
}