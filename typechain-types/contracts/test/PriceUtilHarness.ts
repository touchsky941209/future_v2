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
}

export declare namespace IMarketManager {
  export type PriceVertexStruct = {
    size: BigNumberish;
    premiumRateX96: BigNumberish;
  };

  export type PriceVertexStructOutput = [
    size: bigint,
    premiumRateX96: bigint
  ] & { size: bigint; premiumRateX96: bigint };

  export type PriceStateStruct = {
    premiumRateX96: BigNumberish;
    pendingVertexIndex: BigNumberish;
    currentVertexIndex: BigNumberish;
    basisIndexPriceX96: BigNumberish;
    priceVertices: IMarketManager.PriceVertexStruct[];
    liquidationBufferNetSizes: BigNumberish[];
  };

  export type PriceStateStructOutput = [
    premiumRateX96: bigint,
    pendingVertexIndex: bigint,
    currentVertexIndex: bigint,
    basisIndexPriceX96: bigint,
    priceVertices: IMarketManager.PriceVertexStructOutput[],
    liquidationBufferNetSizes: bigint[]
  ] & {
    premiumRateX96: bigint;
    pendingVertexIndex: bigint;
    currentVertexIndex: bigint;
    basisIndexPriceX96: bigint;
    priceVertices: IMarketManager.PriceVertexStructOutput[];
    liquidationBufferNetSizes: bigint[];
  };
}

export declare namespace PriceUtil {
  export type UpdatePriceStateParameterStruct = {
    market: AddressLike;
    side: BigNumberish;
    sizeDelta: BigNumberish;
    indexPriceX96: BigNumberish;
    liquidationVertexIndex: BigNumberish;
    liquidation: boolean;
  };

  export type UpdatePriceStateParameterStructOutput = [
    market: string,
    side: bigint,
    sizeDelta: bigint,
    indexPriceX96: bigint,
    liquidationVertexIndex: bigint,
    liquidation: boolean
  ] & {
    market: string;
    side: bigint;
    sizeDelta: bigint;
    indexPriceX96: bigint;
    liquidationVertexIndex: bigint;
    liquidation: boolean;
  };
}

export interface PriceUtilHarnessInterface extends Interface {
  getFunction(nameOrSignature: "updatePriceState"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BasisIndexPriceChanged"
      | "GlobalLiquidityPositionNetPositionChanged"
      | "LiquidationBufferNetSizeChanged"
      | "PremiumRateChanged"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "updatePriceState",
    values: [
      IMarketLiquidityPosition.GlobalLiquidityPositionStruct,
      IMarketManager.PriceStateStruct,
      PriceUtil.UpdatePriceStateParameterStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "updatePriceState",
    data: BytesLike
  ): Result;
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

export interface PriceUtilHarness extends BaseContract {
  connect(runner?: ContractRunner | null): PriceUtilHarness;
  waitForDeployment(): Promise<this>;

  interface: PriceUtilHarnessInterface;

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

  updatePriceState: TypedContractMethod<
    [
      _globalPosition: IMarketLiquidityPosition.GlobalLiquidityPositionStruct,
      _priceState: IMarketManager.PriceStateStruct,
      _parameter: PriceUtil.UpdatePriceStateParameterStruct
    ],
    [
      [
        bigint,
        IMarketManager.PriceStateStructOutput,
        IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput
      ] & {
        tradePriceX96: bigint;
        updatedPriceState: IMarketManager.PriceStateStructOutput;
        updatedGlobalPosition: IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput;
      }
    ],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "updatePriceState"
  ): TypedContractMethod<
    [
      _globalPosition: IMarketLiquidityPosition.GlobalLiquidityPositionStruct,
      _priceState: IMarketManager.PriceStateStruct,
      _parameter: PriceUtil.UpdatePriceStateParameterStruct
    ],
    [
      [
        bigint,
        IMarketManager.PriceStateStructOutput,
        IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput
      ] & {
        tradePriceX96: bigint;
        updatedPriceState: IMarketManager.PriceStateStructOutput;
        updatedGlobalPosition: IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput;
      }
    ],
    "nonpayable"
  >;

  getEvent(
    key: "BasisIndexPriceChanged"
  ): TypedContractEvent<
    BasisIndexPriceChangedEvent.InputTuple,
    BasisIndexPriceChangedEvent.OutputTuple,
    BasisIndexPriceChangedEvent.OutputObject
  >;
  getEvent(
    key: "GlobalLiquidityPositionNetPositionChanged"
  ): TypedContractEvent<
    GlobalLiquidityPositionNetPositionChangedEvent.InputTuple,
    GlobalLiquidityPositionNetPositionChangedEvent.OutputTuple,
    GlobalLiquidityPositionNetPositionChangedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidationBufferNetSizeChanged"
  ): TypedContractEvent<
    LiquidationBufferNetSizeChangedEvent.InputTuple,
    LiquidationBufferNetSizeChangedEvent.OutputTuple,
    LiquidationBufferNetSizeChangedEvent.OutputObject
  >;
  getEvent(
    key: "PremiumRateChanged"
  ): TypedContractEvent<
    PremiumRateChangedEvent.InputTuple,
    PremiumRateChangedEvent.OutputTuple,
    PremiumRateChangedEvent.OutputObject
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
  };
}
