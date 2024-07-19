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

export interface IRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "EFC"
      | "pluginCollectArchitectRewardBatch"
      | "pluginCollectFarmLiquidityRewardBatch"
      | "pluginCollectFarmReferralRewardBatch"
      | "pluginCollectFarmRiskBufferFundRewardBatch"
      | "pluginCollectReferralFee"
      | "pluginCollectStakingRewardBatch"
      | "pluginCollectV3PosStakingRewardBatch"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "EFC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pluginCollectArchitectRewardBatch",
    values: [AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginCollectFarmLiquidityRewardBatch",
    values: [AddressLike[], AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginCollectFarmReferralRewardBatch",
    values: [AddressLike[], BigNumberish[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginCollectFarmRiskBufferFundRewardBatch",
    values: [AddressLike[], AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginCollectReferralFee",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginCollectStakingRewardBatch",
    values: [AddressLike, AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginCollectV3PosStakingRewardBatch",
    values: [AddressLike, AddressLike, BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "EFC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pluginCollectArchitectRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginCollectFarmLiquidityRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginCollectFarmReferralRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginCollectFarmRiskBufferFundRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginCollectReferralFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginCollectStakingRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginCollectV3PosStakingRewardBatch",
    data: BytesLike
  ): Result;
}

export interface IRouter extends BaseContract {
  connect(runner?: ContractRunner | null): IRouter;
  waitForDeployment(): Promise<this>;

  interface: IRouterInterface;

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

  EFC: TypedContractMethod<[], [string], "view">;

  pluginCollectArchitectRewardBatch: TypedContractMethod<
    [receiver: AddressLike, tokenIDs: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  pluginCollectFarmLiquidityRewardBatch: TypedContractMethod<
    [pools: AddressLike[], owner: AddressLike, receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  pluginCollectFarmReferralRewardBatch: TypedContractMethod<
    [
      pools: AddressLike[],
      referralTokens: BigNumberish[],
      receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  pluginCollectFarmRiskBufferFundRewardBatch: TypedContractMethod<
    [pools: AddressLike[], owner: AddressLike, receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  pluginCollectReferralFee: TypedContractMethod<
    [pool: AddressLike, referralToken: BigNumberish, receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  pluginCollectStakingRewardBatch: TypedContractMethod<
    [owner: AddressLike, receiver: AddressLike, ids: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  pluginCollectV3PosStakingRewardBatch: TypedContractMethod<
    [owner: AddressLike, receiver: AddressLike, ids: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "EFC"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pluginCollectArchitectRewardBatch"
  ): TypedContractMethod<
    [receiver: AddressLike, tokenIDs: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginCollectFarmLiquidityRewardBatch"
  ): TypedContractMethod<
    [pools: AddressLike[], owner: AddressLike, receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginCollectFarmReferralRewardBatch"
  ): TypedContractMethod<
    [
      pools: AddressLike[],
      referralTokens: BigNumberish[],
      receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginCollectFarmRiskBufferFundRewardBatch"
  ): TypedContractMethod<
    [pools: AddressLike[], owner: AddressLike, receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginCollectReferralFee"
  ): TypedContractMethod<
    [pool: AddressLike, referralToken: BigNumberish, receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginCollectStakingRewardBatch"
  ): TypedContractMethod<
    [owner: AddressLike, receiver: AddressLike, ids: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginCollectV3PosStakingRewardBatch"
  ): TypedContractMethod<
    [owner: AddressLike, receiver: AddressLike, ids: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  filters: {};
}