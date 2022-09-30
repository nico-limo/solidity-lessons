// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256; // using library

    uint public minumimUsd = 50 * 1e18;
    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;
    address public owner;

    // Called inmediatly when deployed contract
    constructor(){
        owner = msg.sender; // the address from who deploy the contract
    }

    function fund() public payable{
        // We don't send the parameter inside getConversionRate because msg.value is already detected
       require(msg.value.getConversionRate() >= minumimUsd, "Didn't send enought");
       funders.push(msg.sender); // sender is the address from the account that call the fn 
       addressToAmountFunded[msg.sender] = msg.value;
    }
    
    function withdraw() public onlyOwner {
        // for loop
        for(uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++){
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        // reset the array
        funders = new address[](0); // will reset address with 0 elements
        // actually withdraw the funds
       (bool callSuccess,) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess,"Call failed");
    }

    modifier onlyOwner {
        require(msg.sender == owner,"Sender is not owner!");
        _; // Do the rest of the code
    }
}