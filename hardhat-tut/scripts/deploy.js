const { ethers } = require('hardhat');

async function main() {
  const whiteListcontract = await ethers.getContractFactory('Whitelist');

  const deployedWhiteListContract = await whiteListcontract.deploy(10);

  await deployedWhiteListContract.deployed();

  console.log('Adress: ', deployedWhiteListContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
