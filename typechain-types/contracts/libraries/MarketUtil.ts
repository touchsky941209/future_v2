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

export interface MarketUtilInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "GlobalLiquidationFundGovUsed"
      | "LiquidationFundPositionDecreased"
      | "LiquidationFundPositionIncreased"
  ): EventFragment;
}

export namespace GlobalLiquidationFundGovUsedEvent {
  export type InputTuple = [
    market: AddressLike,
    receiver: AddressLike,
    liquidationFundDelta: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    receiver: string,
    liquidationFundDelta: bigint
  ];
  export interface OutputObject {
    market: string;
    receiver: string;
    liquidationFundDelta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidationFundPositionDecreasedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    liquidityAfter: BigNumberish,
    receiver: AddressLike
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    liquidityAfter: bigint,
    receiver: string
  ];
  export interface OutputObject {
    market: string;
    account: string;
    liquidityAfter: bigint;
    receiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidationFundPositionIncreasedEvent {
  export type InputTuple = [
    market: AddressLike,
    account: AddressLike,
    liquidityAfter: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    account: string,
    liquidityAfter: bigint
  ];
  export interface OutputObject {
    market: string;
    account: string;
    liquidityAfter: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MarketUtil extends BaseContract {
  connect(runner?: ContractRunner | null): MarketUtil;
  waitForDeployment(): Promise<this>;

  interface: MarketUtilInterface;

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
    key: "GlobalLiquidationFundGovUsed"
  ): TypedContractEvent<
    GlobalLiquidationFundGovUsedEvent.InputTuple,
    GlobalLiquidationFundGovUsedEvent.OutputTuple,
    GlobalLiquidationFundGovUsedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidationFundPositionDecreased"
  ): TypedContractEvent<
    LiquidationFundPositionDecreasedEvent.InputTuple,
    LiquidationFundPositionDecreasedEvent.OutputTuple,
    LiquidationFundPositionDecreasedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidationFundPositionIncreased"
  ): TypedContractEvent<
    LiquidationFundPositionIncreasedEvent.InputTuple,
    LiquidationFundPositionIncreasedEvent.OutputTuple,
    LiquidationFundPositionIncreasedEvent.OutputObject
  >;

  filters: {
    "GlobalLiquidationFundGovUsed(address,address,uint128)": TypedContractEvent<
      GlobalLiquidationFundGovUsedEvent.InputTuple,
      GlobalLiquidationFundGovUsedEvent.OutputTuple,
      GlobalLiquidationFundGovUsedEvent.OutputObject
    >;
    GlobalLiquidationFundGovUsed: TypedContractEvent<
      GlobalLiquidationFundGovUsedEvent.InputTuple,
      GlobalLiquidationFundGovUsedEvent.OutputTuple,
      GlobalLiquidationFundGovUsedEvent.OutputObject
    >;

    "LiquidationFundPositionDecreased(address,address,uint256,address)": TypedContractEvent<
      LiquidationFundPositionDecreasedEvent.InputTuple,
      LiquidationFundPositionDecreasedEvent.OutputTuple,
      LiquidationFundPositionDecreasedEvent.OutputObject
    >;
    LiquidationFundPositionDecreased: TypedContractEvent<
      LiquidationFundPositionDecreasedEvent.InputTuple,
      LiquidationFundPositionDecreasedEvent.OutputTuple,
      LiquidationFundPositionDecreasedEvent.OutputObject
    >;

    "LiquidationFundPositionIncreased(address,address,uint256)": TypedContractEvent<
      LiquidationFundPositionIncreasedEvent.InputTuple,
      LiquidationFundPositionIncreasedEvent.OutputTuple,
      LiquidationFundPositionIncreasedEvent.OutputObject
    >;
    LiquidationFundPositionIncreased: TypedContractEvent<
      LiquidationFundPositionIncreasedEvent.InputTuple,
      LiquidationFundPositionIncreasedEvent.OutputTuple,
      LiquidationFundPositionIncreasedEvent.OutputObject
    >;
  };
}
