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
import type { NonPayableOverrides } from "../../../common";
import type {
  MarketDescriptorDeployer,
  MarketDescriptorDeployerInterface,
} from "../../../contracts/core/MarketDescriptorDeployer";

const _abi = [
  {
    inputs: [],
    name: "Create2EmptyBytecode",
    type: "error",
  },
  {
    inputs: [],
    name: "Create2FailedDeployment",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "Create2InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "MarketDescriptorAlreadyDeployed",
    type: "error",
  },
  {
    inputs: [],
    name: "SymbolMustNotBeEmpty",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "contract MarketDescriptor",
        name: "descriptor",
        type: "address",
      },
    ],
    name: "MarketDescriptorDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "descriptors",
    outputs: [
      {
        internalType: "contract MarketDescriptor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610c68908161001c8239f35b600080fdfe608060409080825260048036101561001657600080fd5b600091823560e01c9081631734a4661461033b575063c76023161461003a57600080fd5b3461033757602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103335781359367ffffffffffffffff80861161032f573660238701121561032f57858401359381851161032b576024870196602486369201011161032b57841561030457835185888237858101878152818573ffffffffffffffffffffffffffffffffffffffff9384930301902054166102c657845184810190878a83376100fe86828a81018c83820152038084520182610468565b51902061071b865161011287830182610468565b81815286810191610518833980511561029e57519089f51691821561027657823b15610272578451907ff62d188800000000000000000000000000000000000000000000000000000000825284838301528782806101758c8b60248401916104d8565b038183885af1801561026857610203575b5050506101f97fb9f52657b77f62b5acd2631d0d5ce821c380941220e2d92efc5afac1cb68874c959684518682823784818881018b815203019020837fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905584519585879687528601916104d8565b918301520390a180f35b81989792981161023c5784529495506101f97fb9f52657b77f62b5acd2631d0d5ce821c380941220e2d92efc5afac1cb68874c38610186565b60248260418a7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b86513d8a823e3d90fd5b8680fd5b5083517f741752c2000000000000000000000000000000000000000000000000000000008152fd5b8488517f4ca249dc000000000000000000000000000000000000000000000000000000008152fd5b84517f4f0555c00000000000000000000000000000000000000000000000000000000081528083018590528061030060248201898c6104d8565b0390fd5b83517fa876bbfb000000000000000000000000000000000000000000000000000000008152fd5b8580fd5b8480fd5b8280fd5b5080fd5b838584923461033357602093847ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261046457803567ffffffffffffffff9182821161032b573660238301121561032b578181013592831161043857506103cb867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160184610468565b818352366024838301011161032f578185926024889301838601378301015283825191805190855b82811061042757505073ffffffffffffffffffffffffffffffffffffffff9394839182019081520301902054169051908152f35b8181018401518582015283016103f3565b8560416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8380fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176104a957604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601376000858286010152011601019056fe60808060405234610016576106ff908161001c8239f35b600080fdfe60806040908082526004918236101561001757600080fd5b600091823560e01c90816306fdde031461043f57508063313ce5671461040657806395d89b41146102e55763f62d18881461005157600080fd5b346102e157602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102dd5780359367ffffffffffffffff928386116102d957366023870112156102d9578583013592848411610283577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938251976100e38587601f850116018a610659565b81895236602483830101116102d5578188926024879301838c01378901015285549161010e83610606565b6102af57508651948511610283575061012690610606565b601f8111610222575b508091601f8411600114610188575050829382939261017d575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c191617815580f35b015190503880610149565b8480528316947f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563929185905b87821061020a5750508360019596106101d3575b505050811b01815580f35b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690553880806101c8565b806001859682949686015181550195019301906101b4565b8480527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f850160051c810191838610610279575b601f0160051c01905b81811061026e575061012f565b858155600101610261565b9091508190610258565b8560416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b517fba5be5e5000000000000000000000000000000000000000000000000000000008152fd5b8780fd5b8480fd5b8280fd5b5080fd5b50903461040357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610403578151908080549061032582610606565b808552916020916001918281169081156103b85750600114610361575b61035d868861035382890383610659565b51918291826105a0565b0390f35b80809550527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b8385106103a5575050505081016020016103538261035d86610342565b8054868601840152938201938101610388565b61035d989650879450602093506103539592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b820101929486610342565b80fd5b50346102e157817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102e1576020905160128152f35b919050346102dd57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102dd576020927f4571756174696f6e204d61726b6574205632202d200000000000000000000000602084015260359080948154916104aa83610606565b9260019081811690811561055557506001146104f7575b61035d8787610353828c037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101845283610659565b9080809394959850527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b8483106105425750505050820160350192506103538261035d86806104c1565b8054878401890152918301918101610522565b905061035d9850610353955060359350879492507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152801515028201019486806104c1565b60208082528251818301819052939260005b8581106105f2575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b8181018301518482016040015282016105b2565b90600182811c9216801561064f575b602083101461062057565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610615565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761069a57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212202b4e90f2f93c7d2ff39fcdb771e07aae19ab5c23d9a6dede5bddf1b75f84509b64736f6c63430008170033a2646970667358221220ed1223c5f67627686ba9d56bceafe6c880c642bde8f5e0fc3eb509a75632ec4c64736f6c63430008170033";

type MarketDescriptorDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketDescriptorDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketDescriptorDeployer__factory extends ContractFactory {
  constructor(...args: MarketDescriptorDeployerConstructorParams) {
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
      MarketDescriptorDeployer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MarketDescriptorDeployer__factory {
    return super.connect(runner) as MarketDescriptorDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketDescriptorDeployerInterface {
    return new Interface(_abi) as MarketDescriptorDeployerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketDescriptorDeployer {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MarketDescriptorDeployer;
  }
}
