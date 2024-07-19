/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface MixedExecutorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptGov"
      | "cancelOrderIfFailedStatus"
      | "changeGov"
      | "collectProtocolFeeBatch"
      | "executeDecreaseLiquidityPositions"
      | "executeDecreaseOrder"
      | "executeDecreasePositions"
      | "executeIncreaseLiquidityPositions"
      | "executeIncreaseOrder"
      | "executeIncreasePositions"
      | "executors"
      | "feeReceiver"
      | "gov"
      | "liquidateLiquidityPosition"
      | "liquidatePosition"
      | "liquidator"
      | "marketIndexer"
      | "marketManager"
      | "multicall"
      | "orderBook"
      | "pendingGov"
      | "positionRouter"
      | "priceFeed"
      | "router"
      | "sampleAndAdjustFundingRateBatch"
      | "setCancelOrderIfFailedStatus"
      | "setExecutor"
      | "setFeeReceiver"
      | "setPriceX96s"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangeGovStarted"
      | "DecreaseOrderCancelFailed"
      | "DecreaseOrderCancelSucceeded"
      | "DecreaseOrderExecuteFailed"
      | "ExecutorUpdated"
      | "GovChanged"
      | "IncreaseOrderCancelFailed"
      | "IncreaseOrderCancelSucceeded"
      | "IncreaseOrderExecuteFailed"
      | "LiquidateLiquidityPositionFailed"
      | "LiquidatePositionFailed"
  ): EventFragment;

  encodeFunctionData(functionFragment: "acceptGov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelOrderIfFailedStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeGov",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectProtocolFeeBatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreaseLiquidityPositions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreaseOrder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreasePositions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreaseLiquidityPositions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreaseOrder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreasePositions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executors",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "feeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidateLiquidityPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketIndexer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "orderBook", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGov",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sampleAndAdjustFundingRateBatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCancelOrderIfFailedStatus",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecutor",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeReceiver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceX96s",
    values: [BigNumberish[], BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "acceptGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrderIfFailedStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "changeGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectProtocolFeeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreaseLiquidityPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreasePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreaseLiquidityPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreasePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidateLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketIndexer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderBook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sampleAndAdjustFundingRateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCancelOrderIfFailedStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceX96s",
    data: BytesLike
  ): Result;
}

export namespace ChangeGovStartedEvent {
  export type InputTuple = [previousGov: AddressLike, newGov: AddressLike];
  export type OutputTuple = [previousGov: string, newGov: string];
  export interface OutputObject {
    previousGov: string;
    newGov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DecreaseOrderCancelFailedEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    shortenedReason1: BytesLike,
    shortenedReason2: BytesLike
  ];
  export type OutputTuple = [
    orderIndex: bigint,
    shortenedReason1: string,
    shortenedReason2: string
  ];
  export interface OutputObject {
    orderIndex: bigint;
    shortenedReason1: string;
    shortenedReason2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DecreaseOrderCancelSucceededEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    shortenedReason: BytesLike
  ];
  export type OutputTuple = [orderIndex: bigint, shortenedReason: string];
  export interface OutputObject {
    orderIndex: bigint;
    shortenedReason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DecreaseOrderExecuteFailedEvent {
  export type InputTuple = [orderIndex: BigNumberish];
  export type OutputTuple = [orderIndex: bigint];
  export interface OutputObject {
    orderIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutorUpdatedEvent {
  export type InputTuple = [executor: AddressLike, active: boolean];
  export type OutputTuple = [executor: string, active: boolean];
  export interface OutputObject {
    executor: string;
    active: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GovChangedEvent {
  export type InputTuple = [previousGov: AddressLike, newGov: AddressLike];
  export type OutputTuple = [previousGov: string, newGov: string];
  export interface OutputObject {
    previousGov: string;
    newGov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseOrderCancelFailedEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    shortenedReason1: BytesLike,
    shortenedReason2: BytesLike
  ];
  export type OutputTuple = [
    orderIndex: bigint,
    shortenedReason1: string,
    shortenedReason2: string
  ];
  export interface OutputObject {
    orderIndex: bigint;
    shortenedReason1: string;
    shortenedReason2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseOrderCancelSucceededEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    shortenedReason: BytesLike
  ];
  export type OutputTuple = [orderIndex: bigint, shortenedReason: string];
  export interface OutputObject {
    orderIndex: bigint;
    shortenedReason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseOrderExecuteFailedEvent {
  export type InputTuple = [orderIndex: BigNumberish];
  export type OutputTuple = [orderIndex: bigint];
  export interface OutputObject {
    orderIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidateLiquidityPositionFailedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    shortenedReason: BytesLike
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    shortenedReason: string
  ];
  export interface OutputObject {
    market: string;
    account: string;
    shortenedReason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidatePositionFailedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    side: BigNumberish,
    shortenedReason: BytesLike
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    side: bigint,
    shortenedReason: string
  ];
  export interface OutputObject {
    market: string;
    account: string;
    side: bigint;
    shortenedReason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MixedExecutor extends BaseContract {
  connect(runner?: ContractRunner | null): MixedExecutor;
  waitForDeployment(): Promise<this>;

  interface: MixedExecutorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptGov: TypedContractMethod<[], [void], "nonpayable">;

  cancelOrderIfFailedStatus: TypedContractMethod<[], [boolean], "view">;

  changeGov: TypedContractMethod<[_newGov: AddressLike], [void], "nonpayable">;

  collectProtocolFeeBatch: TypedContractMethod<
    [_packedValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeDecreaseLiquidityPositions: TypedContractMethod<
    [_endIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeDecreaseOrder: TypedContractMethod<
    [_packedValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeDecreasePositions: TypedContractMethod<
    [_endIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeIncreaseLiquidityPositions: TypedContractMethod<
    [_endIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeIncreaseOrder: TypedContractMethod<
    [_packedValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeIncreasePositions: TypedContractMethod<
    [_endIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  executors: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  feeReceiver: TypedContractMethod<[], [string], "view">;

  gov: TypedContractMethod<[], [string], "view">;

  liquidateLiquidityPosition: TypedContractMethod<
    [_packedValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  liquidatePosition: TypedContractMethod<
    [_packedValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  liquidator: TypedContractMethod<[], [string], "view">;

  marketIndexer: TypedContractMethod<[], [string], "view">;

  marketManager: TypedContractMethod<[], [string], "view">;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  orderBook: TypedContractMethod<[], [string], "view">;

  pendingGov: TypedContractMethod<[], [string], "view">;

  positionRouter: TypedContractMethod<[], [string], "view">;

  priceFeed: TypedContractMethod<[], [string], "view">;

  router: TypedContractMethod<[], [string], "view">;

  sampleAndAdjustFundingRateBatch: TypedContractMethod<
    [_packedValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCancelOrderIfFailedStatus: TypedContractMethod<
    [_cancelOrderIfFailedStatus: boolean],
    [void],
    "nonpayable"
  >;

  setExecutor: TypedContractMethod<
    [_executor: AddressLike, _active: boolean],
    [void],
    "nonpayable"
  >;

  setFeeReceiver: TypedContractMethod<
    [_receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  setPriceX96s: TypedContractMethod<
    [_packedValues: BigNumberish[], _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptGov"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cancelOrderIfFailedStatus"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "changeGov"
  ): TypedContractMethod<[_newGov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "collectProtocolFeeBatch"
  ): TypedContractMethod<[_packedValue: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executeDecreaseLiquidityPositions"
  ): TypedContractMethod<[_endIndex: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executeDecreaseOrder"
  ): TypedContractMethod<[_packedValue: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executeDecreasePositions"
  ): TypedContractMethod<[_endIndex: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executeIncreaseLiquidityPositions"
  ): TypedContractMethod<[_endIndex: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executeIncreaseOrder"
  ): TypedContractMethod<[_packedValue: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executeIncreasePositions"
  ): TypedContractMethod<[_endIndex: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executors"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "feeReceiver"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "liquidateLiquidityPosition"
  ): TypedContractMethod<[_packedValue: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "liquidatePosition"
  ): TypedContractMethod<[_packedValue: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "liquidator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "marketIndexer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "marketManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "orderBook"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingGov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "positionRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "priceFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sampleAndAdjustFundingRateBatch"
  ): TypedContractMethod<[_packedValue: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCancelOrderIfFailedStatus"
  ): TypedContractMethod<
    [_cancelOrderIfFailedStatus: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setExecutor"
  ): TypedContractMethod<
    [_executor: AddressLike, _active: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFeeReceiver"
  ): TypedContractMethod<[_receiver: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPriceX96s"
  ): TypedContractMethod<
    [_packedValues: BigNumberish[], _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ChangeGovStarted"
  ): TypedContractEvent<
    ChangeGovStartedEvent.InputTuple,
    ChangeGovStartedEvent.OutputTuple,
    ChangeGovStartedEvent.OutputObject
  >;
  getEvent(
    key: "DecreaseOrderCancelFailed"
  ): TypedContractEvent<
    DecreaseOrderCancelFailedEvent.InputTuple,
    DecreaseOrderCancelFailedEvent.OutputTuple,
    DecreaseOrderCancelFailedEvent.OutputObject
  >;
  getEvent(
    key: "DecreaseOrderCancelSucceeded"
  ): TypedContractEvent<
    DecreaseOrderCancelSucceededEvent.InputTuple,
    DecreaseOrderCancelSucceededEvent.OutputTuple,
    DecreaseOrderCancelSucceededEvent.OutputObject
  >;
  getEvent(
    key: "DecreaseOrderExecuteFailed"
  ): TypedContractEvent<
    DecreaseOrderExecuteFailedEvent.InputTuple,
    DecreaseOrderExecuteFailedEvent.OutputTuple,
    DecreaseOrderExecuteFailedEvent.OutputObject
  >;
  getEvent(
    key: "ExecutorUpdated"
  ): TypedContractEvent<
    ExecutorUpdatedEvent.InputTuple,
    ExecutorUpdatedEvent.OutputTuple,
    ExecutorUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "GovChanged"
  ): TypedContractEvent<
    GovChangedEvent.InputTuple,
    GovChangedEvent.OutputTuple,
    GovChangedEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseOrderCancelFailed"
  ): TypedContractEvent<
    IncreaseOrderCancelFailedEvent.InputTuple,
    IncreaseOrderCancelFailedEvent.OutputTuple,
    IncreaseOrderCancelFailedEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseOrderCancelSucceeded"
  ): TypedContractEvent<
    IncreaseOrderCancelSucceededEvent.InputTuple,
    IncreaseOrderCancelSucceededEvent.OutputTuple,
    IncreaseOrderCancelSucceededEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseOrderExecuteFailed"
  ): TypedContractEvent<
    IncreaseOrderExecuteFailedEvent.InputTuple,
    IncreaseOrderExecuteFailedEvent.OutputTuple,
    IncreaseOrderExecuteFailedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidateLiquidityPositionFailed"
  ): TypedContractEvent<
    LiquidateLiquidityPositionFailedEvent.InputTuple,
    LiquidateLiquidityPositionFailedEvent.OutputTuple,
    LiquidateLiquidityPositionFailedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidatePositionFailed"
  ): TypedContractEvent<
    LiquidatePositionFailedEvent.InputTuple,
    LiquidatePositionFailedEvent.OutputTuple,
    LiquidatePositionFailedEvent.OutputObject
  >;

  filters: {
    "ChangeGovStarted(address,address)": TypedContractEvent<
      ChangeGovStartedEvent.InputTuple,
      ChangeGovStartedEvent.OutputTuple,
      ChangeGovStartedEvent.OutputObject
    >;
    ChangeGovStarted: TypedContractEvent<
      ChangeGovStartedEvent.InputTuple,
      ChangeGovStartedEvent.OutputTuple,
      ChangeGovStartedEvent.OutputObject
    >;

    "DecreaseOrderCancelFailed(uint256,bytes4,bytes4)": TypedContractEvent<
      DecreaseOrderCancelFailedEvent.InputTuple,
      DecreaseOrderCancelFailedEvent.OutputTuple,
      DecreaseOrderCancelFailedEvent.OutputObject
    >;
    DecreaseOrderCancelFailed: TypedContractEvent<
      DecreaseOrderCancelFailedEvent.InputTuple,
      DecreaseOrderCancelFailedEvent.OutputTuple,
      DecreaseOrderCancelFailedEvent.OutputObject
    >;

    "DecreaseOrderCancelSucceeded(uint256,bytes4)": TypedContractEvent<
      DecreaseOrderCancelSucceededEvent.InputTuple,
      DecreaseOrderCancelSucceededEvent.OutputTuple,
      DecreaseOrderCancelSucceededEvent.OutputObject
    >;
    DecreaseOrderCancelSucceeded: TypedContractEvent<
      DecreaseOrderCancelSucceededEvent.InputTuple,
      DecreaseOrderCancelSucceededEvent.OutputTuple,
      DecreaseOrderCancelSucceededEvent.OutputObject
    >;

    "DecreaseOrderExecuteFailed(uint256)": TypedContractEvent<
      DecreaseOrderExecuteFailedEvent.InputTuple,
      DecreaseOrderExecuteFailedEvent.OutputTuple,
      DecreaseOrderExecuteFailedEvent.OutputObject
    >;
    DecreaseOrderExecuteFailed: TypedContractEvent<
      DecreaseOrderExecuteFailedEvent.InputTuple,
      DecreaseOrderExecuteFailedEvent.OutputTuple,
      DecreaseOrderExecuteFailedEvent.OutputObject
    >;

    "ExecutorUpdated(address,bool)": TypedContractEvent<
      ExecutorUpdatedEvent.InputTuple,
      ExecutorUpdatedEvent.OutputTuple,
      ExecutorUpdatedEvent.OutputObject
    >;
    ExecutorUpdated: TypedContractEvent<
      ExecutorUpdatedEvent.InputTuple,
      ExecutorUpdatedEvent.OutputTuple,
      ExecutorUpdatedEvent.OutputObject
    >;

    "GovChanged(address,address)": TypedContractEvent<
      GovChangedEvent.InputTuple,
      GovChangedEvent.OutputTuple,
      GovChangedEvent.OutputObject
    >;
    GovChanged: TypedContractEvent<
      GovChangedEvent.InputTuple,
      GovChangedEvent.OutputTuple,
      GovChangedEvent.OutputObject
    >;

    "IncreaseOrderCancelFailed(uint256,bytes4,bytes4)": TypedContractEvent<
      IncreaseOrderCancelFailedEvent.InputTuple,
      IncreaseOrderCancelFailedEvent.OutputTuple,
      IncreaseOrderCancelFailedEvent.OutputObject
    >;
    IncreaseOrderCancelFailed: TypedContractEvent<
      IncreaseOrderCancelFailedEvent.InputTuple,
      IncreaseOrderCancelFailedEvent.OutputTuple,
      IncreaseOrderCancelFailedEvent.OutputObject
    >;

    "IncreaseOrderCancelSucceeded(uint256,bytes4)": TypedContractEvent<
      IncreaseOrderCancelSucceededEvent.InputTuple,
      IncreaseOrderCancelSucceededEvent.OutputTuple,
      IncreaseOrderCancelSucceededEvent.OutputObject
    >;
    IncreaseOrderCancelSucceeded: TypedContractEvent<
      IncreaseOrderCancelSucceededEvent.InputTuple,
      IncreaseOrderCancelSucceededEvent.OutputTuple,
      IncreaseOrderCancelSucceededEvent.OutputObject
    >;

    "IncreaseOrderExecuteFailed(uint256)": TypedContractEvent<
      IncreaseOrderExecuteFailedEvent.InputTuple,
      IncreaseOrderExecuteFailedEvent.OutputTuple,
      IncreaseOrderExecuteFailedEvent.OutputObject
    >;
    IncreaseOrderExecuteFailed: TypedContractEvent<
      IncreaseOrderExecuteFailedEvent.InputTuple,
      IncreaseOrderExecuteFailedEvent.OutputTuple,
      IncreaseOrderExecuteFailedEvent.OutputObject
    >;

    "LiquidateLiquidityPositionFailed(address,address,bytes4)": TypedContractEvent<
      LiquidateLiquidityPositionFailedEvent.InputTuple,
      LiquidateLiquidityPositionFailedEvent.OutputTuple,
      LiquidateLiquidityPositionFailedEvent.OutputObject
    >;
    LiquidateLiquidityPositionFailed: TypedContractEvent<
      LiquidateLiquidityPositionFailedEvent.InputTuple,
      LiquidateLiquidityPositionFailedEvent.OutputTuple,
      LiquidateLiquidityPositionFailedEvent.OutputObject
    >;

    "LiquidatePositionFailed(address,address,uint8,bytes4)": TypedContractEvent<
      LiquidatePositionFailedEvent.InputTuple,
      LiquidatePositionFailedEvent.OutputTuple,
      LiquidatePositionFailedEvent.OutputObject
    >;
    LiquidatePositionFailed: TypedContractEvent<
      LiquidatePositionFailedEvent.InputTuple,
      LiquidatePositionFailedEvent.OutputTuple,
      LiquidatePositionFailedEvent.OutputObject
    >;
  };
}