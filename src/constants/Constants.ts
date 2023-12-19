// Images
import NetworkNavBar from "../../public/NetworkNavBar.svg";
import AssetsNavBar from "../../public/AssetsNavBar.svg";
import IntegrationsNavBar from "../../public/IntegrationsNavBar.svg";
import PortfolioNavBar from "../../public/PortfolioNavBar.svg";
import Planet from "../../public/Planet.svg";
import Coins from "../../public/Coins.svg";
import DefaultImage from "../../public/DefaultImage.svg";
// Arbitrum Tokens
import Chainlink from "../../public/ArbitrumTokens/Chainlink.jpeg";
import Polygon from "../../public/MainnetTokens/Polygon.svg";
import Mainnet from "../../public/MainnetTokens/Mainnet.svg";
import GMX from "../../public/ArbitrumTokens/GMX.svg";
import WBTC from "../../public/ArbitrumTokens/WBTC.jpeg";
import Tether from "../../public/ArbitrumTokens/Tether.jpeg";
import Dai from "../../public/ArbitrumTokens/Dai.jpeg";
import Lido from "../../public/ArbitrumTokens/Lido.jpeg";
import Curve from "../../public/ArbitrumTokens/Curve.jpeg";
import RocketPool from "../../public/ArbitrumTokens/RocketPool.jpeg";
import Stargate from "../../public/ArbitrumTokens/Stargate.jpeg";
import Radiant from "../../public/ArbitrumTokens/Radiant.jpeg";
import Gains from "../../public/ArbitrumTokens/Gains.jpeg";
import Joe from "../../public/ArbitrumTokens/Joe.jpeg";
import Magic from "../../public/ArbitrumTokens/Magic.jpeg";
import Pendle from "../../public/ArbitrumTokens/Pendle.jpeg";
import Spell from "../../public/ArbitrumTokens/Spell.jpeg";
import Balancer from "../../public/ArbitrumTokens/Balancer.jpeg";
import Frax from "../../public/ArbitrumTokens/Frax.jpeg";
import Sushi from "../../public/ArbitrumTokens/Sushi.jpeg";
// Mainnet Tokens
import Shiba from "../../public/MainnetTokens/Shiba.jpeg";
import Arbitrum from "../../public/ArbitrumTokens/Arbitrum.svg";
import Maker from "../../public/MainnetTokens/Maker.jpeg";
import Immutable from "../../public/MainnetTokens/Immutable.jpeg";
import Synthetix from "../../public/MainnetTokens/Synthetix.jpeg";
import Sand from "../../public/MainnetTokens/Sand.jpeg";
import Mana from "../../public/MainnetTokens/Mana.jpeg";
import Fantom from "../../public/MainnetTokens/Fantom.jpeg";
import ApeCoin from "../../public/MainnetTokens/ApeCoin.png";
import TheGraph from "../../public/MainnetTokens/TheGraph.jpeg";
import Compound from "../../public/MainnetTokens/Compound.jpeg";
import inch from "../../public/MainnetTokens/1inch.jpeg";
import BAT from "../../public/MainnetTokens/BAT.jpeg";
import Convex from "../../public/MainnetTokens/Convex.jpeg";
import Enjin from "../../public/MainnetTokens/Enjin.jpeg";
import Olympus from "../../public/MainnetTokens/Olympus.jpeg";
import ENS from "../../public/MainnetTokens/ENS.jpeg";
import Ankr from "../../public/MainnetTokens/Ankr.jpeg";
import Numeraire from "../../public/MainnetTokens/Numeraire.jpeg";
import Perpetual from "../../public/MainnetTokens/Perpetual.jpeg";
import YearnFinance from "../../public/MainnetTokens/YearnFinance.jpeg";
import AAVE from "../../public/MainnetTokens/AAVE.svg";
import Uniswap from "../../public/MainnetTokens/Uniswap.svg";
import USDC from "../../public/MainnetTokens/USDC.svg";

// import Ox from "../../public/MainnetTokens/Ox.jpeg";

export const navigation = [
  {
    name: "Network",
    href: "/",
    image: NetworkNavBar.src,
  },
  {
    name: "Account",
    href: "/portfolio",
    image: PortfolioNavBar.src,
  },
  {
    name: "Assets",
    href: "/assets",
    image: AssetsNavBar.src,
  },
  {
    name: "Integrations",
    href: "/integrations",
    image: IntegrationsNavBar.src,
  },
];

export const integrations = [
  {
    protocolImage: Uniswap.src,
    title: "Uniswap V2",
    description:
      "Swap, earn, and build on the leading decentralized crypto trading protocol.",
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    status: true,
  },
  {
    protocolImage: Uniswap.src,
    title: "Uniswap V3",
    description:
      "Swap, earn, and build on the leading decentralized crypto trading protocol.",
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    status: true,
  },
];

export const homeCards = [
  {
    title: "Funds",
    amount: 0,
    imageHeight: 75,
    imageWidth: 75,
    imageSrc: Planet.src,
  },
  {
    title: "AUM",
    amount: 0,
    imageHeight: 70,
    imageWidth: 70,
    imageSrc: Coins.src,
  },
];

export const funds = [
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
  {
    name: "Terminal Fund",
    aum: 100,
    networks: [Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 4345,
    allTime: 3,
    href: "0x",
  },
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
  {
    name: "Terminal Fund",
    aum: 100,
    networks: [Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 4345,
    allTime: 3,
    href: "0x",
  },
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
  {
    name: "Terminal Fund",
    aum: 100,
    networks: [Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 4345,
    allTime: 3,
    href: "0x",
  },
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
  {
    name: "Terminal Fund",
    aum: 100,
    networks: [Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 4345,
    allTime: 3,
    href: "0x",
  },
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
  {
    name: "Terminal Fund",
    aum: 100,
    networks: [Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 4345,
    allTime: 3,
    href: "0x",
  },
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
  {
    name: "Terminal Fund",
    aum: 100,
    networks: [Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 4345,
    allTime: 3,
    href: "0x",
  },
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
  {
    name: "Terminal Fund",
    aum: 100,
    networks: [Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 4345,
    allTime: 3,
    href: "0x",
  },
  {
    name: "Block Fund",
    aum: 10000200,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 15,
    allTime: 23,
    href: "0x",
  },
  {
    name: "Flex Fund",
    aum: 100022400,
    networks: [Mainnet.src, Arbitrum.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -23,
    href: "0x",
  },
  {
    name: "Animal Fund",
    aum: 2000000,
    networks: [Mainnet.src, Arbitrum.src, Polygon.src],
    image: DefaultImage.src,
    members: 11345,
    allTime: 13,
    href: "0x",
  },
  {
    name: "Fungi Fund",
    aum: 10000,
    networks: [Mainnet.src],
    image: DefaultImage.src,
    members: 13445,
    allTime: -43,
    href: "0x",
  },
];

export const networks = [{ name: "Mode Testnet", id: 919, image: Mainnet.src }];

export const assetsPolygonMumbai = [
  {
    name: "Polygon",
    address: "",
    symbol: "MATIC",
    coingeckoApi: "matic-network",
    image: Polygon.src,
  },
  {
    name: "AAVE",
    address: "",
    symbol: "AAVE",
    coingeckoApi: "aave",
    image: AAVE.src,
  },
  {
    name: "Uniswap",
    address: "",
    symbol: "UNI",
    coingeckoApi: "uniswap",
    image: Uniswap.src,
  },
  {
    name: "USD Coin (PoS)",
    address: "",
    symbol: "USDC.e",
    coingeckoApi: "bridged-usdc-polygon-pos-bridge",
    image: USDC.src,
  },
];

export const actions = ["Swap", "Fees", "Deposit", "Withdraw"];

export const fundViews = ["Overview", "Portfolio", "Activity"];

export const activities = [
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701772887,
  },
  {
    type: "Deposit",
    amountOut: "2000 USDC.e",
    amountIn: null,
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701742887,
  },
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    receiver: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    time: 1701772887,
  },
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701772887,
  },
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    receiver: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    time: 1701772887,
  },
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    receiver: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    time: 1701772887,
  },
  {
    type: "Deposit",
    amountOut: "2000 USDC.e",
    amountIn: null,
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701742887,
  },
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701772887,
  },
  {
    type: "Deposit",
    amountOut: "2000 USDC.e",
    amountIn: null,
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701742887,
  },
  {
    type: "Deposit",
    amountOut: "2000 USDC.e",
    amountIn: null,
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701742887,
  },
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701772887,
  },
  {
    type: "Deposit",
    amountOut: "2000 USDC.e",
    amountIn: null,
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701742887,
  },
  {
    type: "Deposit",
    amountOut: "2000 USDC.e",
    amountIn: null,
    sender: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    receiver: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    time: 1701742887,
  },
  {
    type: "Swap",
    amountOut: "2000 LINK",
    amountIn: "3000 UNI",
    sender: "0xF70c1cEa8909563619547128A92dd7CC965F9657",
    receiver: "0x43DdF2bF7B0d2bb2D3904298763bcA2D3F2b40E0",
    time: 1701772887,
  },
];
