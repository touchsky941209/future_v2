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

export declare namespace IConfigurable {
  export type VertexConfigStruct = {
    balanceRate: BigNumberish;
    premiumRate: BigNumberish;
  };

  export type VertexConfigStructOutput = [
    balanceRate: bigint,
    premiumRate: bigint
  ] & { balanceRate: bigint; premiumRate: bigint };

  export type MarketPriceConfigStruct = {
    maxPriceImpactLiquidity: BigNumberish;
    liquidationVertexIndex: BigNumberish;
    vertices: IConfigurable.VertexConfigStruct[];
  };

  export type MarketPriceConfigStructOutput = [
    maxPriceImpactLiquidity: bigint,
    liquidationVertexIndex: bigint,
    vertices: IConfigurable.VertexConfigStructOutput[]
  ] & {
    maxPriceImpactLiquidity: bigint;
    liquidationVertexIndex: bigint;
    vertices: IConfigurable.VertexConfigStructOutput[];
  };
}

export declare namespace IMarketManager {
  export type GlobalLiquidationFundStruct = {
    liquidationFund: BigNumberish;
    liquidity: BigNumberish;
  };

  export type GlobalLiquidationFundStructOutput = [
    liquidationFund: bigint,
    liquidity: bigint
  ] & { liquidationFund: bigint; liquidity: bigint };

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

export declare namespace IMarketPosition {
  export type GlobalPositionStruct = {
    longSize: BigNumberish;
    shortSize: BigNumberish;
    maxSize: BigNumberish;
    maxSizePerPosition: BigNumberish;
    longFundingRateGrowthX96: BigNumberish;
    shortFundingRateGrowthX96: BigNumberish;
  };

  export type GlobalPositionStructOutput = [
    longSize: bigint,
    shortSize: bigint,
    maxSize: bigint,
    maxSizePerPosition: bigint,
    longFundingRateGrowthX96: bigint,
    shortFundingRateGrowthX96: bigint
  ] & {
    longSize: bigint;
    shortSize: bigint;
    maxSize: bigint;
    maxSizePerPosition: bigint;
    longFundingRateGrowthX96: bigint;
    shortFundingRateGrowthX96: bigint;
  };

  export type PreviousGlobalFundingRateStruct = {
    longFundingRateGrowthX96: BigNumberish;
    shortFundingRateGrowthX96: BigNumberish;
  };

  export type PreviousGlobalFundingRateStructOutput = [
    longFundingRateGrowthX96: bigint,
    shortFundingRateGrowthX96: bigint
  ] & { longFundingRateGrowthX96: bigint; shortFundingRateGrowthX96: bigint };

  export type GlobalFundingRateSampleStruct = {
    lastAdjustFundingRateTime: BigNumberish;
    sampleCount: BigNumberish;
    cumulativePremiumRateX96: BigNumberish;
  };

  export type GlobalFundingRateSampleStructOutput = [
    lastAdjustFundingRateTime: bigint,
    sampleCount: bigint,
    cumulativePremiumRateX96: bigint
  ] & {
    lastAdjustFundingRateTime: bigint;
    sampleCount: bigint;
    cumulativePremiumRateX96: bigint;
  };
}

export interface MarketUtilHarnessInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "changePriceVertices"
      | "chooseDecreaseIndexPriceX96"
      | "chooseIndexPriceX96"
      | "decreaseLiquidationFundPosition"
      | "globalLiquidationFund"
      | "globalLiquidityPosition"
      | "govUseLiquidationFund"
      | "increaseLiquidationFundPosition"
      | "initializePreviousSPPrice"
      | "liquidationFundPositions"
      | "priceConfig"
      | "priceState"
      | "setGlobalLiquidityPosition"
      | "setLiquidationFund"
      | "setPriceState"
      | "settleLiquidityUnrealizedPnL"
      | "state"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "PreviousSPPriceInitialized"
      | "PriceVertexChanged"
      | "SettlementPointReached"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "changePriceVertices",
    values: [IConfigurable.MarketPriceConfigStruct, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "chooseDecreaseIndexPriceX96",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "chooseIndexPriceX96",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseLiquidationFundPosition",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "globalLiquidationFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "globalLiquidityPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "govUseLiquidationFund",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLiquidationFundPosition",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePreviousSPPrice",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationFundPositions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalLiquidityPosition",
    values: [IMarketLiquidityPosition.GlobalLiquidityPositionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidationFund",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceState",
    values: [IMarketManager.PriceStateStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "settleLiquidityUnrealizedPnL",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "changePriceVertices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chooseDecreaseIndexPriceX96",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chooseIndexPriceX96",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseLiquidationFundPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalLiquidationFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "govUseLiquidationFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLiquidationFundPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePreviousSPPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationFundPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidationFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleLiquidityUnrealizedPnL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
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

export namespace PriceVertexChangedEvent {
  export type InputTuple = [
    market: AddressLike,
    index: BigNumberish,
    sizeAfter: BigNumberish,
    premiumRateAfterX96: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    index: bigint,
    sizeAfter: bigint,
    premiumRateAfterX96: bigint
  ];
  export interface OutputObject {
    market: string;
    index: bigint;
    sizeAfter: bigint;
    premiumRateAfterX96: bigint;
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

export interface MarketUtilHarness extends BaseContract {
  connect(runner?: ContractRunner | null): MarketUtilHarness;
  waitForDeployment(): Promise<this>;

  interface: MarketUtilHarnessInterface;

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

  changePriceVertices: TypedContractMethod<
    [
      _cfg: IConfigurable.MarketPriceConfigStruct,
      _market: AddressLike,
      _indexPriceX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  chooseDecreaseIndexPriceX96: TypedContractMethod<
    [_priceFeed: AddressLike, _market: AddressLike, _side: BigNumberish],
    [bigint],
    "view"
  >;

  chooseIndexPriceX96: TypedContractMethod<
    [_priceFeed: AddressLike, _market: AddressLike, _side: BigNumberish],
    [bigint],
    "view"
  >;

  decreaseLiquidationFundPosition: TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _liquidityDelta: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  globalLiquidationFund: TypedContractMethod<
    [],
    [IMarketManager.GlobalLiquidationFundStructOutput],
    "view"
  >;

  globalLiquidityPosition: TypedContractMethod<
    [],
    [IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput],
    "view"
  >;

  govUseLiquidationFund: TypedContractMethod<
    [
      _market: AddressLike,
      _liquidityDelta: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  increaseLiquidationFundPosition: TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _liquidityDelta: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  initializePreviousSPPrice: TypedContractMethod<
    [_market: AddressLike, _indexPriceX96: BigNumberish],
    [void],
    "nonpayable"
  >;

  liquidationFundPositions: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  priceConfig: TypedContractMethod<
    [],
    [
      [bigint, bigint] & {
        maxPriceImpactLiquidity: bigint;
        liquidationVertexIndex: bigint;
      }
    ],
    "view"
  >;

  priceState: TypedContractMethod<
    [],
    [IMarketManager.PriceStateStructOutput],
    "view"
  >;

  setGlobalLiquidityPosition: TypedContractMethod<
    [_value: IMarketLiquidityPosition.GlobalLiquidityPositionStruct],
    [void],
    "nonpayable"
  >;

  setLiquidationFund: TypedContractMethod<
    [_value: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPriceState: TypedContractMethod<
    [_value: IMarketManager.PriceStateStruct],
    [void],
    "nonpayable"
  >;

  settleLiquidityUnrealizedPnL: TypedContractMethod<
    [_priceFeed: AddressLike, _market: AddressLike],
    [void],
    "nonpayable"
  >;

  state: TypedContractMethod<
    [],
    [
      [
        IMarketManager.PriceStateStructOutput,
        bigint,
        bigint,
        IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput,
        IMarketPosition.GlobalPositionStructOutput,
        IMarketPosition.PreviousGlobalFundingRateStructOutput,
        IMarketPosition.GlobalFundingRateSampleStructOutput,
        IMarketManager.GlobalLiquidationFundStructOutput
      ] & {
        priceState: IMarketManager.PriceStateStructOutput;
        usdBalance: bigint;
        protocolFee: bigint;
        globalLiquidityPosition: IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput;
        globalPosition: IMarketPosition.GlobalPositionStructOutput;
        previousGlobalFundingRate: IMarketPosition.PreviousGlobalFundingRateStructOutput;
        globalFundingRateSample: IMarketPosition.GlobalFundingRateSampleStructOutput;
        globalLiquidationFund: IMarketManager.GlobalLiquidationFundStructOutput;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changePriceVertices"
  ): TypedContractMethod<
    [
      _cfg: IConfigurable.MarketPriceConfigStruct,
      _market: AddressLike,
      _indexPriceX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "chooseDecreaseIndexPriceX96"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _market: AddressLike, _side: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "chooseIndexPriceX96"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _market: AddressLike, _side: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "decreaseLiquidationFundPosition"
  ): TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _liquidityDelta: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "globalLiquidationFund"
  ): TypedContractMethod<
    [],
    [IMarketManager.GlobalLiquidationFundStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "globalLiquidityPosition"
  ): TypedContractMethod<
    [],
    [IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "govUseLiquidationFund"
  ): TypedContractMethod<
    [
      _market: AddressLike,
      _liquidityDelta: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "increaseLiquidationFundPosition"
  ): TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _liquidityDelta: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initializePreviousSPPrice"
  ): TypedContractMethod<
    [_market: AddressLike, _indexPriceX96: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidationFundPositions"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceConfig"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint] & {
        maxPriceImpactLiquidity: bigint;
        liquidationVertexIndex: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "priceState"
  ): TypedContractMethod<[], [IMarketManager.PriceStateStructOutput], "view">;
  getFunction(
    nameOrSignature: "setGlobalLiquidityPosition"
  ): TypedContractMethod<
    [_value: IMarketLiquidityPosition.GlobalLiquidityPositionStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLiquidationFund"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPriceState"
  ): TypedContractMethod<
    [_value: IMarketManager.PriceStateStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "settleLiquidityUnrealizedPnL"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _market: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<
    [],
    [
      [
        IMarketManager.PriceStateStructOutput,
        bigint,
        bigint,
        IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput,
        IMarketPosition.GlobalPositionStructOutput,
        IMarketPosition.PreviousGlobalFundingRateStructOutput,
        IMarketPosition.GlobalFundingRateSampleStructOutput,
        IMarketManager.GlobalLiquidationFundStructOutput
      ] & {
        priceState: IMarketManager.PriceStateStructOutput;
        usdBalance: bigint;
        protocolFee: bigint;
        globalLiquidityPosition: IMarketLiquidityPosition.GlobalLiquidityPositionStructOutput;
        globalPosition: IMarketPosition.GlobalPositionStructOutput;
        previousGlobalFundingRate: IMarketPosition.PreviousGlobalFundingRateStructOutput;
        globalFundingRateSample: IMarketPosition.GlobalFundingRateSampleStructOutput;
        globalLiquidationFund: IMarketManager.GlobalLiquidationFundStructOutput;
      }
    ],
    "view"
  >;

  getEvent(
    key: "PreviousSPPriceInitialized"
  ): TypedContractEvent<
    PreviousSPPriceInitializedEvent.InputTuple,
    PreviousSPPriceInitializedEvent.OutputTuple,
    PreviousSPPriceInitializedEvent.OutputObject
  >;
  getEvent(
    key: "PriceVertexChanged"
  ): TypedContractEvent<
    PriceVertexChangedEvent.InputTuple,
    PriceVertexChangedEvent.OutputTuple,
    PriceVertexChangedEvent.OutputObject
  >;
  getEvent(
    key: "SettlementPointReached"
  ): TypedContractEvent<
    SettlementPointReachedEvent.InputTuple,
    SettlementPointReachedEvent.OutputTuple,
    SettlementPointReachedEvent.OutputObject
  >;

  filters: {
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

    "PriceVertexChanged(address,uint8,uint128,uint128)": TypedContractEvent<
      PriceVertexChangedEvent.InputTuple,
      PriceVertexChangedEvent.OutputTuple,
      PriceVertexChangedEvent.OutputObject
    >;
    PriceVertexChanged: TypedContractEvent<
      PriceVertexChangedEvent.InputTuple,
      PriceVertexChangedEvent.OutputTuple,
      PriceVertexChangedEvent.OutputObject
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