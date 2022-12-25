var ConvertLib = artifacts.require("./ConvertLib.sol");
var MyToken = artifacts.require("./MyToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MyToken);
  deployer.deploy(MyToken);
};
