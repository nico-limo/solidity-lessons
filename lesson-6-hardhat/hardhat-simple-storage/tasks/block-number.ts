import { task } from "hardhat/config";

export default task("block-number", "Print the current block number").setAction(
    async (taskArgs, hre) => {
        const { ethers } = hre;
        const blockNumber = await ethers.provider.getBlockNumber();
        console.log("blockNumber: ", blockNumber);
    }
);
