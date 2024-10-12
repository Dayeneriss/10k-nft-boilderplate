const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("NFTModule", (m) => {

  const nft = m.contract("CoreNFT", ["https://github.com/Dayeneriss/nft-image-generator/tree/master/generated_images"]);
  //https://github.com/Dayeneriss/nft-image-generator/tree/master/generated_images
  return { nft };
});
