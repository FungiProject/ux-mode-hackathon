// Images
import NetworkNavBar from "../../public/NetworkNavBar.svg";
import Logo from "../../public/Logo.svg";
import AssetsNavBar from "../../public/AssetsNavBar.svg";
import IntegrationsNavBar from "../../public/IntegrationsNavBar.svg";
import PortfolioNavBar from "../../public/PortfolioNavBar.svg";
import Planet from "../../public/Planet.svg";
import Coins from "../../public/Coins.svg";
// Mode Tokens
import Mainnet from "../../public/MainnetTokens/Mainnet.svg";
import Tether from "../../public/ArbitrumTokens/Tether.jpeg";
import Uniswap from "../../public/MainnetTokens/Uniswap.svg";
import USDC from "../../public/MainnetTokens/USDC.svg";
import Mode from "../../public/ModeChain.jpeg";

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
    networks: [Mode.src],
    status: true,
  },
  {
    protocolImage: Uniswap.src,
    title: "Uniswap V3",
    description:
      "Swap, earn, and build on the leading decentralized crypto trading protocol.",
    networks: [Mode.src],
    status: true,
  },
];

export const homeCards = [
  {
    title: "Accounts",
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

export const networks = [{ name: "Mode Testnet", id: 919, image: Mode.src }];

export const assetsMode = [
  {
    name: "USDT Fungi",
    address: "0xBCc6f06b6d41732db56924A4B140fEa2d998F571",
    symbol: "USDTFungi",
    coingeckoApi: "tether",
    image: Logo.src,
  },
  {
    name: "USDC Fungi",
    address: "0x3e57d0ec1ED203D9EEe2351189e20bAF5D83fB03",
    symbol: "USDCFungi",
    coingeckoApi: "bridged-usdc-polygon-pos-bridge",
    image: Logo.src,
  },
];

export const actions = ["Swap", "Transfer", "Deposit"];

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

export const diamondAddress = "0xea62f19e5aa1b1d894ac7c9e6040272912d1cf03";
export const scaFactoryFacetAddress =
  "0x2E026a70dB59DB355Aa476949B2461E491b20768";
