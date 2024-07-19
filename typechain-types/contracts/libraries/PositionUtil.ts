/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
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
} from "../../common";

export interface PositionUtilInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "BasisIndexPriceChanged"
      | "FundingRateGrowthAdjusted"
      | "GlobalLiquidationFundIncreasedByLiquidation"
      | "GlobalLiquidityPositionNetPositionChanged"
      | "GlobalLiquidityPositionPnLGrowthIncreasedByTradingFee"
      | "GlobalPositionSizeChanged"
      | "LiquidationBufferNetSizeChanged"
      | "PositionDecreased"
      | "PositionIncreased"
      | "PositionLiquidated"
      | "PremiumRateChanged"
      | "PreviousSPPriceInitialized"
      | "ProtocolFeeIncreased"
      | "ReferralFeeIncreased"
      | "SettlementPointReached"
  ): EventFragment;
}

export namespace BasisIndexPriceChangedEvent {
  export type InputTuple = [
    market: AddressLike,
    basisIndexPriceAfterX96: BigNumberish
  ];
  export type OutputTuple = [market: string, basisIndexPriceAfterX96: bigint];
  export interface OutputObject {
    market: string;
    basisIndexPriceAfterX96: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundingRateGrowthAdjustedEvent {
  export type InputTuple = [
    market: AddressLike,
    fundingRateDeltaX96: BigNumberish,
    longFundingRateGrowthAfterX96: BigNumberish,
    shortFundingRateGrowthAfterX96: BigNumberish,
    lastAdjustFundingRateTime: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    fundingRateDeltaX96: bigint,
    longFundingRateGrowthAfterX96: bigint,
    shortFundingRateGrowthAfterX96: bigint,
    lastAdjustFundingRateTime: bigint
  ];
  export interface OutputObject {
    market: string;
    fundingRateDeltaX96: bigint;
    longFundingRateGrowthAfterX96: bigint;
    shortFundingRateGrowthAfterX96: bigint;
    lastAdjustFundingRateTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GlobalLiquidationFundIncreasedByLiquidationEvent {
  export type InputTuple = [
    market: AddressLike,
    liquidationFee: BigNumberish,
    liquidationFundAfter: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    liquidationFee: bigint,
    liquidationFundAfter: bigint
  ];
  export interface OutputObject {
    market: string;
    liquidationFee: bigint;
    liquidationFundAfter: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace GlobalPositionSizeChangedEvent {
  export type InputTuple = [
    market: AddressLike,
    maxSizeAfter: BigNumberish,
    maxSizePerPositionAfter: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    maxSizeAfter: bigint,
    maxSizePerPositionAfter: bigint
  ];
  export interface OutputObject {
    market: string;
    maxSizeAfter: bigint;
    maxSizePerPositionAfter: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidationBufferNetSizeChangedEvent {
  export type InputTuple = [
    market: AddressLike,
    index: BigNumberish,
    netSizeAfter: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    index: bigint,
    netSizeAfter: bigint
  ];
  export interface OutputObject {
    market: string;
    index: bigint;
    netSizeAfter: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PositionDecreasedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    side: BigNumberish,
    marginDelta: BigNumberish,
    marginAfter: BigNumberish,
    sizeAfter: BigNumberish,
    tradePriceX96: BigNumberish,
    realizedPnLDelta: BigNumberish,
    fundingFee: BigNumberish,
    tradingFee: BigNumberish,
    receiver: AddressLike
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    side: bigint,
    marginDelta: bigint,
    marginAfter: bigint,
    sizeAfter: bigint,
    tradePriceX96: bigint,
    realizedPnLDelta: bigint,
    fundingFee: bigint,
    tradingFee: bigint,
    receiver: string
  ];
  export interface OutputObject {
    market: string;
    account: string;
    side: bigint;
    marginDelta: bigint;
    marginAfter: bigint;
    sizeAfter: bigint;
    tradePriceX96: bigint;
    realizedPnLDelta: bigint;
    fundingFee: bigint;
    tradingFee: bigint;
    receiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PositionIncreasedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    side: BigNumberish,
    marginDelta: BigNumberish,
    marginAfter: BigNumberish,
    sizeAfter: BigNumberish,
    tradePriceX96: BigNumberish,
    entryPriceAfterX96: BigNumberish,
    fundingFee: BigNumberish,
    tradingFee: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    side: bigint,
    marginDelta: bigint,
    marginAfter: bigint,
    sizeAfter: bigint,
    tradePriceX96: bigint,
    entryPriceAfterX96: bigint,
    fundingFee: bigint,
    tradingFee: bigint
  ];
  export interface OutputObject {
    market: string;
    account: string;
    side: bigint;
    marginDelta: bigint;
    marginAfter: bigint;
    sizeAfter: bigint;
    tradePriceX96: bigint;
    entryPriceAfterX96: bigint;
    fundingFee: bigint;
    tradingFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PositionLiquidatedEvent {
  export type InputTuple = [
    market: AddressLike,
    liquidator: AddressLike,
    account: AddressLike,
    side: BigNumberish,
    indexPriceX96: BigNumberish,
    tradePriceX96: BigNumberish,
    liquidationPriceX96: BigNumberish,
    fundingFee: BigNumberish,
    tradingFee: BigNumberish,
    liquidationFee: BigNumberish,
    liquidationExecutionFee: BigNumberish,
    feeReceiver: AddressLike
  ];
  export type OutputTuple = [
    market: string,
    liquidator: string,
    account: string,
    side: bigint,
    indexPriceX96: bigint,
    tradePriceX96: bigint,
    liquidationPriceX96: bigint,
    fundingFee: bigint,
    tradingFee: bigint,
    liquidationFee: bigint,
    liquidationExecutionFee: bigint,
    feeReceiver: string
  ];
  export interface OutputObject {
    market: string;
    liquidator: string;
    account: string;
    side: bigint;
    indexPriceX96: bigint;
    tradePriceX96: bigint;
    liquidationPriceX96: bigint;
    fundingFee: bigint;
    tradingFee: bigint;
    liquidationFee: bigint;
    liquidationExecutionFee: bigint;
    feeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PremiumRateChangedEvent {
  export type InputTuple = [
    market: AddressLike,
    premiumRateAfterX96: BigNumberish
  ];
  export type OutputTuple = [market: string, premiumRateAfterX96: bigint];
  export interface OutputObject {
    market: string;
    premiumRateAfterX96: bigint;
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

export namespace ProtocolFeeIncreasedEvent {
  export type InputTuple = [market: AddressLike, amount: BigNumberish];
  export type OutputTuple = [market: string, amount: bigint];
  export interface OutputObject {
    market: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReferralFeeIncreasedEvent {
  export type InputTuple = [
    market: AddressLike,
    referee: AddressLike,
    referralToken: BigNumberish,
    referralFee: BigNumberish,
    referralParentToken: BigNumberish,
    referralParentFee: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    referee: string,
    referralToken: bigint,
    referralFee: bigint,
    referralParentToken: bigint,
    referralParentFee: bigint
  ];
  export interface OutputObject {
    market: string;
    referee: string;
    referralToken: bigint;
    referralFee: bigint;
    referralParentToken: bigint;
    referralParentFee: bigint;
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

export interface PositionUtil extends BaseContract {
  connect(runner?: ContractRunner | null): PositionUtil;
  waitForDeployment(): Promise<this>;

  interface: PositionUtilInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "BasisIndexPriceChanged"
  ): TypedContractEvent<
    BasisIndexPriceChangedEvent.InputTuple,
    BasisIndexPriceChangedEvent.OutputTuple,
    BasisIndexPriceChangedEvent.OutputObject
  >;
  getEvent(
    key: "FundingRateGrowthAdjusted"
  ): TypedContractEvent<
    FundingRateGrowthAdjustedEvent.InputTuple,
    FundingRateGrowthAdjustedEvent.OutputTuple,
    FundingRateGrowthAdjustedEvent.OutputObject
  >;
  getEvent(
    key: "GlobalLiquidationFundIncreasedByLiquidation"
  ): TypedContractEvent<
    GlobalLiquidationFundIncreasedByLiquidationEvent.InputTuple,
    GlobalLiquidationFundIncreasedByLiquidationEvent.OutputTuple,
    GlobalLiquidationFundIncreasedByLiquidationEvent.OutputObject
  >;
  getEvent(
    key: "GlobalLiquidityPositionNetPositionChanged"
  ): TypedContractEvent<
    GlobalLiquidityPositionNetPositionChangedEvent.InputTuple,
    GlobalLiquidityPositionNetPositionChangedEvent.OutputTuple,
    GlobalLiquidityPositionNetPositionChangedEvent.OutputObject
  >;
  getEvent(
    key: "GlobalLiquidityPositionPnLGrowthIncreasedByTradingFee"
  ): TypedContractEvent<
    GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.InputTuple,
    GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputTuple,
    GlobalLiquidityPositionPnLGrowthIncreasedByTradingFeeEvent.OutputObject
  >;
  getEvent(
    key: "GlobalPositionSizeChanged"
  ): TypedContractEvent<
    GlobalPositionSizeChangedEvent.InputTuple,
    GlobalPositionSizeChangedEvent.OutputTuple,
    GlobalPositionSizeChangedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidationBufferNetSizeChanged"
  ): TypedContractEvent<
    LiquidationBufferNetSizeChangedEvent.InputTuple,
    LiquidationBufferNetSizeChangedEvent.OutputTuple,
    LiquidationBufferNetSizeChangedEvent.OutputObject
  >;
  getEvent(
    key: "PositionDecreased"
  ): TypedContractEvent<
    PositionDecreasedEvent.InputTuple,
    PositionDecreasedEvent.OutputTuple,
    PositionDecreasedEvent.OutputObject
  >;
  getEvent(
    key: "PositionIncreased"
  ): TypedContractEvent<
    PositionIncreasedEvent.InputTuple,
    PositionIncreasedEvent.OutputTuple,
    PositionIncreasedEvent.OutputObject
  >;
  getEvent(
    key: "PositionLiquidated"
  ): TypedContractEvent<
    PositionLiquidatedEvent.InputTuple,
    PositionLiquidatedEvent.OutputTuple,
    PositionLiquidatedEvent.OutputObject
  >;
  getEvent(
    key: "PremiumRateChanged"
  ): TypedContractEvent<
    PremiumRateChangedEvent.InputTuple,
    PremiumRateChangedEvent.OutputTuple,
    PremiumRateChangedEvent.OutputObject
  >;
  getEvent(
    key: "PreviousSPPriceInitialized"
  ): TypedContractEvent<
    PreviousSPPriceInitializedEvent.InputTuple,
    PreviousSPPriceInitializedEvent.OutputTuple,
    PreviousSPPriceInitializedEvent.OutputObject
  >;
  getEvent(
    key: "ProtocolFeeIncreased"
  ): TypedContractEvent<
    ProtocolFeeIncreasedEvent.InputTuple,
    ProtocolFeeIncreasedEvent.OutputTuple,
    ProtocolFeeIncreasedEvent.OutputObject
  >;
  getEvent(
    key: "ReferralFeeIncreased"
  ): TypedContractEvent<
    ReferralFeeIncreasedEvent.InputTuple,
    ReferralFeeIncreasedEvent.OutputTuple,
    ReferralFeeIncreasedEvent.OutputObject
  >;
  getEvent(
    key: "SettlementPointReached"
  ): TypedContractEvent<
    SettlementPointReachedEvent.InputTuple,
    SettlementPointReachedEvent.OutputTuple,
    SettlementPointReachedEvent.OutputObject
  >;

  filters: {
    "BasisIndexPriceChanged(address,uint160)": TypedContractEvent<
      BasisIndexPriceChangedEvent.InputTuple,
      BasisIndexPriceChangedEvent.OutputTuple,
      BasisIndexPriceChangedEvent.OutputObject
    >;
    BasisIndexPriceChanged: TypedContractEvent<
      BasisIndexPriceChangedEvent.InputTuple,
      BasisIndexPriceChangedEvent.OutputTuple,
      BasisIndexPriceChangedEvent.OutputObject
    >;

    "FundingRateGrowthAdjusted(address,int256,int192,int192,uint64)": TypedContractEvent<
      FundingRateGrowthAdjustedEvent.InputTuple,
      FundingRateGrowthAdjustedEvent.OutputTuple,
      FundingRateGrowthAdjustedEvent.OutputObject
    >;
    FundingRateGrowthAdjusted: TypedContractEvent<
      FundingRateGrowthAdjustedEvent.InputTuple,
      FundingRateGrowthAdjustedEvent.OutputTuple,
      FundingRateGrowthAdjustedEvent.OutputObject
    >;

    "GlobalLiquidationFundIncreasedByLiquidation(address,int256,int256)": TypedContractEvent<
      GlobalLiquidationFundIncreasedByLiquidationEvent.InputTuple,
      GlobalLiquidationFundIncreasedByLiquidationEvent.OutputTuple,
      GlobalLiquidationFundIncreasedByLiquidationEvent.OutputObject
    >;
    GlobalLiquidationFundIncreasedByLiquidation: TypedContractEvent<
      GlobalLiquidationFundIncreasedByLiquidationEvent.InputTuple,
      GlobalLiquidationFundIncreasedByLiquidationEvent.OutputTuple,
      GlobalLiquidationFundIncreasedByLiquidationEvent.OutputObject
    >;

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

    "GlobalPositionSizeChanged(address,uint128,uint128)": TypedContractEvent<
      GlobalPositionSizeChangedEvent.InputTuple,
      GlobalPositionSizeChangedEvent.OutputTuple,
      GlobalPositionSizeChangedEvent.OutputObject
    >;
    GlobalPositionSizeChanged: TypedContractEvent<
      GlobalPositionSizeChangedEvent.InputTuple,
      GlobalPositionSizeChangedEvent.OutputTuple,
      GlobalPositionSizeChangedEvent.OutputObject
    >;

    "LiquidationBufferNetSizeChanged(address,uint8,uint128)": TypedContractEvent<
      LiquidationBufferNetSizeChangedEvent.InputTuple,
      LiquidationBufferNetSizeChangedEvent.OutputTuple,
      LiquidationBufferNetSizeChangedEvent.OutputObject
    >;
    LiquidationBufferNetSizeChanged: TypedContractEvent<
      LiquidationBufferNetSizeChangedEvent.InputTuple,
      LiquidationBufferNetSizeChangedEvent.OutputTuple,
      LiquidationBufferNetSizeChangedEvent.OutputObject
    >;

    "PositionDecreased(address,address,uint8,uint128,uint128,uint128,uint160,int256,int256,uint128,address)": TypedContractEvent<
      PositionDecreasedEvent.InputTuple,
      PositionDecreasedEvent.OutputTuple,
      PositionDecreasedEvent.OutputObject
    >;
    PositionDecreased: TypedContractEvent<
      PositionDecreasedEvent.InputTuple,
      PositionDecreasedEvent.OutputTuple,
      PositionDecreasedEvent.OutputObject
    >;

    "PositionIncreased(address,address,uint8,uint128,uint128,uint128,uint160,uint160,int256,uint128)": TypedContractEvent<
      PositionIncreasedEvent.InputTuple,
      PositionIncreasedEvent.OutputTuple,
      PositionIncreasedEvent.OutputObject
    >;
    PositionIncreased: TypedContractEvent<
      PositionIncreasedEvent.InputTuple,
      PositionIncreasedEvent.OutputTuple,
      PositionIncreasedEvent.OutputObject
    >;

    "PositionLiquidated(address,address,address,uint8,uint160,uint160,uint160,int256,uint128,uint128,uint64,address)": TypedContractEvent<
      PositionLiquidatedEvent.InputTuple,
      PositionLiquidatedEvent.OutputTuple,
      PositionLiquidatedEvent.OutputObject
    >;
    PositionLiquidated: TypedContractEvent<
      PositionLiquidatedEvent.InputTuple,
      PositionLiquidatedEvent.OutputTuple,
      PositionLiquidatedEvent.OutputObject
    >;

    "PremiumRateChanged(address,uint128)": TypedContractEvent<
      PremiumRateChangedEvent.InputTuple,
      PremiumRateChangedEvent.OutputTuple,
      PremiumRateChangedEvent.OutputObject
    >;
    PremiumRateChanged: TypedContractEvent<
      PremiumRateChangedEvent.InputTuple,
      PremiumRateChangedEvent.OutputTuple,
      PremiumRateChangedEvent.OutputObject
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

    "ProtocolFeeIncreased(address,uint128)": TypedContractEvent<
      ProtocolFeeIncreasedEvent.InputTuple,
      ProtocolFeeIncreasedEvent.OutputTuple,
      ProtocolFeeIncreasedEvent.OutputObject
    >;
    ProtocolFeeIncreased: TypedContractEvent<
      ProtocolFeeIncreasedEvent.InputTuple,
      ProtocolFeeIncreasedEvent.OutputTuple,
      ProtocolFeeIncreasedEvent.OutputObject
    >;

    "ReferralFeeIncreased(address,address,uint256,uint128,uint256,uint128)": TypedContractEvent<
      ReferralFeeIncreasedEvent.InputTuple,
      ReferralFeeIncreasedEvent.OutputTuple,
      ReferralFeeIncreasedEvent.OutputObject
    >;
    ReferralFeeIncreased: TypedContractEvent<
      ReferralFeeIncreasedEvent.InputTuple,
      ReferralFeeIncreasedEvent.OutputTuple,
      ReferralFeeIncreasedEvent.OutputObject
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