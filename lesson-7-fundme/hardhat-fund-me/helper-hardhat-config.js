const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    137: {
        name: "polygon mainet",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    },
    97: {
        name: "binance tesnet",
        ethUsdPriceFeed: "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526",
    },
};

const developmentChain = ["hardhat", "localhost"];

const DECIMALS = 8;
const INITIAL_ANSWER = 130000000000;

module.exports = {
    networkConfig,
    developmentChain,
    DECIMALS,
    INITIAL_ANSWER,
};
