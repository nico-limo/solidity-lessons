// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract FallbackExample {
    uint256 public result;

// when we do a tx it will execute this receive action
    receive() external payable {
        result = 1;
    }

    // If call data have something and don't find it on the functions it will execute this one
    fallback() external payable {
        result = 2;
    }
}