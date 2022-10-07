const hre = require('hardhat')

const _initBaseURI='ipfs://QmYG397NbS5FLxNbo2oavBSSid5MwJ6jXidxpDgQgDdJL9/'

async function main() {

  // Deploy the contract
  const pepeY00tsYC = await hre.ethers.getContractFactory('PepeY00tsYC')
  const PepeY00tsYC = await pepeY00tsYC.deploy(
    _initBaseURI)
  await PepeY00tsYC.deployed()

  console.log('PepeY00tsYC deployed to:', PepeY00tsYC.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
