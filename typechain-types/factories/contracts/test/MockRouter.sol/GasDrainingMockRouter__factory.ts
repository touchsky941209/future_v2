/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  GasDrainingMockRouter,
  GasDrainingMockRouterInterface,
} from "../../../../contracts/test/MockRouter.sol/GasDrainingMockRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "Side",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pluginClosePositionByLiquidator",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pluginDecreaseLiquidityPosition",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "Side",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pluginDecreasePosition",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    name: "pluginIncreaseLiquidityPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "Side",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    name: "pluginIncreasePosition",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "",
        type: "address",
      },
    ],
    name: "pluginSampleAndAdjustFundingRate",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "pluginTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610673908161001c8239f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c9182631b8278781461028757505080632a5a2cca1461022b5780635dc3d631146101e15780636e43596a146101a95780639154177714610156578063c171f0b0146100f45763f86786f11461007057600080fd5b346100f15760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f1576100a76104c2565b506100b06104ea565b506100b9610530565b506100c2610540565b506100cb61055f565b5060a43573ffffffffffffffffffffffffffffffffffffffff8116036100f1575b6100ec565b80fd5b50346100f15760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f15761012c6104c2565b506101356104ea565b5061013e610530565b50610147610540565b5061015061050d565b506100ec565b50346100f15760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f15761018e6104c2565b506101976104ea565b506101a061057e565b50610150610540565b50346100f15760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f1576101506104c2565b50346100f15760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f1576102196104c2565b506102226104ea565b5061013e61057e565b50346100f15760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f1576102636104c2565b5061026c6104ea565b50610275610530565b5061027e610540565b5061015061055f565b909150346104be5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104be576102c16104c2565b6102c96104ea565b60443573ffffffffffffffffffffffffffffffffffffffff908181168091036104ba578160208701937f23b872dd000000000000000000000000000000000000000000000000000000008552166024870152604486015260643560648601526064855260a085019267ffffffffffffffff938681108582111761048d5791879391849387521695519082875af13d15610480573d82811161045357835192601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011684019081118482101761042657845282526103b791903d86602084013e5b8461059d565b80519081151591826103fe575b50506103ce578280f35b6024925051907f5274afe70000000000000000000000000000000000000000000000000000000082526004820152fd5b819250906020918101031261042257602001518015908115036104225738806103c4565b8380fd5b6024877f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b6103b791506060906103b1565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8680fd5b8280fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036104e557565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff821682036104e557565b6084359073ffffffffffffffffffffffffffffffffffffffff821682036104e557565b6044359060ff821682036104e557565b606435906fffffffffffffffffffffffffffffffff821682036104e557565b608435906fffffffffffffffffffffffffffffffff821682036104e557565b604435906fffffffffffffffffffffffffffffffff821682036104e557565b906105dc57508051156105b257805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b81511580610634575b6105ed575090565b60249073ffffffffffffffffffffffffffffffffffffffff604051917f9996b315000000000000000000000000000000000000000000000000000000008352166004820152fd5b50803b156105e556fea264697066735822122042ea0e575ce4da04551e57a8d5d979970eac6447d65888c9e563dcaa4983122c64736f6c63430008170033";

type GasDrainingMockRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasDrainingMockRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasDrainingMockRouter__factory extends ContractFactory {
  constructor(...args: GasDrainingMockRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      GasDrainingMockRouter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): GasDrainingMockRouter__factory {
    return super.connect(runner) as GasDrainingMockRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasDrainingMockRouterInterface {
    return new Interface(_abi) as GasDrainingMockRouterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GasDrainingMockRouter {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as GasDrainingMockRouter;
  }
}
