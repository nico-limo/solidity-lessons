- [HARDHAT](https://hardhat.org/)

## Ether Simple Storage Hardhat

# Why use Hardhat to create and deploy a Smart Contract

- We can specific on the code what network is
- We can make it multichain
- Add Tests

# What is Hardhat

    Flexible JS based Development Enviroment to compile, deploy, test and debug EVM Smart Contracts

# Notes

- Yarn = NPX or NPM
- DefaultNetwork: Hardhat if u don't config the hardhat
- Check the block on goerli
- hardhat-gas-reporter will tell u how much gas cost and adding some config on hardhat.config you can know in USD.
- typechain is a pl;ugin that gave us the interface related to our deployed contract to know exactly what function or parameter use

```shell
yarn hardhat block-number --network goerli
```

# Contracts

- [Unverified Contract](https://goerli.etherscan.io/address/0x2DC2Af8B87B0Afd672725eda34A86a3B6Fb1adB4#code)
  To verify inside our code, we use the hardhat plugin from etherscan (only work with etherscan and his extension) and add it into hardhat.config
- [Verified Contract](https://goerli.etherscan.io/address/0x014B01529348d39f98AB30D7156d34EfAE8D8b5f#readContract)

# Commands

Coverage will bring you how much code did you test it and where you not.

```shell
yarn hardhat coverage
```

Run tests

```shell
yarn hardhat test
```

Remove artifacts

```shell
yarn hardhat clean
```
