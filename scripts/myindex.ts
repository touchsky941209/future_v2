import {ethers, hardhatArguments} from "hardhat";
import {networks} from "./networks";
import {getContractAddress, getCreate2Address} from "@ethersproject/address";
import {keccak256} from "@ethersproject/keccak256";
import {encodePacked} from "web3-utils";

async function main() {
    const network = networks[hardhatArguments.network as keyof typeof networks];
    if (network == undefined) {
        throw new Error(`network ${hardhatArguments.network} is not defined`);
    }

    const deployments = new Map<string, string | {name: string; index: number; market: string}[]>();
    const [deployer] = await ethers.getSigners();
    let nonce = await deployer.getNonce();
    console.log(`deployer address: ${deployer.address}, nonce: ${nonce}`);

    // plugin addresses
    const routerAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    const orderBookAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    const positionRouterAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    // price feed address
    const priceFeedAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    // market manager address
    const marketDescriptorDeployerAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    const marketIndexerAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    const marketManagerAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    // mixed executor address
    const mixedExecutorAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    // executor assistant address
    const executorAssistantAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    // liquidator address
    const liquidatorAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    // farm reward distributor address
    const farmRewardDistributorAddr = getContractAddress({from: deployer.address, nonce: nonce++});
    // farm reward collector address
    const rewardCollectorAddr = getContractAddress({from: deployer.address, nonce: nonce++});

    deployments.set("Router", routerAddr);
    deployments.set("OrderBook", orderBookAddr);
    deployments.set("PositionRouter", positionRouterAddr);
    deployments.set("Liquidator", liquidatorAddr);
    deployments.set("PriceFeed", priceFeedAddr);
    deployments.set("MarketDescriptorDeployer", marketDescriptorDeployerAddr);
    deployments.set("MarketIndexer", marketIndexerAddr);
    deployments.set("MarketManager", marketManagerAddr);
    deployments.set("MixedExecutor", mixedExecutorAddr);
    deployments.set("ExecutorAssistant", executorAssistantAddr);
    deployments.set("FarmRewardDistributor", farmRewardDistributorAddr);
    deployments.set("RewardCollector", rewardCollectorAddr);

    // deploy plugins
    // deploy farm reward distributor
    const FarmRewardDistributor = await ethers.getContractFactory("FarmRewardDistributor");
    console.log("Farm Address =>>>>", network.farmRewardDistributorV2)
    console.log("Market Indexer Address =>>>>", marketIndexerAddr)
    const farmRewardDistributor = await FarmRewardDistributor.deploy(
        network.farmRewardDistributorV2,
        marketIndexerAddr,
    );
    console.log("Deploying")
    await farmRewardDistributor.waitForDeployment();
    expectAddr(await farmRewardDistributor.getAddress(), farmRewardDistributorAddr);
    console.log(`FarmRewardDistributor deployed to: ${await farmRewardDistributor.getAddress()}`);









    // // deploy reward collector
    // const RewardCollector = await ethers.getContractFactory("RewardCollector");
    // const rewardCollector = await RewardCollector.deploy(
    //     routerAddr,
    //     network.routerV1,
    //     farmRewardDistributorAddr,
    //     network.farmRewardDistributorV2,
    // );
    // await rewardCollector.waitForDeployment();
    // expectAddr(await rewardCollector.getAddress(), rewardCollectorAddr);
    // console.log(`RewardCollector deployed to: ${await rewardCollector.getAddress()}`);










    // const MarketDescriptor = await ethers.getContractFactory("MarketDescriptor");
    // const marketDescriptorInitCodeHash = keccak256(MarketDescriptor.bytecode);
    
    // const [contractsV2Gov, contractsV1Gov] = await ethers.getSigners();

    // // initialize farm reward distributor
    // const multiMinter = await ethers.getContractAt("IMultiMinter", network.equ);
    // await multiMinter.connect(contractsV1Gov).setMinter(farmRewardDistributorAddr, true);
    // console.log("Initialize farm reward distributor finished");







    // // initialize reward collector
    // await farmRewardDistributor.setCollector(rewardCollectorAddr, true);
    // const routerV1 = await ethers.getContractAt("PluginManager", network.routerV1);
    // await routerV1.connect(contractsV1Gov).registerPlugin(rewardCollectorAddr);
    // const farmRewardDistributorV2 = await ethers.getContractAt(
    //     "FarmRewardDistributor",
    //     network.farmRewardDistributorV2,
    // );
    // await farmRewardDistributorV2.connect(contractsV1Gov).setCollector(rewardCollector, true);
    // console.log("Initialize reward collector finished");

}

function expectAddr(actual: string, expected: string) {
    if (actual != expected) {
        throw new Error(`actual address ${actual} is not equal to expected address ${expected}`);
    }
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
