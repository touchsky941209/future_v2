/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface GovernableInterface extends Interface {
  getFunction(
    nameOrSignature: "acceptGov" | "changeGov" | "gov" | "pendingGov"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ChangeGovStarted" | "GovChanged"
  ): EventFragment;

  encodeFunctionData(functionFragment: "acceptGov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeGov",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGov",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "acceptGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingGov", data: BytesLike): Result;
}

export namespace ChangeGovStartedEvent {
  export type InputTuple = [previousGov: AddressLike, newGov: AddressLike];
  export type OutputTuple = [previousGov: string, newGov: string];
  export interface OutputObject {
    previousGov: string;
    newGov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GovChangedEvent {
  export type InputTuple = [previousGov: AddressLike, newGov: AddressLike];
  export type OutputTuple = [previousGov: string, newGov: string];
  export interface OutputObject {
    previousGov: string;
    newGov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Governable extends BaseContract {
  connect(runner?: ContractRunner | null): Governable;
  waitForDeployment(): Promise<this>;

  interface: GovernableInterface;

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

  acceptGov: TypedContractMethod<[], [void], "nonpayable">;

  changeGov: TypedContractMethod<[_newGov: AddressLike], [void], "nonpayable">;

  gov: TypedContractMethod<[], [string], "view">;

  pendingGov: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptGov"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeGov"
  ): TypedContractMethod<[_newGov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingGov"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ChangeGovStarted"
  ): TypedContractEvent<
    ChangeGovStartedEvent.InputTuple,
    ChangeGovStartedEvent.OutputTuple,
    ChangeGovStartedEvent.OutputObject
  >;
  getEvent(
    key: "GovChanged"
  ): TypedContractEvent<
    GovChangedEvent.InputTuple,
    GovChangedEvent.OutputTuple,
    GovChangedEvent.OutputObject
  >;

  filters: {
    "ChangeGovStarted(address,address)": TypedContractEvent<
      ChangeGovStartedEvent.InputTuple,
      ChangeGovStartedEvent.OutputTuple,
      ChangeGovStartedEvent.OutputObject
    >;
    ChangeGovStarted: TypedContractEvent<
      ChangeGovStartedEvent.InputTuple,
      ChangeGovStartedEvent.OutputTuple,
      ChangeGovStartedEvent.OutputObject
    >;

    "GovChanged(address,address)": TypedContractEvent<
      GovChangedEvent.InputTuple,
      GovChangedEvent.OutputTuple,
      GovChangedEvent.OutputObject
    >;
    GovChanged: TypedContractEvent<
      GovChangedEvent.InputTuple,
      GovChangedEvent.OutputTuple,
      GovChangedEvent.OutputObject
    >;
  };
}
