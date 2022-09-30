- [BNB FAUCET](https://testnet.binance.org/faucet-smart)

## Fund Me Lesson

- Get Funds from users
- Withdraw funds
- Set a minimum funding value in US

# Notes

- Require have the first parameter as a condition and second is the error to show. if the tx is reverted (failed) it will undo everything from that function
- 1e18 = 1 \* 10 \*\* 18 = 1000000000000000000
- To avoid using interface and make the code longer, we could use imports
- for(starting index,ending index, step amount)
- transfer / send / call are different way to send

# Contract Fund Me on BNB Testnet

- 0x0229f82dA1DFfa2c785B2be6de44a26197315bE7

# Chainlink

- [Chainlink data feeds](https://docs.chain.link/docs/data-feeds/) - Provide real data from the world like prices
- [Chainlink random number](https://docs.chain.link/docs/vrf/v2/introduction/) - Provide random number that nobody could figure it out

# Libraries

Libraries in solidity are similar to contracts that contain reusable codes. A library has functions that can be called by other contracts. Deploying a common code by creating a library reduces the gas cost. Functions of the library can be called directly when they do not modify the state variables i.e. only pure and view functions can be called from outside of the library. It cannot be destroyed because it is assumed as stateless. The library does not have state variables, it cannot inherit any element and cannot be inherited.

# Sending Ether

- Transfer set a 2300 gas by default and throw an error
- Send set a 2300 gas and return a boolean

# Funds Ether V2

- [FundV2 Contract](https://testnet.bscscan.com/address/0x79CE705639FACEa0c647C37c539BE0ff275716F9)
