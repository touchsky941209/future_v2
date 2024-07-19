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

export interface LiquidityPositionUtilInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "LiquidityPositionDecreased"
      | "LiquidityPositionIncreased"
      | "LiquidityPositionLiquidated"
      | "SettlementPointReached"
  ): EventFragment;
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

export interface LiquidityPositionUtil extends BaseContract {
  connect(runner?: ContractRunner | null): LiquidityPositionUtil;
  waitForDeployment(): Promise<this>;

  interface: LiquidityPositionUtilInterface;

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
    key: "SettlementPointReached"
  ): TypedContractEvent<
    SettlementPointReachedEvent.InputTuple,
    SettlementPointReachedEvent.OutputTuple,
    SettlementPointReachedEvent.OutputObject
  >;

  filters: {
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
