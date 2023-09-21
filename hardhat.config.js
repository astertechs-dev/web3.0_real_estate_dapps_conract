require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
/* 
 * Note: Please note that in this repository, the smart contract is deployed on the "Polygon Mumbai" network.
 *       Therefore, the file configuration is set to values assuming "Polygon Mumbai". 
 *       For details on the configuration method, please refer to the following URL.
 *       - https://www.youtube.com/watch?v=GY0qBXjqGlw&t=295s
 *       - https://www.coincarp.com/ja/chainlist/mumbai/
 *       - https://note.com/yutakikuchi/n/n2da9d00772fe
 */
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = 'https://rpc.ankr.com/polygon_mumbai'
module.exports = {
  defaultNetwork: "polygon_mumbai",
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
