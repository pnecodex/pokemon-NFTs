const NFTMypokes = artifacts.require("NFTMypokes");

module.exports = async function (deployer) {
  deployer.deploy(NFTMypokes);
};
