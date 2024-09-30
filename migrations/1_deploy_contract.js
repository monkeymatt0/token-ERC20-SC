const MonkeyToken = artifacts.require("MonkeyToken");

module.exports = function (deployer) {
  deployer.deploy(MonkeyToken, 1000);
};
