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

export interface MarketIndexerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assignMarketIndex"
      | "indexMarkets"
      | "marketIndex"
      | "marketIndexes"
      | "marketManager"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "MarketIndexAssigned"): EventFragment;

  encodeFunctionData(
    functionFragment: "assignMarketIndex",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "indexMarkets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marketIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketIndexes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marketManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "assignMarketIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketIndexes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketManager",
    data: BytesLike
  ): Result;
}

export namespace MarketIndexAssignedEvent {
  export type InputTuple = [market: AddressLike, index: BigNumberish];
  export type OutputTuple = [market: string, index: bigint];
  export interface OutputObject {
    market: string;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MarketIndexer extends BaseContract {
  connect(runner?: ContractRunner | null): MarketIndexer;
  waitForDeployment(): Promise<this>;

  interface: MarketIndexerInterface;

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

  assignMarketIndex: TypedContractMethod<
    [_market: AddressLike],
    [bigint],
    "nonpayable"
  >;

  indexMarkets: TypedContractMethod<[index: BigNumberish], [string], "view">;

  marketIndex: TypedContractMethod<[], [bigint], "view">;

  marketIndexes: TypedContractMethod<[market: AddressLike], [bigint], "view">;

  marketManager: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assignMarketIndex"
  ): TypedContractMethod<[_market: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "indexMarkets"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "marketIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "marketIndexes"
  ): TypedContractMethod<[market: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "marketManager"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "MarketIndexAssigned"
  ): TypedContractEvent<
    MarketIndexAssignedEvent.InputTuple,
    MarketIndexAssignedEvent.OutputTuple,
    MarketIndexAssignedEvent.OutputObject
  >;

  filters: {
    "MarketIndexAssigned(address,uint24)": TypedContractEvent<
      MarketIndexAssignedEvent.InputTuple,
      MarketIndexAssignedEvent.OutputTuple,
      MarketIndexAssignedEvent.OutputObject
    >;
    MarketIndexAssigned: TypedContractEvent<
      MarketIndexAssignedEvent.InputTuple,
      MarketIndexAssignedEvent.OutputTuple,
      MarketIndexAssignedEvent.OutputObject
    >;
  };
}