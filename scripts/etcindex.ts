import { ethers, hardhatArguments } from "hardhat";
import { networks } from "./networks";
import { getContractAddress, getCreate2Address } from "@ethersproject/address";
import { keccak256 } from "@ethersproject/keccak256";
import { encodePacked } from "web3-utils";

async function main() {
    const network = networks[hardhatArguments.network as keyof typeof networks];
    if (network == undefined) {
        throw new Error(`network ${hardhatArguments.network} is not defined`);
    }

    // const routerAddr = "0x8C37248c8409432dC9e7cC4DeCabE74B2f2A761D"  // AILayer test net
    // const marketManagerAddr = "0x6ab3213117A7DdB46C57D99Cd7909292D30C1F72"   // AILayer test net


    const routerAddr = "0xB7D989FA95988eF5fA9FD5cca3E3355D57D7cB17"  // b2 test net
    const marketManagerAddr = "0x2c9Cd717C31e0f7D0c5a6852120a42Fe039Ab8Fc"   // b2 test net
    const usd = "0xf44Fad0121c698882CA90C2673b22F391FBE872f"

    const PositionRouter = await ethers.getContractFactory("PositionRouter");
    const positionRouter = await PositionRouter.deploy(
        usd,
        routerAddr,
        marketManagerAddr,
        network.minPositionRouterExecutionFee,
    );
    await positionRouter.waitForDeployment();
    console.log(`PositionRouter deployed to: ${await positionRouter.getAddress()}`);


    const OrderBook = await ethers.getContractFactory("OrderBook");
    const orderBook = await OrderBook.deploy(
        usd,
        routerAddr,
        marketManagerAddr,
        network.minOrderBookExecutionFee,
    );
    await orderBook.waitForDeployment();
    console.log(`OrderBook deployed to: ${await orderBook.getAddress()}`);
}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
