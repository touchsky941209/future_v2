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
} from "../../../common";

export interface IOrderBookInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cancelDecreaseOrder"
      | "cancelDecreaseOrdersBatch"
      | "cancelIncreaseOrder"
      | "cancelIncreaseOrdersBatch"
      | "cancelOrdersBatch"
      | "createDecreaseOrder"
      | "createIncreaseOrder"
      | "createTakeProfitAndStopLossOrders"
      | "executeDecreaseOrder"
      | "executeIncreaseOrder"
      | "updateDecreaseOrder"
      | "updateExecutionGasLimit"
      | "updateIncreaseOrder"
      | "updateMinExecutionFee"
      | "updateOrderExecutor"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DecreaseOrderCancelled"
      | "DecreaseOrderCreated"
      | "DecreaseOrderExecuted"
      | "DecreaseOrderUpdated"
      | "IncreaseOrderCancelled"
      | "IncreaseOrderCreated"
      | "IncreaseOrderExecuted"
      | "IncreaseOrderUpdated"
      | "MinExecutionFeeUpdated"
      | "OrderExecutorUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "cancelDecreaseOrder",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDecreaseOrdersBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelIncreaseOrder",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelIncreaseOrdersBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrdersBatch",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createDecreaseOrder",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createIncreaseOrder",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createTakeProfitAndStopLossOrders",
    values: [
      AddressLike,
      BigNumberish,
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreaseOrder",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreaseOrder",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDecreaseOrder",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateExecutionGasLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIncreaseOrder",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinExecutionFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOrderExecutor",
    values: [AddressLike, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDecreaseOrdersBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelIncreaseOrdersBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrdersBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTakeProfitAndStopLossOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateExecutionGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinExecutionFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOrderExecutor",
    data: BytesLike
  ): Result;
}

export namespace DecreaseOrderCancelledEvent {
  export type InputTuple = [orderIndex: BigNumberish, feeReceiver: AddressLike];
  export type OutputTuple = [orderIndex: bigint, feeReceiver: string];
  export interface OutputObject {
    orderIndex: bigint;
    feeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DecreaseOrderCreatedEvent {
  export type InputTuple = [
    account: AddressLike,
    market: AddressLike,
    side: BigNumberish,
    marginDelta: BigNumberish,
    sizeDelta: BigNumberish,
    triggerMarketPriceX96: BigNumberish,
    triggerAbove: boolean,
    acceptableTradePriceX96: BigNumberish,
    receiver: AddressLike,
    executionFee: BigNumberish,
    orderIndex: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    market: string,
    side: bigint,
    marginDelta: bigint,
    sizeDelta: bigint,
    triggerMarketPriceX96: bigint,
    triggerAbove: boolean,
    acceptableTradePriceX96: bigint,
    receiver: string,
    executionFee: bigint,
    orderIndex: bigint
  ];
  export interface OutputObject {
    account: string;
    market: string;
    side: bigint;
    marginDelta: bigint;
    sizeDelta: bigint;
    triggerMarketPriceX96: bigint;
    triggerAbove: boolean;
    acceptableTradePriceX96: bigint;
    receiver: string;
    executionFee: bigint;
    orderIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DecreaseOrderExecutedEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    marketPriceX96: BigNumberish,
    feeReceiver: AddressLike
  ];
  export type OutputTuple = [
    orderIndex: bigint,
    marketPriceX96: bigint,
    feeReceiver: string
  ];
  export interface OutputObject {
    orderIndex: bigint;
    marketPriceX96: bigint;
    feeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DecreaseOrderUpdatedEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    triggerMarketPriceX96: BigNumberish,
    acceptableTradePriceX96: BigNumberish
  ];
  export type OutputTuple = [
    orderIndex: bigint,
    triggerMarketPriceX96: bigint,
    acceptableTradePriceX96: bigint
  ];
  export interface OutputObject {
    orderIndex: bigint;
    triggerMarketPriceX96: bigint;
    acceptableTradePriceX96: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseOrderCancelledEvent {
  export type InputTuple = [orderIndex: BigNumberish, feeReceiver: AddressLike];
  export type OutputTuple = [orderIndex: bigint, feeReceiver: string];
  export interface OutputObject {
    orderIndex: bigint;
    feeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseOrderCreatedEvent {
  export type InputTuple = [
    account: AddressLike,
    market: AddressLike,
    side: BigNumberish,
    marginDelta: BigNumberish,
    sizeDelta: BigNumberish,
    triggerMarketPriceX96: BigNumberish,
    triggerAbove: boolean,
    acceptableTradePriceX96: BigNumberish,
    executionFee: BigNumberish,
    orderIndex: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    market: string,
    side: bigint,
    marginDelta: bigint,
    sizeDelta: bigint,
    triggerMarketPriceX96: bigint,
    triggerAbove: boolean,
    acceptableTradePriceX96: bigint,
    executionFee: bigint,
    orderIndex: bigint
  ];
  export interface OutputObject {
    account: string;
    market: string;
    side: bigint;
    marginDelta: bigint;
    sizeDelta: bigint;
    triggerMarketPriceX96: bigint;
    triggerAbove: boolean;
    acceptableTradePriceX96: bigint;
    executionFee: bigint;
    orderIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseOrderExecutedEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    marketPriceX96: BigNumberish,
    feeReceiver: AddressLike
  ];
  export type OutputTuple = [
    orderIndex: bigint,
    marketPriceX96: bigint,
    feeReceiver: string
  ];
  export interface OutputObject {
    orderIndex: bigint;
    marketPriceX96: bigint;
    feeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseOrderUpdatedEvent {
  export type InputTuple = [
    orderIndex: BigNumberish,
    triggerMarketPriceX96: BigNumberish,
    acceptableTradePriceX96: BigNumberish
  ];
  export type OutputTuple = [
    orderIndex: bigint,
    triggerMarketPriceX96: bigint,
    acceptableTradePriceX96: bigint
  ];
  export interface OutputObject {
    orderIndex: bigint;
    triggerMarketPriceX96: bigint;
    acceptableTradePriceX96: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinExecutionFeeUpdatedEvent {
  export type InputTuple = [minExecutionFee: BigNumberish];
  export type OutputTuple = [minExecutionFee: bigint];
  export interface OutputObject {
    minExecutionFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderExecutorUpdatedEvent {
  export type InputTuple = [account: AddressLike, active: boolean];
  export type OutputTuple = [account: string, active: boolean];
  export interface OutputObject {
    account: string;
    active: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IOrderBook extends BaseContract {
  connect(runner?: ContractRunner | null): IOrderBook;
  waitForDeployment(): Promise<this>;

  interface: IOrderBookInterface;

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

  cancelDecreaseOrder: TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  cancelDecreaseOrdersBatch: TypedContractMethod<
    [decreaseOrderIndexes: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  cancelIncreaseOrder: TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  cancelIncreaseOrdersBatch: TypedContractMethod<
    [increaseOrderIndexes: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  cancelOrdersBatch: TypedContractMethod<
    [
      increaseOrderIndexes: BigNumberish[],
      decreaseOrderIndexes: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  createDecreaseOrder: TypedContractMethod<
    [
      market: AddressLike,
      side: BigNumberish,
      marginDelta: BigNumberish,
      sizeDelta: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      triggerAbove: boolean,
      acceptableTradePriceX96: BigNumberish,
      receiver: AddressLike
    ],
    [bigint],
    "payable"
  >;

  createIncreaseOrder: TypedContractMethod<
    [
      market: AddressLike,
      side: BigNumberish,
      marginDelta: BigNumberish,
      sizeDelta: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      triggerAbove: boolean,
      acceptableTradePriceX96: BigNumberish
    ],
    [bigint],
    "payable"
  >;

  createTakeProfitAndStopLossOrders: TypedContractMethod<
    [
      market: AddressLike,
      side: BigNumberish,
      marginDeltas: [BigNumberish, BigNumberish],
      sizeDeltas: [BigNumberish, BigNumberish],
      triggerMarketPriceX96s: [BigNumberish, BigNumberish],
      acceptableTradePriceX96s: [BigNumberish, BigNumberish],
      receiver: AddressLike
    ],
    [void],
    "payable"
  >;

  executeDecreaseOrder: TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  executeIncreaseOrder: TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  updateDecreaseOrder: TypedContractMethod<
    [
      orderIndex: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      acceptableTradePriceX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateExecutionGasLimit: TypedContractMethod<
    [executionGasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateIncreaseOrder: TypedContractMethod<
    [
      orderIndex: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      acceptableTradePriceX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateMinExecutionFee: TypedContractMethod<
    [minExecutionFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateOrderExecutor: TypedContractMethod<
    [account: AddressLike, active: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cancelDecreaseOrder"
  ): TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelDecreaseOrdersBatch"
  ): TypedContractMethod<
    [decreaseOrderIndexes: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelIncreaseOrder"
  ): TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelIncreaseOrdersBatch"
  ): TypedContractMethod<
    [increaseOrderIndexes: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelOrdersBatch"
  ): TypedContractMethod<
    [
      increaseOrderIndexes: BigNumberish[],
      decreaseOrderIndexes: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createDecreaseOrder"
  ): TypedContractMethod<
    [
      market: AddressLike,
      side: BigNumberish,
      marginDelta: BigNumberish,
      sizeDelta: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      triggerAbove: boolean,
      acceptableTradePriceX96: BigNumberish,
      receiver: AddressLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createIncreaseOrder"
  ): TypedContractMethod<
    [
      market: AddressLike,
      side: BigNumberish,
      marginDelta: BigNumberish,
      sizeDelta: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      triggerAbove: boolean,
      acceptableTradePriceX96: BigNumberish
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createTakeProfitAndStopLossOrders"
  ): TypedContractMethod<
    [
      market: AddressLike,
      side: BigNumberish,
      marginDeltas: [BigNumberish, BigNumberish],
      sizeDeltas: [BigNumberish, BigNumberish],
      triggerMarketPriceX96s: [BigNumberish, BigNumberish],
      acceptableTradePriceX96s: [BigNumberish, BigNumberish],
      receiver: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeDecreaseOrder"
  ): TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeIncreaseOrder"
  ): TypedContractMethod<
    [orderIndex: BigNumberish, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateDecreaseOrder"
  ): TypedContractMethod<
    [
      orderIndex: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      acceptableTradePriceX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateExecutionGasLimit"
  ): TypedContractMethod<
    [executionGasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateIncreaseOrder"
  ): TypedContractMethod<
    [
      orderIndex: BigNumberish,
      triggerMarketPriceX96: BigNumberish,
      acceptableTradePriceX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateMinExecutionFee"
  ): TypedContractMethod<[minExecutionFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateOrderExecutor"
  ): TypedContractMethod<
    [account: AddressLike, active: boolean],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "DecreaseOrderCancelled"
  ): TypedContractEvent<
    DecreaseOrderCancelledEvent.InputTuple,
    DecreaseOrderCancelledEvent.OutputTuple,
    DecreaseOrderCancelledEvent.OutputObject
  >;
  getEvent(
    key: "DecreaseOrderCreated"
  ): TypedContractEvent<
    DecreaseOrderCreatedEvent.InputTuple,
    DecreaseOrderCreatedEvent.OutputTuple,
    DecreaseOrderCreatedEvent.OutputObject
  >;
  getEvent(
    key: "DecreaseOrderExecuted"
  ): TypedContractEvent<
    DecreaseOrderExecutedEvent.InputTuple,
    DecreaseOrderExecutedEvent.OutputTuple,
    DecreaseOrderExecutedEvent.OutputObject
  >;
  getEvent(
    key: "DecreaseOrderUpdated"
  ): TypedContractEvent<
    DecreaseOrderUpdatedEvent.InputTuple,
    DecreaseOrderUpdatedEvent.OutputTuple,
    DecreaseOrderUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseOrderCancelled"
  ): TypedContractEvent<
    IncreaseOrderCancelledEvent.InputTuple,
    IncreaseOrderCancelledEvent.OutputTuple,
    IncreaseOrderCancelledEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseOrderCreated"
  ): TypedContractEvent<
    IncreaseOrderCreatedEvent.InputTuple,
    IncreaseOrderCreatedEvent.OutputTuple,
    IncreaseOrderCreatedEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseOrderExecuted"
  ): TypedContractEvent<
    IncreaseOrderExecutedEvent.InputTuple,
    IncreaseOrderExecutedEvent.OutputTuple,
    IncreaseOrderExecutedEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseOrderUpdated"
  ): TypedContractEvent<
    IncreaseOrderUpdatedEvent.InputTuple,
    IncreaseOrderUpdatedEvent.OutputTuple,
    IncreaseOrderUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "MinExecutionFeeUpdated"
  ): TypedContractEvent<
    MinExecutionFeeUpdatedEvent.InputTuple,
    MinExecutionFeeUpdatedEvent.OutputTuple,
    MinExecutionFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OrderExecutorUpdated"
  ): TypedContractEvent<
    OrderExecutorUpdatedEvent.InputTuple,
    OrderExecutorUpdatedEvent.OutputTuple,
    OrderExecutorUpdatedEvent.OutputObject
  >;

  filters: {
    "DecreaseOrderCancelled(uint256,address)": TypedContractEvent<
      DecreaseOrderCancelledEvent.InputTuple,
      DecreaseOrderCancelledEvent.OutputTuple,
      DecreaseOrderCancelledEvent.OutputObject
    >;
    DecreaseOrderCancelled: TypedContractEvent<
      DecreaseOrderCancelledEvent.InputTuple,
      DecreaseOrderCancelledEvent.OutputTuple,
      DecreaseOrderCancelledEvent.OutputObject
    >;

    "DecreaseOrderCreated(address,address,uint8,uint128,uint128,uint160,bool,uint160,address,uint256,uint256)": TypedContractEvent<
      DecreaseOrderCreatedEvent.InputTuple,
      DecreaseOrderCreatedEvent.OutputTuple,
      DecreaseOrderCreatedEvent.OutputObject
    >;
    DecreaseOrderCreated: TypedContractEvent<
      DecreaseOrderCreatedEvent.InputTuple,
      DecreaseOrderCreatedEvent.OutputTuple,
      DecreaseOrderCreatedEvent.OutputObject
    >;

    "DecreaseOrderExecuted(uint256,uint160,address)": TypedContractEvent<
      DecreaseOrderExecutedEvent.InputTuple,
      DecreaseOrderExecutedEvent.OutputTuple,
      DecreaseOrderExecutedEvent.OutputObject
    >;
    DecreaseOrderExecuted: TypedContractEvent<
      DecreaseOrderExecutedEvent.InputTuple,
      DecreaseOrderExecutedEvent.OutputTuple,
      DecreaseOrderExecutedEvent.OutputObject
    >;

    "DecreaseOrderUpdated(uint256,uint160,uint160)": TypedContractEvent<
      DecreaseOrderUpdatedEvent.InputTuple,
      DecreaseOrderUpdatedEvent.OutputTuple,
      DecreaseOrderUpdatedEvent.OutputObject
    >;
    DecreaseOrderUpdated: TypedContractEvent<
      DecreaseOrderUpdatedEvent.InputTuple,
      DecreaseOrderUpdatedEvent.OutputTuple,
      DecreaseOrderUpdatedEvent.OutputObject
    >;

    "IncreaseOrderCancelled(uint256,address)": TypedContractEvent<
      IncreaseOrderCancelledEvent.InputTuple,
      IncreaseOrderCancelledEvent.OutputTuple,
      IncreaseOrderCancelledEvent.OutputObject
    >;
    IncreaseOrderCancelled: TypedContractEvent<
      IncreaseOrderCancelledEvent.InputTuple,
      IncreaseOrderCancelledEvent.OutputTuple,
      IncreaseOrderCancelledEvent.OutputObject
    >;

    "IncreaseOrderCreated(address,address,uint8,uint128,uint128,uint160,bool,uint160,uint256,uint256)": TypedContractEvent<
      IncreaseOrderCreatedEvent.InputTuple,
      IncreaseOrderCreatedEvent.OutputTuple,
      IncreaseOrderCreatedEvent.OutputObject
    >;
    IncreaseOrderCreated: TypedContractEvent<
      IncreaseOrderCreatedEvent.InputTuple,
      IncreaseOrderCreatedEvent.OutputTuple,
      IncreaseOrderCreatedEvent.OutputObject
    >;

    "IncreaseOrderExecuted(uint256,uint160,address)": TypedContractEvent<
      IncreaseOrderExecutedEvent.InputTuple,
      IncreaseOrderExecutedEvent.OutputTuple,
      IncreaseOrderExecutedEvent.OutputObject
    >;
    IncreaseOrderExecuted: TypedContractEvent<
      IncreaseOrderExecutedEvent.InputTuple,
      IncreaseOrderExecutedEvent.OutputTuple,
      IncreaseOrderExecutedEvent.OutputObject
    >;

    "IncreaseOrderUpdated(uint256,uint160,uint160)": TypedContractEvent<
      IncreaseOrderUpdatedEvent.InputTuple,
      IncreaseOrderUpdatedEvent.OutputTuple,
      IncreaseOrderUpdatedEvent.OutputObject
    >;
    IncreaseOrderUpdated: TypedContractEvent<
      IncreaseOrderUpdatedEvent.InputTuple,
      IncreaseOrderUpdatedEvent.OutputTuple,
      IncreaseOrderUpdatedEvent.OutputObject
    >;

    "MinExecutionFeeUpdated(uint256)": TypedContractEvent<
      MinExecutionFeeUpdatedEvent.InputTuple,
      MinExecutionFeeUpdatedEvent.OutputTuple,
      MinExecutionFeeUpdatedEvent.OutputObject
    >;
    MinExecutionFeeUpdated: TypedContractEvent<
      MinExecutionFeeUpdatedEvent.InputTuple,
      MinExecutionFeeUpdatedEvent.OutputTuple,
      MinExecutionFeeUpdatedEvent.OutputObject
    >;

    "OrderExecutorUpdated(address,bool)": TypedContractEvent<
      OrderExecutorUpdatedEvent.InputTuple,
      OrderExecutorUpdatedEvent.OutputTuple,
      OrderExecutorUpdatedEvent.OutputObject
    >;
    OrderExecutorUpdated: TypedContractEvent<
      OrderExecutorUpdatedEvent.InputTuple,
      OrderExecutorUpdatedEvent.OutputTuple,
      OrderExecutorUpdatedEvent.OutputObject
    >;
  };
}
