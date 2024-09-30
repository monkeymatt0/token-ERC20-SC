const MonkeyToken = artifacts.require("MonkeyToken");

contract("MonkeyToken", (accounts) => {
  it("should put 1000 MonkeyToken in the first account", async () => {
    const instance = await MonkeyToken.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.valueOf(), 1000, "1000 wasn't in the first account");
  });

  it("should transfer tokens correctly", async () => {
    const instance = await MonkeyToken.deployed();
    await instance.transfer(accounts[1], 100);
    const balance = await instance.balanceOf(accounts[1]);
    assert.equal(
      balance.valueOf(),
      100,
      "100 wasn't transferred to the second account"
    );
  });
});
