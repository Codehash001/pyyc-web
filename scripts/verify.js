require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')


const _initBaseURI='ipfs://QmYG397NbS5FLxNbo2oavBSSid5MwJ6jXidxpDgQgDdJL9/'

async function main() {

  await hre.run('verify:verify', {
    address: '0xaC8cB0A8642a9cb8461DD74C3799c4865Db39348',
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })