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
  LiquidityPositionUtil,
  LiquidityPositionUtilInterface,
} from "../../../contracts/libraries/LiquidityPositionUtil";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "requiredLiquidity",
        type: "uint128",
      },
    ],
    name: "InsufficientLiquidityToDecrease",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientMargin",
    type: "error",
  },
  {
    inputs: [],
    name: "LastLiquidityPositionCannotBeClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "margin",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "maxLeverage",
        type: "uint32",
      },
    ],
    name: "LeverageTooHigh",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "requiredAccount",
        type: "address",
      },
    ],
    name: "LiquidityPositionNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "margin",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "maintenanceMargin",
        type: "uint256",
      },
    ],
    name: "RiskRateTooHigh",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "margin",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "maintenanceMargin",
        type: "uint256",
      },
    ],
    name: "RiskRateTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeCastOverflowedUintToInt",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "realizedPnLDelta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "LiquidityPositionDecreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginDelta",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "realizedPnLDelta",
        type: "int256",
      },
    ],
    name: "LiquidityPositionIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "liquidationLoss",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "unrealizedPnLGrowthAfterX64",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeReceiver",
        type: "address",
      },
    ],
    name: "LiquidityPositionLiquidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "unrealizedPnLGrowthAfterX64",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "previousSPPriceAfterX96",
        type: "uint160",
      },
    ],
    name: "SettlementPointReached",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6080806040523461001c576118bf90816100228239308160070152f35b600080fdfe6080604052307f000000000000000000000000000000000000000000000000000000000000000014600436101561003557600080fd5b60003560e01c80637a16073a146109595780638bd761fc1461051957639f3a39301461006057600080fd5b6105145760e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105145760a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbc3601126105145760405167ffffffffffffffff9060a08101828111828210176104e55760405261013c6100e2610eaf565b8083526100ed610ed2565b60208401526100fa610ef5565b6040840152610107610f14565b606084015273ffffffffffffffffffffffffffffffffffffffff8061012a610f33565b92836080870152169116600435610fdc565b73ffffffffffffffffffffffffffffffffffffffff60208201511660005260176004350160205260406000209060405161017581610e52565b82546fffffffffffffffffffffffffffffffff8116825260801c936001602083019486865201546040830152600094156000146104bc576fffffffffffffffffffffffffffffffff60608401511615610471576fffffffffffffffffffffffffffffffff60408401511690602435541611610418576fffffffffffffffffffffffffffffffff905b51166fffffffffffffffffffffffffffffffff6040830151168101809111610442578361022991610f6f565b926000841315610418577ffc078acd58e730acee5c6d755ff4a1cefb7476824c043d670c2df0717f1cc8986080856fffffffffffffffffffffffffffffffff61027360209861149c565b965116906fffffffffffffffffffffffffffffffff60608701511680610385575b50816102a2916024356114f1565b8487015173ffffffffffffffffffffffffffffffffffffffff166000908152600435601701885260409020608082901b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff97909716968717815560016016600435015491015573ffffffffffffffffffffffffffffffffffffffff855116936fffffffffffffffffffffffffffffffff80604073ffffffffffffffffffffffffffffffffffffffff8b8a0151169801511692604051938452888a8501521660408301526060820152a3604051908152f35b610393906102a29293610f8b565b80926103be63ffffffff6024355460401c16836fffffffffffffffffffffffffffffffff8c16611578565b601560043501887fffffffffffffffffffffffffffffffff000000000000000000000000000000006fffffffffffffffffffffffffffffffff61040b816060865495015116828516610f8b565b1691161790559150610294565b60046040517f41c092a9000000000000000000000000000000000000000000000000000000008152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b602473ffffffffffffffffffffffffffffffffffffffff602085015116604051907f27e1c7370000000000000000000000000000000000000000000000000000000082526004820152fd5b5092506fffffffffffffffffffffffffffffffff6104df8460136004350161132d565b936101fd565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b506105145760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105145760807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbc360112610514576040516080810181811067ffffffffffffffff8211176104e557604052610597610eaf565b8082526105a2610ed2565b602083015260843573ffffffffffffffffffffffffffffffffffffffff81169081810361051457604084015260a43573ffffffffffffffffffffffffffffffffffffffff811681036105145760608401526106169173ffffffffffffffffffffffffffffffffffffffff1690600435610fdc565b73ffffffffffffffffffffffffffffffffffffffff60208201511660005260176004350160205260406000206040519061064f82610e52565b60018154916fffffffffffffffffffffffffffffffff831684528260801c60208501520154604083015260801c1561090e576106ac6106938260136004350161132d565b6fffffffffffffffffffffffffffffffff835116610f6f565b906106da6fffffffffffffffffffffffffffffffff60208301511663ffffffff6024355460601c1602611650565b6001602435015460c01c01600083121580610905575b6108ce57506fffffffffffffffffffffffffffffffff602061072092015116601860043501601360043501611404565b6107346001602435015460c01c8092610f56565b6004356016018054939060008312156108b357826000036fffffffffffffffffffffffffffffffff601560043501541661076e8183611749565b91811561088457680100000000000000009009610849575b60209561079561079b926115eb565b90610f56565b8091555b73ffffffffffffffffffffffffffffffffffffffff858301511660005260176004350185526000600160408220828155015573ffffffffffffffffffffffffffffffffffffffff8251169073ffffffffffffffffffffffffffffffffffffffff606081888601511694015116906040519485528685015260408401527f16d79b72760d933fabf2165df00544bb26ec3c8f77980795c00bfd8bdfd4854560603394a4604051908152f35b6001810180911115610786577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b5060209384600435016108c7848254610f6f565b905561079f565b82604491604051917f4c12682600000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b508281106106f0565b602473ffffffffffffffffffffffffffffffffffffffff602084015116604051907f27e1c7370000000000000000000000000000000000000000000000000000000082526004820152fd5b50610514576101007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105145760c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbc360112610514576101406040526109c1610eaf565b806080526109cd610ed2565b60a0526109d8610ef5565b60c0526109e3610f14565b60e0526109ee610f33565b61010081905260e4359173ffffffffffffffffffffffffffffffffffffffff831683036105145773ffffffffffffffffffffffffffffffffffffffff8091610a419460a060800152169116600435610fdc565b73ffffffffffffffffffffffffffffffffffffffff60206080015116600052601760043501602052604060002060405190610a7b82610e52565b600181546fffffffffffffffffffffffffffffffff8116845260801c918260208501520154604083015215610e06576fffffffffffffffffffffffffffffffff6020820151166fffffffffffffffffffffffffffffffff60606080015116808210610dcf5782610af08160136004350161132d565b90610b2f6fffffffffffffffffffffffffffffffff825116610b296fffffffffffffffffffffffffffffffff6040608001511685610f56565b90610f6f565b60008112610418576040926fffffffffffffffffffffffffffffffff602084015116926fffffffffffffffffffffffffffffffff6060608001511680610d8f575b505082610b7c8361149c565b926fffffffffffffffffffffffffffffffff821615610d295790610ba2916024356114f1565b6fffffffffffffffffffffffffffffffff846080015116610cfc575b60a05173ffffffffffffffffffffffffffffffffffffffff166000908152600435601701602052849020608084901b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff84161781556001601660043501549101555b6fffffffffffffffffffffffffffffffff846080015116917f648fc5290abcf53edab5148d347934c16f51a23f83b80da48f31ca067156aa6260a073ffffffffffffffffffffffffffffffffffffffff608051169273ffffffffffffffffffffffffffffffffffffffff602060800151169473ffffffffffffffffffffffffffffffffffffffff836080015116906fffffffffffffffffffffffffffffffff808b51948a865216998a6020860152168a84015260608301526080820152a382519182526020820152f35b610d2463ffffffff60243554861c16846fffffffffffffffffffffffffffffffff8516611578565b610bbe565b505090610d4d6fffffffffffffffffffffffffffffffff9182866080015116610f8b565b16836080015260009073ffffffffffffffffffffffffffffffffffffffff60206080015116600052601760043501602052600060018582208281550155610c32565b6fffffffffffffffffffffffffffffffff9294508291610dbc602092601860043501601360043501611404565b015160e051831691160316918480610b70565b60449250604051917fac0bdb0200000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b602473ffffffffffffffffffffffffffffffffffffffff60206080015116604051907f27e1c7370000000000000000000000000000000000000000000000000000000082526004820152fd5b6060810190811067ffffffffffffffff8211176104e557604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176104e557604052565b6044359073ffffffffffffffffffffffffffffffffffffffff8216820361051457565b6064359073ffffffffffffffffffffffffffffffffffffffff8216820361051457565b608435906fffffffffffffffffffffffffffffffff8216820361051457565b60a435906fffffffffffffffffffffffffffffffff8216820361051457565b60c4359073ffffffffffffffffffffffffffffffffffffffff8216820361051457565b8181039291600013801582851316918412161761044257565b9190916000838201938412911290801582169115161761044257565b9190916fffffffffffffffffffffffffffffffff8080941691160191821161044257565b7f800000000000000000000000000000000000000000000000000000000000000081146104425760000390565b9160138301546fffffffffffffffffffffffffffffffff8160801c91160190811561132757601484018054906001918260ff8260a01c1614958660001461131e578360ff60025b160361129a57602073ffffffffffffffffffffffffffffffffffffffff916024604051809481937f9fae7541000000000000000000000000000000000000000000000000000000008352818b166004840152165afa90811561128e5760009161125f575b50945b73ffffffffffffffffffffffffffffffffffffffff809616936110af87841686610f56565b971561124f576000825b891812159760008112611241575b60158a015460201b73ffffffffffffffffffffffffffffffff0000000016891561123a57825b6002811015611203576112325782935b6111088282856117f5565b946004811015611203578416841492836111ee575b5050506111b0575b50927fffffffffffffffffffffffff00000000000000000000000000000000000000008193926111917e91c27ee24e54e570bee952b9f51bcde7e09dd42f1fad30f5ae41d5bbdb740999601661117e60409b9a996115eb565b9c019b8c54916000146111a75790610f6f565b809a5516179055835195865260208601521692a2565b610b2990610faf565b8196959493929601809111610442577fffffffffffffffffffffffff0000000000000000000000000000000000000000604096929394959650611125565b9091809350156108845709151538808061111d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000936110fd565b60006110ed565b61124a90610faf565b6110c7565b600061125a83610faf565b6110b9565b611281915060203d602011611287575b6112798183610e6e565b81019061168a565b38611087565b503d61126f565b6040513d6000823e3d90fd5b602073ffffffffffffffffffffffffffffffffffffffff916024604051809481937f77c2fdc2000000000000000000000000000000000000000000000000000000008352818b166004840152165afa90811561128e576000916112ff575b509461108a565b611318915060203d602011611287576112798183610e6e565b386112f8565b8360ff81611023565b50505050565b60030154604082015161133f91610f56565b6000808212611375575061136d906fffffffffffffffffffffffffffffffff602061137294015116906116b6565b6115eb565b90565b906fffffffffffffffffffffffffffffffff602061139c6801000000000000000093610faf565b940151166113aa81856116b6565b93096113c3575b506113be611372916115eb565b610faf565b600182018092116113d757506113be6113b1565b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526011600452fd5b600201805490926fffffffffffffffffffffffffffffffff808316919091038116928315919082611487575b505061145d577fffffffffffffffffffffffffffffffff0000000000000000000000000000000016179055565b60046040517fb32dc73f000000000000000000000000000000000000000000000000000000008152fd5b90915054908160801c91161715153880611430565b6fffffffffffffffffffffffffffffffff908181116114b9571690565b604490604051907f6dfcc650000000000000000000000000000000000000000000000000000000008252608060048301526024820152fd5b909161151d6001916fffffffffffffffffffffffffffffffff63ffffffff855460601c16911602611650565b91015460c01c0160008212801561156e575b611537575050565b60449250604051917f10e55ad200000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b508181101561152f565b9163ffffffff169081830290838204831484151715610442576fffffffffffffffffffffffffffffffff168091106115af57505050565b60649350604051927f42482918000000000000000000000000000000000000000000000000000000008452600484015260248301526044820152fd5b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81116116155790565b602490604051907f24775e060000000000000000000000000000000000000000000000000000000082526004820152fd5b8115610884570490565b8061165b5750600090565b6305f5e1007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60019201040190565b90816020910312610514575173ffffffffffffffffffffffffffffffffffffffff811681036105145790565b90808202917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8282099183808410930392808403931461174057680100000000000000009183831115611716570990828211900360c01b910360401c1790565b60046040517f227bc153000000000000000000000000000000000000000000000000000000008152fd5b50505060401c90565b908160401b9068010000000000000000927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848209938380861095039480860395146117e857848311156117165782910981600003821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b5050906113729250611646565b9091828202917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848209938380861095039480860395146117e85784831115611716578291098160000382168092046002808260030218808302820302808302820302808302820302808302820302808302820302809202900302936001838060000304019084831190030292030417029056fea26469706673582212206849e62d5f15d700516b532610c46c2b2e5f20f858237079e2d55384ba4f5cde64736f6c63430008170033";

type LiquidityPositionUtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityPositionUtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityPositionUtil__factory extends ContractFactory {
  constructor(...args: LiquidityPositionUtilConstructorParams) {
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
      LiquidityPositionUtil & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): LiquidityPositionUtil__factory {
    return super.connect(runner) as LiquidityPositionUtil__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityPositionUtilInterface {
    return new Interface(_abi) as LiquidityPositionUtilInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LiquidityPositionUtil {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as LiquidityPositionUtil;
  }
}