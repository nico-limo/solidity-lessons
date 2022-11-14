const { network } = require("hardhat");
const { networkConfig, developmentChain } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
require("dotenv").config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts(); // deployer is set it from hardhat.config
    const GOERLI_NETWORK = 5;
    const chainId = network.config.chainId ?? GOERLI_NETWORK;

    let ethUsdPriceFeedAddress;
    if (developmentChain.includes(network.name)) {
        const ethUsdAggregator = await get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdAggregator.address;
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
    }
    // If the contract doesn't exist, we deploy a minimal version

    // When going to localhost or hardhat network we want to use a mock network
    const args = [ethUsdPriceFeedAddress];
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args, // put price feed address,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });

    if (!developmentChain.includes(network.name) && ETHERSCAN_API_KEY) {
        await verify(fundMe.address, args);
    }
    log("--------------------------------------------------------");
};

module.exports.tags = ["all", "fundme"];
