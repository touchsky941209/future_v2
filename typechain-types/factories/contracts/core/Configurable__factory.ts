/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Configurable,
  ConfigurableInterface,
} from "../../../contracts/core/Configurable";

const _abi = [
  {
    inputs: [],
    name: "Forbidden",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "protocolFeeRate",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "referralReturnFeeRate",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "referralParentReturnFeeRate",
        type: "uint32",
      },
    ],
    name: "InvalidFeeRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "interestRate",
        type: "uint32",
      },
    ],
    name: "InvalidInterestRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "invalidLiquidationFeeRatePerLiquidityPosition",
        type: "uint32",
      },
    ],
    name: "InvalidLiquidationFeeRatePerLiquidityPosition",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "liquidationFeeRatePerPosition",
        type: "uint32",
      },
    ],
    name: "InvalidLiquidationFeeRatePerPosition",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "liquidationVertexIndex",
        type: "uint8",
      },
    ],
    name: "InvalidLiquidationVertexIndex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxFundingRate",
        type: "uint32",
      },
    ],
    name: "InvalidMaxFundingRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxLeveragePerLiquidityPosition",
        type: "uint32",
      },
    ],
    name: "InvalidMaxLeveragePerLiquidityPosition",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxLeveragePerPosition",
        type: "uint32",
      },
    ],
    name: "InvalidMaxLeveragePerPosition",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "maxPositionLiquidity",
        type: "uint128",
      },
    ],
    name: "InvalidMaxPositionLiquidity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxPositionValueRate",
        type: "uint32",
      },
    ],
    name: "InvalidMaxPositionValueRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "maxPriceImpactLiquidity",
        type: "uint128",
      },
    ],
    name: "InvalidMaxPriceImpactLiquidity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxSizeRatePerPosition",
        type: "uint32",
      },
    ],
    name: "InvalidMaxSizeRatePerPosition",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "protocolFeeRate",
        type: "uint32",
      },
    ],
    name: "InvalidProtocolFeeRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "referralDiscountRate",
        type: "uint32",
      },
    ],
    name: "InvalidReferralDiscountRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "referralParentReturnFeeRate",
        type: "uint32",
      },
    ],
    name: "InvalidReferralParentReturnFeeRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "referralReturnFeeRate",
        type: "uint32",
      },
    ],
    name: "InvalidReferralReturnFeeRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tradingFeeRate",
        type: "uint32",
      },
    ],
    name: "InvalidTradingFeeRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "InvalidVertex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredLength",
        type: "uint256",
      },
    ],
    name: "InvalidVerticesLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
    ],
    name: "MarketAlreadyEnabled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
    ],
    name: "MarketNotEnabled",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGov",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGov",
        type: "address",
      },
    ],
    name: "ChangeGovStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGov",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGov",
        type: "address",
      },
    ],
    name: "GovChanged",
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
        components: [
          {
            internalType: "uint64",
            name: "minMarginPerLiquidityPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "minMarginPerPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "maxPositionLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "maxPositionValueRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxSizeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "liquidationExecutionFee",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "interestRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxFundingRate",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct IConfigurable.MarketBaseConfig",
        name: "newCfg",
        type: "tuple",
      },
    ],
    name: "MarketBaseConfigChanged",
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
        components: [
          {
            internalType: "uint64",
            name: "minMarginPerLiquidityPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "minMarginPerPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "maxPositionLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "maxPositionValueRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxSizeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "liquidationExecutionFee",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "interestRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxFundingRate",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct IConfigurable.MarketBaseConfig",
        name: "baseCfg",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "tradingFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "protocolFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralParentReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralDiscountRate",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct IConfigurable.MarketFeeRateConfig",
        name: "feeRateCfg",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "maxPriceImpactLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "liquidationVertexIndex",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "balanceRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "premiumRate",
                type: "uint32",
              },
            ],
            internalType: "struct IConfigurable.VertexConfig[10]",
            name: "vertices",
            type: "tuple[10]",
          },
        ],
        indexed: false,
        internalType: "struct IConfigurable.MarketPriceConfig",
        name: "priceCfg",
        type: "tuple",
      },
    ],
    name: "MarketConfigEnabled",
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
        components: [
          {
            internalType: "uint32",
            name: "tradingFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "protocolFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralParentReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralDiscountRate",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct IConfigurable.MarketFeeRateConfig",
        name: "newCfg",
        type: "tuple",
      },
    ],
    name: "MarketFeeRateConfigChanged",
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
        components: [
          {
            internalType: "uint128",
            name: "maxPriceImpactLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "liquidationVertexIndex",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "balanceRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "premiumRate",
                type: "uint32",
              },
            ],
            internalType: "struct IConfigurable.VertexConfig[10]",
            name: "vertices",
            type: "tuple[10]",
          },
        ],
        indexed: false,
        internalType: "struct IConfigurable.MarketPriceConfig",
        name: "newCfg",
        type: "tuple",
      },
    ],
    name: "MarketPriceConfigChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "usd",
        type: "address",
      },
    ],
    name: "USDEnabled",
    type: "event",
  },
  {
    inputs: [],
    name: "USD",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGov",
        type: "address",
      },
    ],
    name: "changeGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint64",
                name: "minMarginPerLiquidityPosition",
                type: "uint64",
              },
              {
                internalType: "uint32",
                name: "maxLeveragePerLiquidityPosition",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "liquidationFeeRatePerLiquidityPosition",
                type: "uint32",
              },
              {
                internalType: "uint64",
                name: "minMarginPerPosition",
                type: "uint64",
              },
              {
                internalType: "uint32",
                name: "maxLeveragePerPosition",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "liquidationFeeRatePerPosition",
                type: "uint32",
              },
              {
                internalType: "uint128",
                name: "maxPositionLiquidity",
                type: "uint128",
              },
              {
                internalType: "uint32",
                name: "maxPositionValueRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "maxSizeRatePerPosition",
                type: "uint32",
              },
              {
                internalType: "uint64",
                name: "liquidationExecutionFee",
                type: "uint64",
              },
              {
                internalType: "uint32",
                name: "interestRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "maxFundingRate",
                type: "uint32",
              },
            ],
            internalType: "struct IConfigurable.MarketBaseConfig",
            name: "baseConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "tradingFeeRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "protocolFeeRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "referralReturnFeeRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "referralParentReturnFeeRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "referralDiscountRate",
                type: "uint32",
              },
            ],
            internalType: "struct IConfigurable.MarketFeeRateConfig",
            name: "feeRateConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "maxPriceImpactLiquidity",
                type: "uint128",
              },
              {
                internalType: "uint8",
                name: "liquidationVertexIndex",
                type: "uint8",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "balanceRate",
                    type: "uint32",
                  },
                  {
                    internalType: "uint32",
                    name: "premiumRate",
                    type: "uint32",
                  },
                ],
                internalType: "struct IConfigurable.VertexConfig[10]",
                name: "vertices",
                type: "tuple[10]",
              },
            ],
            internalType: "struct IConfigurable.MarketPriceConfig",
            name: "priceConfig",
            type: "tuple",
          },
        ],
        internalType: "struct IConfigurable.MarketConfig",
        name: "_cfg",
        type: "tuple",
      },
    ],
    name: "enableMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
    ],
    name: "isEnabledMarket",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
    ],
    name: "marketBaseConfigs",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "minMarginPerLiquidityPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "minMarginPerPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "maxPositionLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "maxPositionValueRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxSizeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "liquidationExecutionFee",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "interestRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxFundingRate",
            type: "uint32",
          },
        ],
        internalType: "struct IConfigurable.MarketBaseConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "market",
        type: "address",
      },
    ],
    name: "marketConfigs",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "minMarginPerLiquidityPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "minMarginPerPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "maxPositionLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "maxPositionValueRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxSizeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "liquidationExecutionFee",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "interestRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxFundingRate",
            type: "uint32",
          },
        ],
        internalType: "struct IConfigurable.MarketBaseConfig",
        name: "baseConfig",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "tradingFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "protocolFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralParentReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralDiscountRate",
            type: "uint32",
          },
        ],
        internalType: "struct IConfigurable.MarketFeeRateConfig",
        name: "feeRateConfig",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "maxPriceImpactLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "liquidationVertexIndex",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "balanceRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "premiumRate",
                type: "uint32",
              },
            ],
            internalType: "struct IConfigurable.VertexConfig[10]",
            name: "vertices",
            type: "tuple[10]",
          },
        ],
        internalType: "struct IConfigurable.MarketPriceConfig",
        name: "priceConfig",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
    ],
    name: "marketFeeRateConfigs",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "tradingFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "protocolFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralParentReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralDiscountRate",
            type: "uint32",
          },
        ],
        internalType: "struct IConfigurable.MarketFeeRateConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
    ],
    name: "marketPriceConfigs",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "maxPriceImpactLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "liquidationVertexIndex",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "balanceRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "premiumRate",
                type: "uint32",
              },
            ],
            internalType: "struct IConfigurable.VertexConfig[10]",
            name: "vertices",
            type: "tuple[10]",
          },
        ],
        internalType: "struct IConfigurable.MarketPriceConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8",
      },
    ],
    name: "marketPriceVertexConfigs",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "balanceRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "premiumRate",
            type: "uint32",
          },
        ],
        internalType: "struct IConfigurable.VertexConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingGov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "minMarginPerLiquidityPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerLiquidityPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "minMarginPerPosition",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "maxLeveragePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidationFeeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "maxPositionLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "maxPositionValueRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxSizeRatePerPosition",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "liquidationExecutionFee",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "interestRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxFundingRate",
            type: "uint32",
          },
        ],
        internalType: "struct IConfigurable.MarketBaseConfig",
        name: "_newCfg",
        type: "tuple",
      },
    ],
    name: "updateMarketBaseConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "tradingFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "protocolFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralParentReturnFeeRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralDiscountRate",
            type: "uint32",
          },
        ],
        internalType: "struct IConfigurable.MarketFeeRateConfig",
        name: "_newCfg",
        type: "tuple",
      },
    ],
    name: "updateMarketFeeRateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarketDescriptor",
        name: "_market",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "maxPriceImpactLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "liquidationVertexIndex",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "balanceRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "premiumRate",
                type: "uint32",
              },
            ],
            internalType: "struct IConfigurable.VertexConfig[10]",
            name: "vertices",
            type: "tuple[10]",
          },
        ],
        internalType: "struct IConfigurable.MarketPriceConfig",
        name: "_newCfg",
        type: "tuple",
      },
    ],
    name: "updateMarketPriceConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Configurable__factory {
  static readonly abi = _abi;
  static createInterface(): ConfigurableInterface {
    return new Interface(_abi) as ConfigurableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Configurable {
    return new Contract(address, _abi, runner) as unknown as Configurable;
  }
}
