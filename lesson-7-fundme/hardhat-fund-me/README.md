# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Notes

-   Y can debug from VS Code with breakpoints
-   With that we can get the gas cost used on the tx with gasUsed \* effectiveGasPrice
-   You can use console log on solidity code

```solidity
import "hardhat/console.sol"
```

-   [Values Gas Cost](https://github.com/djrtwo/evm-opcode-gas-costs/blob/master/opcode-gas-costs_EIP-150_revision-1e18248_2017-04-12.csv)
-   [Goerli Smart Contract](https://goerli.etherscan.io/address/0x45ab257a900C9c4bDC0185d64eC4D7C455a2756e#code)
