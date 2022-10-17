import { assert } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("SimpleStorage", () => {
    let SimpleStorageFactory: SimpleStorage__factory;
    let simpleStorage: SimpleStorage;

    beforeEach(async () => {
        SimpleStorageFactory = (await ethers.getContractFactory(
            "SimpleStorage"
        )) as SimpleStorage__factory;
        simpleStorage = await SimpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        assert.equal(currentValue.toString(), expectedValue);
    });
    it("Should update when we call store", async () => {
        const expectedValue = "7";
        const txResponse = await simpleStorage.store(expectedValue);
        await txResponse.wait(1);
        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue);
    });

    it("Should add a new Person with a favorite number", async () => {
        const expectedValue = "5";
        const expectedName = "Nico";
        const txResponse = await simpleStorage.addPerson(
            expectedName,
            expectedValue
        );
        await txResponse.wait(1);
        const [bgFavoriteNumber, name] = await simpleStorage.people(0);
        assert.equal(bgFavoriteNumber.toString(), expectedValue);
        assert.equal(name, expectedName);
    });
});
