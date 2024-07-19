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
  FundingRateUtil,
  FundingRateUtilInterface,
} from "../../../contracts/libraries/FundingRateUtil";

const _abi = [
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
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
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "SafeCastOverflowedIntDowncast",
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
        indexed: false,
        internalType: "int256",
        name: "fundingRateDeltaX96",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int192",
        name: "longFundingRateGrowthAfterX96",
        type: "int192",
      },
      {
        indexed: false,
        internalType: "int192",
        name: "shortFundingRateGrowthAfterX96",
        type: "int192",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "lastAdjustFundingRateTime",
        type: "uint64",
      },
    ],
    name: "FundingRateGrowthAdjusted",
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
        internalType: "uint16",
        name: "sampleCountAfter",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "int176",
        name: "cumulativePremiumRateAfterX96",
        type: "int176",
      },
    ],
    name: "GlobalFundingRateSampleAdjusted",
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
    ],
    name: "GlobalLiquidityPositionPnLGrowthIncreasedByFundingFee",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6080806040523461001c57610ec1908161002282393081602f0152f35b600080fdfe6080604090808252600436101561001557600080fd5b600091823560e01c636ac1b34a1461002c57600080fd5b307f00000000000000000000000000000000000000000000000000000000000000001461034b5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261034b576004359060443573ffffffffffffffffffffffffffffffffffffffff808216809203610347576064359081169485820361034357601485015460a01c60ff1660010361033957600160ff60025b16036102d3575082517f9fae7541000000000000000000000000000000000000000000000000000000008152856004820152602081602481865afa9081156102c95787916102aa575b50915b6002602435019261013263ffffffff91828654169085896103f0565b929061013c578880f35b602060249554918751968780927f9fae75410000000000000000000000000000000000000000000000000000000082528c60048301525afa9489861561029f57946080979467ffffffffffffffff946101c894601e99947fe09f191d2a12b24aa9b3ea59ba68035462197278a11a36632ec776509918ba579c999561026e575b5060201c1691876106d4565b9291959094601a81018054601c8301867fffffffffffffffff00000000000000000000000000000000000000000000000091828154169077ffffffffffffffffffffffffffffffffffffffffffffffff91858316179055601b860194855494601d880185815416878516179055848d8416911617905516911617905501541692825194855260170b602085015260170b908301526060820152a238808080808080808880f35b61029191955060203d602011610298575b610289818361034f565b8101906103bf565b93386101bc565b503d61027f565b8751903d90823e3d90fd5b6102c3915060203d60201161029857610289818361034f565b38610113565b84513d89823e3d90fd5b7f77c2fdc2000000000000000000000000000000000000000000000000000000008152856004820152602081602481865afa9081156102c957879161031a575b5091610116565b610333915060203d60201161029857610289818361034f565b38610313565b600160ff816100ca565b8680fd5b8580fd5b8280fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761039057604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b908160209103126103eb575173ffffffffffffffffffffffffffffffffffffffff811681036103eb5790565b600080fd5b9391929092601e850194855467ffffffffffffffff9384821691610e10830192868411610541578642116105b6578660059742169182828716106105ae575b61ffff809981809660401c1602160116900316926005841061059f576fffffffffffffffffffffffffffffffff8082541673ffffffffffffffffffffffffffffffffffffffff96878060018601541691169061048c828285610de9565b9282156105705709610534575b8181116104fc57926040959260ff60147f4da4ed83680e00e4e9739da98e842ed30b0099a9c856fe9776b3c6cd77fa72589997946104df971692015460a01c168c6109d8565b9690975483519581851c16865260501d60150b60208601521692a2565b604490604051907f6dfcc650000000000000000000000000000000000000000000000000000000008252608060048301526024820152fd5b6001810180911115610499575b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50600097508796505050505050565b85925061042f565b60446040517f6dfcc65000000000000000000000000000000000000000000000000000000000815260406004820152426024820152fd5b7f800000000000000000000000000000000000000000000000000000000000000081146105415760000390565b9190916000838201938412911290801582169115161761054157565b9060170b9060170b0390777fffffffffffffffffffffffffffffffffffffffffffffff82137fffffffffffffffff80000000000000000000000000000000000000000000000083121761054157565b9060170b9060170b01907fffffffffffffffff8000000000000000000000000000000000000000000000008212777fffffffffffffffffffffffffffffffffffffffffffffff83131761054157565b93949263ffffffff6106e99193929316610bda565b90818113156109b05750935b6040519360c0850185811067ffffffffffffffff821117610390576040526018810154946fffffffffffffffffffffffffffffffff928387169687835260801c9260208301918483526019820154868116604086015260801c6060850152601a820154936017956080820195870b8652601b840154870b9a60a083019b8c5260008d121560001461099b5750505192518616968a9387165b878116948515610984576c0100000000000000000000000073ffffffffffffffffffffffffffffffffffffffff809516916107c88184610cba565b9209610949575b6107db6107e091610b37565b610b92565b976000998a8a8a0b13610839575b5050505050505051810b9451900b9360008612156000146108205761081d929161081791610636565b93610685565b90565b9293610836929161083091610636565b92610685565b91565b8993949596979a828216988981116000146108fa5750506108c96108c47f139ddc48573566a7f5344459afcd32fe142cf853a55d23be42892e08600916789795602097956108d39560169577ffffffffffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffff0000000060158f01548d1b169416920316610de9565b610b37565b960195865461061a565b8095556040519485521692a26108f45760005b925b388080808080806107ee565b816108e6565b9650979650505050505081156000146109165750505b926108e8565b61094492506107db916108c49177ffffffffffffffffffffffffffffffffffffffffffffffff871690610de9565b610910565b60018101809111156107cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50509351985198850b9890940b9695505050505050565b94509790506109a98b6105ed565b939761078d565b906109ba816105ed565b8212156109d1576109cb91506105ed565b936106f5565b50936106f5565b939594916fffffffffffffffffffffffffffffffff9160ff16600103610b2e571660150b7fffffffffffffffffffff800000000000000000000000000000000000000000008114610541576000035b600561ffff8093160491845491627fffff828460401c16858101938085168097600162ffffff9384921694011601160260011c1660020b0260150b8260501d01906102d08260150b9410610ad55750505067ffffffffffffffff91610aa6610aac926000811215600014610ab657610a9e90610c0d565b915b82610c46565b9061061a565b9316905560019190565b610aca610ac5610acf926105ed565b610c0d565b6105ed565b91610aa0565b67ffffffffffffffff90921660409290921b69ffff0000000000000000169190911760509190911b7fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001617909255506000925082919050565b1660150b610a27565b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111610b615790565b602490604051907f24775e060000000000000000000000000000000000000000000000000000000082526004820152fd5b908160170b91808303610ba25750565b604490604051907f327269a700000000000000000000000000000000000000000000000000000000825260c060048301526024820152fd5b6305f5e1006c01000000000000000000000000610bf683610d51565b9209610bff5790565b600181018091116105415790565b80610c185750600090565b621faf407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60019201040190565b9063ffffffff610c569116610bda565b60008282039212818312811691831390151617610541576a04189374bc6a7ef9db22d19081811315610c86575090565b7ffffffffffffffffffffffffffffffffffffffffffffbe76c8b4395810624dd2f915081811215610cb5575090565b905090565b90808202917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82820991838084109303928084039314610d48576c010000000000000000000000009183831115610d1e570990828211900360a01b910360601c1790565b60046040517f227bc153000000000000000000000000000000000000000000000000000000008152fd5b50505060601c90565b8060601b6c010000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81840990828083109203918083039214610ddc576305f5e1009082821115610d1e577facbe0e98f503f8881186e60dbb7f727bf36b7213ee9f5a78c767074b22e90e21940990828211900360f81b910360081c170290565b50506305f5e10091500490565b9091828202917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84820993838086109503948086039514610e7d5784831115610d1e5782910981600003821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b50508092501561057057049056fea264697066735822122030b6d7a33c254d16fc587d31215bfcea01da40c096388070f46f48435937c81b64736f6c63430008170033";

type FundingRateUtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundingRateUtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundingRateUtil__factory extends ContractFactory {
  constructor(...args: FundingRateUtilConstructorParams) {
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
      FundingRateUtil & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FundingRateUtil__factory {
    return super.connect(runner) as FundingRateUtil__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundingRateUtilInterface {
    return new Interface(_abi) as FundingRateUtilInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FundingRateUtil {
    return new Contract(address, _abi, runner) as unknown as FundingRateUtil;
  }
}