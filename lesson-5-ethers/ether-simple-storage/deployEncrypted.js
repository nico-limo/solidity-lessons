const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

const main = async function () {
  // Using Ganache to local node
  const { PRIVATE_KEY_PASSWORD, RPC_URL } = process.env;
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

  // First use the script encryptedKey.js
  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf-8");
  let wallet = await new ethers.Wallet.fromEncryptedJson(
    encryptedJson,
    PRIVATE_KEY_PASSWORD
  );
  wallet = await wallet.connect(provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // wait until contract is deployed
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
