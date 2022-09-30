// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// On BNB testnet 0x879A73730d9980E25fB3d5341Ced04b80048859C

contract FundMe {
   uint public minumimUsd = 50 * 1e18;
// Payable make the function different  an give us access to the value option
    function fund() public payable{
        //Want to be able to set a min fund amount in USD

       require(getConversionRate(msg.value) >= minumimUsd, "Didn't send enought"); 
    }

    function getPrice()public view returns(uint256) {
       AggregatorV3Interface priceFeed =  AggregatorV3Interface(0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526);
       // To avoid unused variables, we can just remove it and left the comas
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return uint256(price * 1e10); // this will convert from int to uint256
    }

    function getConversionRate(uint256 bnbAmount) public view returns(uint256) {
        uint256 bnbPrice = getPrice();
        uint256 bnbAmountInUsd = (bnbPrice * bnbAmount) / 1e18;
        return bnbAmountInUsd;
    }

    function getVersion() public view returns(uint256){
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526);
        return priceFeed.version();
    }
    //function withdraw(){}

}