const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  const { PRIVATE_KEY, PRIVATE_KEY_PASSWORD } = process.env;
  const wallet = new ethers.Wallet(PRIVATE_KEY);
  const ecryptedJsonKey = await wallet.encrypt(PRIVATE_KEY_PASSWORD);
  console.log("ecryptedJsonKey ", ecryptedJsonKey);
  fs.writeFileSync("./.encryptedKey.json", ecryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("error: ", error);
    process.exit(1);
  });
