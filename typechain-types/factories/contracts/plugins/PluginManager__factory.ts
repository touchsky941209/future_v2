/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  PluginManager,
  PluginManagerInterface,
} from "../../../contracts/plugins/PluginManager";

const _abi = [
  {
    inputs: [],
    name: "Forbidden",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "LiquidatorAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "LiquidatorNotRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginAlreadyApproved",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginNotApproved",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginNotRegistered",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGov",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGov",
        type: "address",
      },
    ],
    name: "ChangeGovStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGov",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGov",
        type: "address",
      },
    ],
    name: "GovChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "LiquidatorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "LiquidatorUnregistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PluginUnregistered",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_plugin",
        type: "address",
      },
    ],
    name: "approvePlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGov",
        type: "address",
      },
    ],
    name: "changeGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_plugin",
        type: "address",
      },
    ],
    name: "isPluginApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidator",
        type: "address",
      },
    ],
    name: "isRegisteredLiquidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingGov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidator",
        type: "address",
      },
    ],
    name: "registerLiquidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_plugin",
        type: "address",
      },
    ],
    name: "registerPlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "plugin",
        type: "address",
      },
    ],
    name: "registeredPlugins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_plugin",
        type: "address",
      },
    ],
    name: "revokePlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidator",
        type: "address",
      },
    ],
    name: "unregisterLiquidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_plugin",
        type: "address",
      },
    ],
    name: "unregisterPlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PluginManager__factory {
  static readonly abi = _abi;
  static createInterface(): PluginManagerInterface {
    return new Interface(_abi) as PluginManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PluginManager {
    return new Contract(address, _abi, runner) as unknown as PluginManager;
  }
}
