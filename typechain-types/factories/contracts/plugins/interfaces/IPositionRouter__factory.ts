/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPositionRouter,
  IPositionRouterInterface,
} from "../../../../contracts/plugins/interfaces/IPositionRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expiredAt",
        type: "uint256",
      },
    ],
    name: "Expired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
    ],
    name: "InsufficientExecutionFee",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
    ],
    name: "InvalidExecutionFee",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "margin",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "acceptableMinMargin",
        type: "uint128",
      },
    ],
    name: "InvalidMargin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "tradePriceX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "acceptableTradePriceX96",
        type: "uint160",
      },
    ],
    name: "InvalidTradePrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "LiquidityNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
    ],
    name: "PositionNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "earliest",
        type: "uint256",
      },
    ],
    name: "TooEarly",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "DecreaseLiquidityPositionCancelled",
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
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "acceptableMinMargin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    name: "DecreaseLiquidityPositionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "DecreaseLiquidityPositionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "DecreasePositionCancelled",
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
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "sizeDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "acceptableTradePriceX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    name: "DecreasePositionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "DecreasePositionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "minBlockDelayExecutor",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "minTimeDelayPublic",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "maxTimeDelay",
        type: "uint32",
      },
    ],
    name: "DelayValuesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum IPositionRouter.RequestType",
        name: "reqType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "shortenedReason",
        type: "bytes4",
      },
    ],
    name: "ExecuteFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "IncreaseLiquidityPositionCancelled",
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
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "acceptableMinMargin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    name: "IncreaseLiquidityPositionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "IncreaseLiquidityPositionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "IncreasePositionCancelled",
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
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "sizeDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "acceptableTradePriceX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    name: "IncreasePositionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "IncreasePositionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minExecutionFee",
        type: "uint256",
      },
    ],
    name: "MinExecutionFeeUpdated",
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
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "PositionExecutorUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "cancelDecreaseLiquidityPosition",
    outputs: [
      {
        internalType: "bool",
        name: "cancelled",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "cancelDecreasePosition",
    outputs: [
      {
        internalType: "bool",
        name: "cancelled",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "cancelIncreaseLiquidityPosition",
    outputs: [
      {
        internalType: "bool",
        name: "cancelled",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "cancelIncreasePosition",
    outputs: [
      {
        internalType: "bool",
        name: "cancelled",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor[]",
        name: "markets",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "createCloseLiquidityPositionsBatch",
    outputs: [
      {
        internalType: "uint128[]",
        name: "indices",
        type: "uint128[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IMarketDescriptor",
            name: "market",
            type: "address",
          },
          {
            internalType: "Side",
            name: "side",
            type: "uint8",
          },
        ],
        internalType: "struct IPositionRouter.ClosePositionParameter[]",
        name: "parameters",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "createClosePositionsBatch",
    outputs: [
      {
        internalType: "uint128[]",
        name: "indices",
        type: "uint128[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidityDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "acceptableMinMargin",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "createDecreaseLiquidityPosition",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "sizeDelta",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "acceptableTradePriceX96",
        type: "uint160",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "createDecreasePosition",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidityDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "acceptableMinMargin",
        type: "uint128",
      },
    ],
    name: "createIncreaseLiquidityPosition",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "sizeDelta",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "acceptableTradePriceX96",
        type: "uint160",
      },
    ],
    name: "createIncreasePosition",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "liquidityDelta",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "executeDecreaseLiquidationFundPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeDecreaseLiquidityPosition",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "endIndex",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeDecreaseLiquidityPositions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeDecreasePosition",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "endIndex",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeDecreasePositions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "liquidityDelta",
        type: "uint128",
      },
    ],
    name: "executeIncreaseLiquidationFundPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeIncreaseLiquidityPosition",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "endIndex",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeIncreaseLiquidityPositions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeIncreasePosition",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "endIndex",
        type: "uint128",
      },
      {
        internalType: "address payable",
        name: "executionFeeReceiver",
        type: "address",
      },
    ],
    name: "executeIncreasePositions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "minBlockDelayExecutor",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "minTimeDelayPublic",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "maxTimeDelay",
        type: "uint32",
      },
    ],
    name: "updateDelayValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "executionGasLimit",
        type: "uint160",
      },
    ],
    name: "updateExecutionGasLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minExecutionFee",
        type: "uint256",
      },
    ],
    name: "updateMinExecutionFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "updatePositionExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPositionRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IPositionRouterInterface {
    return new Interface(_abi) as IPositionRouterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPositionRouter {
    return new Contract(address, _abi, runner) as unknown as IPositionRouter;
  }
}
