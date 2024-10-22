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

export declare namespace IMarketLiquidityPosition {
  export type GlobalLiquidityPositionStruct = {
    netSize: BigNumberish;
    liquidationBufferNetSize: BigNumberish;
    previousSPPriceX96: BigNumberish;
    side: BigNumberish;
    liquidity: BigNumberish;
    unrealizedPnLGrowthX64: BigNumberish;
  };

  export type GlobalLiquidityPositionStructOutput = [
    netSize: bigint,
    liquidationBufferNetSize: bigint,
    previousSPPriceX96: bigint,
    side: bigint,
    liquidity: bigint,
    unrealizedPnLGrowthX64: bigint
  ] & {
    netSize: bigint;
    liquidationBufferNetSize: bigint;
    previousSPPriceX96: bigint;
    side: bigint;
    liquidity: bigint;
    unrealizedPnLGrowthX64: bigint;
  };

  export type LiquidityPositionStruct = {
    margin: BigNumberish;
    liquidity: BigNumberish;
    entryUnrealizedPnLGrowthX64: BigNumberish;
  };

  export type LiquidityPositionStructOutput = [
    margin: bigint,
    liquidity: bigint,
    entryUnrealizedPnLGrowthX64: bigint
  ] & {
    margin: bigint;
    liquidity: bigint;
    entryUnrealizedPnLGrowthX64: bigint;
  };
}

export interface IMarketLiquidityPositionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "decreaseLiquidityPosition"
      | "globalLiquidityPositions"
      | "increaseLiquidityPosition"
      | "liquidateLiquidityPosition"
      | "liquidityPositions"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "GlobalLiquidityPositionNetPositionChanged"
      | "GlobalLiquidityPositionPnLGrowthIncreasedByFundingFee"
      | "GlobalLiquidityPositionPnLGrowthIncreasedByTradingFee"
      | "LiquidityPositionDecreased"
      | "LiquidityPositionIncreased"
      | "LiquidityPositionLiquidated"
      | "PreviousSPPriceInitialized"
      | "SettlementPointReached"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "decreaseLiquidityPosition",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "globalLiquidityPositions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLiquidityPosition",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateLiquidityPosition",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityPositions",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "decreaseLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalLiquidityPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityPositions",
    data: BytesLike
  ): Result;
}

export namespace GlobalLiquidityPositionNetPositionChangedEvent {
  export type InputTuple = [
    market: AddressLike,
    sideAfter: BigNumberish,
    netSizeAfter: BigNumberish,
    liquidationBufferNetSizeAfter: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    sideAfter: bigint,
    netSizeAfter: bigint,
    liquidationBufferNetSizeAfter: bigint
  ];
  export interface OutputObject {
    market: string;
    sideAfter: bigint;
    netSizeAfter: bigint;
    liquidationBufferNetSizeAfter: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent {
  export type InputTuple = [
    market: AddressLike,
    unrealizedPnLGrowthAfterX64: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    unrealizedPnLGrowthAfterX64: bigint
  ];
  export interface OutputObject {
    market: string;
    unrealizedPnLGrowthAfterX64: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent {
  export type InputTuple = [
    market: AddressLike,
    liquidityFee: BigNumberish,
    unrealizedPnLGrowthAfterX64: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    liquidityFee: bigint,
    unrealizedPnLGrowthAfterX64: bigint
  ];
  export interface OutputObject {
    market: string;
    liquidityFee: bigint;
    unrealizedPnLGrowthAfterX64: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidityPositionDecreasedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    marginDelta: BigNumberish,
    marginAfter: BigNumberish,
    liquidityAfter: BigNumberish,
    realizedPnLDelta: BigNumberish,
    receiver: AddressLike
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    marginDelta: bigint,
    marginAfter: bigint,
    liquidityAfter: bigint,
    realizedPnLDelta: bigint,
    receiver: string
  ];
  export interface OutputObject {
    market: string;
    account: string;
    marginDelta: bigint;
    marginAfter: bigint;
    liquidityAfter: bigint;
    realizedPnLDelta: bigint;
    receiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidityPositionIncreasedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    marginDelta: BigNumberish,
    marginAfter: BigNumberish,
    liquidityAfter: BigNumberish,
    realizedPnLDelta: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    marginDelta: bigint,
    marginAfter: bigint,
    liquidityAfter: bigint,
    realizedPnLDelta: bigint
  ];
  export interface OutputObject {
    market: string;
    account: string;
    marginDelta: bigint;
    marginAfter: bigint;
    liquidityAfter: bigint;
    realizedPnLDelta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidityPositionLiquidatedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    liquidator: AddressLike,
    liquidationLoss: BigNumberish,
    unrealizedPnLGrowthAfterX64: BigNumberish,
    feeReceiver: AddressLike
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    liquidator: string,
    liquidationLoss: bigint,
    unrealizedPnLGrowthAfterX64: bigint,
    feeReceiver: string
  ];
  export interface OutputObject {
    market: string;
    account: string;
    liquidator: string;
    liquidationLoss: bigint;
    unrealizedPnLGrowthAfterX64: bigint;
    feeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PreviousSPPriceInitializedEvent {
  export type InputTuple = [
    market: AddressLike,
    previousSPPriceX96: BigNumberish
  ];
  export type OutputTuple = [market: string, previousSPPriceX96: bigint];
  export interface OutputObject {
    market: string;
    previousSPPriceX96: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SettlementPointReachedEvent {
  export type InputTuple = [
    market: AddressLike,
    unrealizedPnLGrowthAfterX64: BigNumberish,
    previousSPPriceAfterX96: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    unrealizedPnLGrowthAfterX64: bigint,
    previousSPPriceAfterX96: bigint
  ];
  export interface OutputObject {
    market: string;
    unrealizedPnLGrowthAfterX64: bigint;
    previousSPPriceAfterX96: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IMarketLiquidityPosition extends BaseContract {
  connect(runner?: ContractRunner | null): IMarketLiquidityPosition;
  waitForDeployment(): Promise<this>;

  interface: IMarketLiquidityPositionInterface;

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

  decreaseLiquidityPosition: TypedContractMethod<
    [
      market: AddressLike,
      account: AddressLike,
      marginDelta: BigNumberish,
      liquidityDelta: BigNumberish,
      receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  globalLiquidityPositions: TypedContractMethod<
    [market: AddressLike],
    [IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput],
    "view"
  >;

  increaseLiquidityPosition: TypedContractMethod<
    [
      market: AddressLike,
      account: AddressLike,
      marginDelta: BigNumberish,
      liquidityDelta: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  liquidateLiquidityPosition: TypedContractMethod<
    [market: AddressLike, account: AddressLike, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  liquidityPositions: TypedContractMethod<
    [market: AddressLike, account: AddressLike],
    [IMarketLiquidityPosition.LiquidityPositionStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "decreaseLiquidityPosition"
  ): TypedContractMethod<
    [
      market: AddressLike,
      account: AddressLike,
      marginDelta: BigNumberish,
      liquidityDelta: BigNumberish,
      receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "globalLiquidityPositions"
  ): TypedContractMethod<
    [market: AddressLike],
    [IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "increaseLiquidityPosition"
  ): TypedContractMethod<
    [
      market: AddressLike,
      account: AddressLike,
      marginDelta: BigNumberish,
      liquidityDelta: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidateLiquidityPosition"
  ): TypedContractMethod<
    [market: AddressLike, account: AddressLike, feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidityPositions"
  ): TypedContractMethod<
    [market: AddressLike, account: AddressLike],
    [IMarketLiquidityPosition.LiquidityPositionStructOutput],
    "view"
  >;

  getEvent(
    key: "GlobalLiquidityPositionNetPositionChanged"
  ): TypedContractEvent<
    GlobalLiquidityPositionNetPositionChangedEvent.InputTuple,
    GlobalLiquidityPositionNetPositionChangedEvent.OutputTuple,
    GlobalLiquidityPositionNetPositionChangedEvent.OutputObject
  >;
  getEvent(
    key: "GlobalLiquidityPositionPnLGrowthIncreasedByFundingFee"
  ): TypedContractEvent<
    GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.InputTuple,
    GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.OutputTuple,
    GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.OutputObject
  >;
  getEvent(
    key: "GlobalLiquidityPositionPnLGrowthIncreasedByTradingFee"
  ): TypedContractEvent<
    GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.InputTuple,
    GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputTuple,
    GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputObject
  >;
  getEvent(
    key: "LiquidityPositionDecreased"
  ): TypedContractEvent<
    LiquidityPositionDecreasedEvent.InputTuple,
    LiquidityPositionDecreasedEvent.OutputTuple,
    LiquidityPositionDecreasedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidityPositionIncreased"
  ): TypedContractEvent<
    LiquidityPositionIncreasedEvent.InputTuple,
    LiquidityPositionIncreasedEvent.OutputTuple,
    LiquidityPositionIncreasedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidityPositionLiquidated"
  ): TypedContractEvent<
    LiquidityPositionLiquidatedEvent.InputTuple,
    LiquidityPositionLiquidatedEvent.OutputTuple,
    LiquidityPositionLiquidatedEvent.OutputObject
  >;
  getEvent(
    key: "PreviousSPPriceInitialized"
  ): TypedContractEvent<
    PreviousSPPriceInitializedEvent.InputTuple,
    PreviousSPPriceInitializedEvent.OutputTuple,
    PreviousSPPriceInitializedEvent.OutputObject
  >;
  getEvent(
    key: "SettlementPointReached"
  ): TypedContractEvent<
    SettlementPointReachedEvent.InputTuple,
    SettlementPointReachedEvent.OutputTuple,
    SettlementPointReachedEvent.OutputObject
  >;

  filters: {
    "GlobalLiquidityPositionNetPositionChanged(address,uint8,uint128,uint128)": TypedContractEvent<
      GlobalLiquidityPositionNetPositionChangedEvent.InputTuple,
      GlobalLiquidityPositionNetPositionChangedEvent.OutputTuple,
      GlobalLiquidityPositionNetPositionChangedEvent.OutputObject
    >;
    GlobalLiquidityPositionNetPositionChanged: TypedContractEvent<
      GlobalLiquidityPositionNetPositionChangedEvent.InputTuple,
      GlobalLiquidityPositionNetPositionChangedEvent.OutputTuple,
      GlobalLiquidityPositionNetPositionChangedEvent.OutputObject
    >;

    "GlobalLiquidityPositionPnLGrowthIncreasedByFundingFee(address,int256)": TypedContractEvent<
      GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.InputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.OutputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.OutputObject
    >;
    GlobalLiquidityPositionPnLGrowthIncreasedByFundingFee: TypedContractEvent<
      GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.InputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.OutputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByFundingFeeEvent.OutputObject
    >;

    "GlobalLiquidityPositionPnLGrowthIncreasedByTradingFee(address,uint128,int256)": TypedContractEvent<
      GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.InputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputObject
    >;
    GlobalLiquidityPositionPnLGrowthIncreasedByTradingFee: TypedContractEvent<
      GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.InputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputTuple,
      GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputObject
    >;

    "LiquidityPositionDecreased(address,address,uint128,uint128,uint128,int256,address)": TypedContractEvent<
      LiquidityPositionDecreasedEvent.InputTuple,
      LiquidityPositionDecreasedEvent.OutputTuple,
      LiquidityPositionDecreasedEvent.OutputObject
    >;
    LiquidityPositionDecreased: TypedContractEvent<
      LiquidityPositionDecreasedEvent.InputTuple,
      LiquidityPositionDecreasedEvent.OutputTuple,
      LiquidityPositionDecreasedEvent.OutputObject
    >;

    "LiquidityPositionIncreased(address,address,uint128,uint128,uint128,int256)": TypedContractEvent<
      LiquidityPositionIncreasedEvent.InputTuple,
      LiquidityPositionIncreasedEvent.OutputTuple,
      LiquidityPositionIncreasedEvent.OutputObject
    >;
    LiquidityPositionIncreased: TypedContractEvent<
      LiquidityPositionIncreasedEvent.InputTuple,
      LiquidityPositionIncreasedEvent.OutputTuple,
      LiquidityPositionIncreasedEvent.OutputObject
    >;

    "LiquidityPositionLiquidated(address,address,address,int256,int256,address)": TypedContractEvent<
      LiquidityPositionLiquidatedEvent.InputTuple,
      LiquidityPositionLiquidatedEvent.OutputTuple,
      LiquidityPositionLiquidatedEvent.OutputObject
    >;
    LiquidityPositionLiquidated: TypedContractEvent<
      LiquidityPositionLiquidatedEvent.InputTuple,
      LiquidityPositionLiquidatedEvent.OutputTuple,
      LiquidityPositionLiquidatedEvent.OutputObject
    >;

    "PreviousSPPriceInitialized(address,uint160)": TypedContractEvent<
      PreviousSPPriceInitializedEvent.InputTuple,
      PreviousSPPriceInitializedEvent.OutputTuple,
      PreviousSPPriceInitializedEvent.OutputObject
    >;
    PreviousSPPriceInitialized: TypedContractEvent<
      PreviousSPPriceInitializedEvent.InputTuple,
      PreviousSPPriceInitializedEvent.OutputTuple,
      PreviousSPPriceInitializedEvent.OutputObject
    >;

    "SettlementPointReached(address,int256,uint160)": TypedContractEvent<
      SettlementPointReachedEvent.InputTuple,
      SettlementPointReachedEvent.OutputTuple,
      SettlementPointReachedEvent.OutputObject
    >;
    SettlementPointReached: TypedContractEvent<
      SettlementPointReachedEvent.InputTuple,
      SettlementPointReachedEvent.OutputTuple,
      SettlementPointReachedEvent.OutputObject
    >;
  };
}
