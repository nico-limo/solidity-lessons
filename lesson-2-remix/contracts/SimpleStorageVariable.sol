// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorageVariable {
    // boolean, uint, int, address, bytes
    bool hasFavotireNumber = true;
    uint256 favoriteNumberExample = 5;
    string favoriteNumberInText = "Five";
    int256 favoriteInt = -5;
    address myAddress = 0xc9f200abB8a628af2ad821755F0119dAed0F5513;
    bytes32 favoriteBytes = "cat";

    // DEFAULT VALUE WILL BE ZERO
    // If we don't put public, that mean the variable is internal and not possible to see it
    uint256 public favoriteNumber;

    // FUNCTIONS or "methods"
    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
        // When we add more stuff to do, more gas will cost
        favoriteNumber = favoriteNumber + 1;
    }

    // Scopes are really important, on here it will generate an error
    // function newScope() public {
    //     uint testVar = 5; 
    // }
    // function callScope() public {
    //     testVar = 7; 
    // }

    function retrieve() public view returns(uint256) {
    // View and pure functions, when called alone, don't spend gas
    return favoriteNumber;
    }
    function add(uint256 _newValue) public pure returns(uint256) {
    return(_newValue+2);
    }

        function storeWithGas(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
        retrieve();
        // If we call retrieve inside a public tx it will cost more gas
    }
}