/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockFeeDistributor,
  MockFeeDistributorInterface,
} from "../../../contracts/test/MockFeeDistributor";

const _abi = [
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761010e908161001c8239f35b600080fdfe60806040526004361015601157600080fd5b6000803560e01c8063423c485a14606b5763b69ef8a814603057600080fd5b34606857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011260685760209054604051908152f35b80fd5b503460685760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126068578054600435810180911160ab57815580f35b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fdfea2646970667358221220f26cf2c68da92d40962db9871613113dbf51f66594841cf8ff101d22b575106a64736f6c63430008170033";

type MockFeeDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFeeDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFeeDistributor__factory extends ContractFactory {
  constructor(...args: MockFeeDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockFeeDistributor & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockFeeDistributor__factory {
    return super.connect(runner) as MockFeeDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFeeDistributorInterface {
    return new Interface(_abi) as MockFeeDistributorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockFeeDistributor {
    return new Contract(address, _abi, runner) as unknown as MockFeeDistributor;
  }
}
