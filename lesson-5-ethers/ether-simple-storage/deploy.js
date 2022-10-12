const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

const main = async function () {
    // Using Ganache to local node
    const { PRIVATE_KEY, RPC_URL, REAL_RPC_URL, REAL_PRIVATE_KEY } =
        process.env;
    const provider = new ethers.providers.JsonRpcProvider(REAL_RPC_URL);
    const wallet = new ethers.Wallet(REAL_PRIVATE_KEY, provider);

    const abi = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.abi",
        "utf-8"
    );
    const binary = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf-8"
    );
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...");
    const contract = await contractFactory.deploy(); // wait until contract is deployed
    console.log({ address: contract.address });
    const deploymentReceipt = await contract.deployTransaction.wait(1);
    console.log({ deployTx: contract.deployTransaction, deploymentReceipt });

    const currentFavoriteNumber = await contract.retrieve();
    console.log({ currentFavoriteNumber: currentFavoriteNumber.toString() }); // view fn and not cost gas
    const txResponse = await contract.store("7");
    await txResponse.wait(1);
    const updatedFavNumber = await contract.retrieve();
    console.log({ updatedFavNumber: updatedFavNumber.toString() });
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log("error: ", error);
        process.exit(1);
    });
