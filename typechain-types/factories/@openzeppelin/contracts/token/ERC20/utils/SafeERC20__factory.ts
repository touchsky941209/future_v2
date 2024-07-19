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
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  SafeERC20,
  SafeERC20Interface,
} from "../../../../../../@openzeppelin/contracts/token/ERC20/utils/SafeERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentAllowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestedDecrease",
        type: "uint256",
      },
    ],
    name: "SafeERC20FailedDecreaseAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea264697066735822122078bf29030d5e743ebfc8a7eac168bf98679633dccf0bdd442ed3b456f3f00d1964736f6c63430008170033";

type SafeERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeERC20__factory extends ContractFactory {
  constructor(...args: SafeERC20ConstructorParams) {
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
      SafeERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SafeERC20__factory {
    return super.connect(runner) as SafeERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeERC20Interface {
    return new Interface(_abi) as SafeERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): SafeERC20 {
    return new Contract(address, _abi, runner) as unknown as SafeERC20;
  }
}
