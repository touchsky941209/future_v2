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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

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

  export type PositionStruct = {
    margin: BigNumberish;
    size: BigNumberish;
    entryPriceX96: BigNumberish;
    entryFundingRateGrowthX96: BigNumberish;
  };

  export type PositionStructOutput = [
    margin: bigint,
    size: bigint,
    entryPriceX96: bigint,
    entryFundingRateGrowthX96: bigint
  ] & {
    margin: bigint;
    size: bigint;
    entryPriceX96: bigint;
    entryFundingRateGrowthX96: bigint;
  };
}

export declare namespace IConfigurable {
  export type MarketBaseConfigStruct = {
    minMarginPerLiquidityPosition: BigNumberish;
    maxLeveragePerLiquidityPosition: BigNumberish;
    liquidationFeeRatePerLiquidityPosition: BigNumberish;
    minMarginPerPosition: BigNumberish;
    maxLeveragePerPosition: BigNumberish;
    liquidationFeeRatePerPosition: BigNumberish;
    maxPositionLiquidity: BigNumberish;
    maxPositionValueRate: BigNumberish;
    maxSizeRatePerPosition: BigNumberish;
    liquidationExecutionFee: BigNumberish;
    interestRate: BigNumberish;
    maxFundingRate: BigNumberish;
  };

  export type MarketBaseConfigStructOutput = [
    minMarginPerLiquidityPosition: bigint,
    maxLeveragePerLiquidityPosition: bigint,
    liquidationFeeRatePerLiquidityPosition: bigint,
    minMarginPerPosition: bigint,
    maxLeveragePerPosition: bigint,
    liquidationFeeRatePerPosition: bigint,
    maxPositionLiquidity: bigint,
    maxPositionValueRate: bigint,
    maxSizeRatePerPosition: bigint,
    liquidationExecutionFee: bigint,
    interestRate: bigint,
    maxFundingRate: bigint
  ] & {
    minMarginPerLiquidityPosition: bigint;
    maxLeveragePerLiquidityPosition: bigint;
    liquidationFeeRatePerLiquidityPosition: bigint;
    minMarginPerPosition: bigint;
    maxLeveragePerPosition: bigint;
    liquidationFeeRatePerPosition: bigint;
    maxPositionLiquidity: bigint;
    maxPositionValueRate: bigint;
    maxSizeRatePerPosition: bigint;
    liquidationExecutionFee: bigint;
    interestRate: bigint;
    maxFundingRate: bigint;
  };

  export type MarketFeeRateConfigStruct = {
    tradingFeeRate: BigNumberish;
    protocolFeeRate: BigNumberish;
    referralReturnFeeRate: BigNumberish;
    referralParentReturnFeeRate: BigNumberish;
    referralDiscountRate: BigNumberish;
  };

  export type MarketFeeRateConfigStructOutput = [
    tradingFeeRate: bigint,
    protocolFeeRate: bigint,
    referralReturnFeeRate: bigint,
    referralParentReturnFeeRate: bigint,
    referralDiscountRate: bigint
  ] & {
    tradingFeeRate: bigint;
    protocolFeeRate: bigint;
    referralReturnFeeRate: bigint;
    referralParentReturnFeeRate: bigint;
    referralDiscountRate: bigint;
  };
}

export declare namespace IMarketLiquidityPosition {
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

export interface MockMarketManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "globalPositions"
      | "liquidateLiquidityPosition"
      | "liquidatePosition"
      | "liquidityPositions"
      | "marketBaseConfigs"
      | "marketFeeRateConfigs"
      | "marketPriceX96s"
      | "positions"
      | "priceFeed"
      | "setGlobalPosition"
      | "setLiquidityPosition"
      | "setMarketBaseConfig"
      | "setMarketFeeRateConfig"
      | "setMarketPriceX96"
      | "setPosition"
      | "setPriceFeed"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "globalPositions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateLiquidityPosition",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityPositions",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marketBaseConfigs",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marketFeeRateConfigs",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marketPriceX96s",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setGlobalPosition",
    values: [AddressLike, IMarketPosition.GlobalPositionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidityPosition",
    values: [
      AddressLike,
      AddressLike,
      IMarketLiquidityPosition.LiquidityPositionStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketBaseConfig",
    values: [AddressLike, IConfigurable.MarketBaseConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketFeeRateConfig",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketPriceX96",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPosition",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      IMarketPosition.PositionStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceFeed",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "globalPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketBaseConfigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketFeeRateConfigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketPriceX96s",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketBaseConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketFeeRateConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketPriceX96",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceFeed",
    data: BytesLike
  ): Result;
}

export interface MockMarketManager extends BaseContract {
  connect(runner?: ContractRunner | null): MockMarketManager;
  waitForDeployment(): Promise<this>;

  interface: MockMarketManagerInterface;

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

  globalPositions: TypedContractMethod<
    [arg0: AddressLike],
    [IMarketPosition.GlobalPositionStructOutput],
    "view"
  >;

  liquidateLiquidityPosition: TypedContractMethod<
    [_market: AddressLike, _account: AddressLike, _feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  liquidatePosition: TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _side: BigNumberish,
      _feeReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  liquidityPositions: TypedContractMethod<
    [market: AddressLike, account: AddressLike],
    [
      [bigint, bigint, bigint] & {
        margin: bigint;
        liquidity: bigint;
        entryUnrealizedPnLGrowthX64: bigint;
      }
    ],
    "view"
  >;

  marketBaseConfigs: TypedContractMethod<
    [arg0: AddressLike],
    [IConfigurable.MarketBaseConfigStructOutput],
    "view"
  >;

  marketFeeRateConfigs: TypedContractMethod<
    [arg0: AddressLike],
    [IConfigurable.MarketFeeRateConfigStructOutput],
    "view"
  >;

  marketPriceX96s: TypedContractMethod<
    [arg0: AddressLike, _side: BigNumberish],
    [bigint],
    "view"
  >;

  positions: TypedContractMethod<
    [market: AddressLike, account: AddressLike, side: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        margin: bigint;
        size: bigint;
        entryPriceX96: bigint;
        entryFundingRateGrowthX96: bigint;
      }
    ],
    "view"
  >;

  priceFeed: TypedContractMethod<[], [string], "view">;

  setGlobalPosition: TypedContractMethod<
    [arg0: AddressLike, _globalPosition: IMarketPosition.GlobalPositionStruct],
    [void],
    "nonpayable"
  >;

  setLiquidityPosition: TypedContractMethod<
    [
      market: AddressLike,
      account: AddressLike,
      _liquidityPosition: IMarketLiquidityPosition.LiquidityPositionStruct
    ],
    [void],
    "nonpayable"
  >;

  setMarketBaseConfig: TypedContractMethod<
    [
      arg0: AddressLike,
      _marketBaseConfig: IConfigurable.MarketBaseConfigStruct
    ],
    [void],
    "nonpayable"
  >;

  setMarketFeeRateConfig: TypedContractMethod<
    [arg0: AddressLike],
    [void],
    "nonpayable"
  >;

  setMarketPriceX96: TypedContractMethod<
    [_longMarketPriceX96: BigNumberish, _shortMarketPriceX96: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPosition: TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _side: BigNumberish,
      _position: IMarketPosition.PositionStruct
    ],
    [void],
    "nonpayable"
  >;

  setPriceFeed: TypedContractMethod<
    [_priceFeed: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "globalPositions"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [IMarketPosition.GlobalPositionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "liquidateLiquidityPosition"
  ): TypedContractMethod<
    [_market: AddressLike, _account: AddressLike, _feeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidatePosition"
  ): TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _side: BigNumberish,
      _feeReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidityPositions"
  ): TypedContractMethod<
    [market: AddressLike, account: AddressLike],
    [
      [bigint, bigint, bigint] & {
        margin: bigint;
        liquidity: bigint;
        entryUnrealizedPnLGrowthX64: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketBaseConfigs"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [IConfigurable.MarketBaseConfigStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketFeeRateConfigs"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [IConfigurable.MarketFeeRateConfigStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketPriceX96s"
  ): TypedContractMethod<
    [arg0: AddressLike, _side: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "positions"
  ): TypedContractMethod<
    [market: AddressLike, account: AddressLike, side: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        margin: bigint;
        size: bigint;
        entryPriceX96: bigint;
        entryFundingRateGrowthX96: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "priceFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setGlobalPosition"
  ): TypedContractMethod<
    [arg0: AddressLike, _globalPosition: IMarketPosition.GlobalPositionStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLiquidityPosition"
  ): TypedContractMethod<
    [
      market: AddressLike,
      account: AddressLike,
      _liquidityPosition: IMarketLiquidityPosition.LiquidityPositionStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMarketBaseConfig"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      _marketBaseConfig: IConfigurable.MarketBaseConfigStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMarketFeeRateConfig"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMarketPriceX96"
  ): TypedContractMethod<
    [_longMarketPriceX96: BigNumberish, _shortMarketPriceX96: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPosition"
  ): TypedContractMethod<
    [
      _market: AddressLike,
      _account: AddressLike,
      _side: BigNumberish,
      _position: IMarketPosition.PositionStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPriceFeed"
  ): TypedContractMethod<[_priceFeed: AddressLike], [void], "nonpayable">;

  filters: {};
}
