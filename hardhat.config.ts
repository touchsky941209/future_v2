import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "dotenv/config";
import "hardhat-contract-sizer";
import { HardhatUserConfig } from "hardhat/config";

const accounts = [
    `${process.env.PRIVATE_KEY ?? "9".repeat(64)}`,
    `${process.env.CONTRACTS_V1_PRIVATE_KEY ?? "9".repeat(64)}`,
];

const config: HardhatUserConfig = {
    mocha: {
        timeout: 400000,
    },

    solidity: {
        compilers: [
            {
                version: "0.8.23",
                settings: {
                    evmVersion: "paris",
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 1e8,
                    },
                },
            },
        ],
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
        },
        "arbitrum-sepolia": {
            url: "https://sepolia-rollup.arbitrum.io/rpc",
            chainId: 421614,
            accounts: accounts,
        },
        "arbitrum-mainnet": {
            url: "https://rpc.arb1.arbitrum.gateway.fm",
            chainId: 42161,
            accounts: accounts,
        },
        "chiado": {
            url: "https://rpc.chiadochain.net",
            chainId: 10200,
            accounts: accounts
        },
        "b2testnet": {
            url: "https://b2-testnet.alt.technology",
            chainId: 1123,
            accounts: [`${process.env.PRIVATE_KEY}`],
            gasPrice: 1000000000, // 1 Gwei
            gasMultiplier: 2
        },
        "ailayertestnet": {
            url: "https://testnet-rpc.ailayer.xyz",
            chainId: 2648,
            accounts: [`${process.env.PRIVATE_KEY}`],
            gasPrice: 1000000000, // 1 Gwei
            gasMultiplier: 2
        },
        "bevmtestnet": {
            url: "https://testnet.bevm.io",
            chainId: 11503,
            accounts: [`${process.env.PRIVATE_KEY}`],
            gasPrice: 1000000000, // 1 Gwei
            gasMultiplier: 2
        },

    },
    etherscan: {
        apiKey: {
            arbitrumGoerli: `${process.env.ARBISCAN_API_KEY}`,
            arbitrumOne: `${process.env.ARBISCAN_API_KEY}`,
            b2testnet: `${process.env.B2TEST_NET_API_KEY}`,
            ailayertestnet: `${process.env.AILAYERTEST_NET_API_KEY}`,
            bevmtestnet: `${process.env.BEVMTEST_NET_API_KEY}`
        },
        customChains: [
            {
                network: "b2testnet",
                chainId: 1123,
                urls: {
                    apiURL: "https://bsquared-testnet.l2scan.co/api",
                    browserURL: "https://bsquared-testnet.l2scan.co/"
                },
            },
            {
                network: "ailayertestnet",
                chainId: 2648,
                urls: {
                    apiURL: "https://testnet-explorer.ailayer.xyz/api",
                    browserURL: "https://testnet-explorer.ailayer.xyz/"
                },
            },
            {
                network: "bevmtestnet",
                chainId: 11503,
                urls: {
                    apiURL: "https://scan-testnet-api.bevm.io/api",
                    browserURL: "https://scan-testnet.bevm.io/"
                },
            },
        ],
    },
    sourcify: {
        enabled: false,
    },
};

export default config;
