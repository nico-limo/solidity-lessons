import hre from "hardhat";
import "dotenv/config";

const GOERLI_CHAIN_ID = 5;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

async function main() {
    const { ethers, network } = hre;
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();

    await simpleStorage.deployed();
    console.log(`Deployed contract to: ${simpleStorage.address}`);
    if (network.config.chainId === GOERLI_CHAIN_ID && ETHERSCAN_API_KEY) {
        console.log("Waiting block confirmations...");
        await simpleStorage.deployTransaction.wait(5);
        await verify(simpleStorage.address, []);
    }
    const currentValue = await simpleStorage.retrieve();
    console.log(`Current Value is: ${currentValue}`);

    // Update the current value
    const txResponse = await simpleStorage.store(7);
    await txResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated Value is: ${updatedValue}`);
}

async function verify(contractAddress: string, args: any[]) {
    const { run } = hre;
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log("Error: ", error);
        }
    }
}

main()
    .then(() => {
        process.exitCode = 0;
    })
    .catch((error: any) => {
        console.log(error);
        process.exitCode = 1;
    });
