/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMultiMinter,
  IMultiMinterInterface,
} from "../../../contracts/IEquationContractsV1Minimum.sol/IMultiMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMultiMinter__factory {
  static readonly abi = _abi;
  static createInterface(): IMultiMinterInterface {
    return new Interface(_abi) as IMultiMinterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMultiMinter {
    return new Contract(address, _abi, runner) as unknown as IMultiMinter;
  }
}