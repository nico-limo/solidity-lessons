// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// library can only have internal functions
library PriceConverter {
    function getPrice()internal view returns(uint256) {
        AggregatorV3Interface priceFeed =  AggregatorV3Interface(0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526);
        (,int price,,,) = priceFeed.latestRoundData();
        return uint256(price * 1e10);
    }

    function getConversionRate(uint256 bnbAmount) internal view returns(uint256) {
        uint256 bnbPrice = getPrice();
        uint256 bnbAmountInUsd = (bnbPrice * bnbAmount) / 1e18;
        return bnbAmountInUsd;
    }

    function getVersion() internal view returns(uint256){
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526);
        return priceFeed.version();
    }
}