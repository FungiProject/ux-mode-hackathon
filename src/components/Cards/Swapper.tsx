// React
import React, { ReactElement, useEffect, useState } from "react";
// Components
import TxButton from "../Buttons/TxButton";
import TokenDropdown from "../Dropdown/TokenDropdown";
// Types
import { assetType } from "@/types/Types";
// Wagmi
import { useAccount, useContractRead, useNetwork } from "wagmi";
// Constants
import { assetsMode } from "@/constants/Constants";
// Utils
import getMaxTokens from "@/utils/getMaxToken";
// Viem
import { encodeFunctionData, formatUnits, parseUnits } from "viem";
// Abis
import {
  abiERC20,
  abiSmartContractAccount,
  abiGenericSwapFacet,
  abiUniswapV2,
} from "../../../abis/abis.json";
// Next
import { useRouter } from "next/router";
import { Contract, ethers } from "ethers";

type SwapperProps = {
  actionSelected: string;
};

export default function Swapper({ actionSelected }: SwapperProps) {
  const [amountTo, setAmountTo] = useState<number | undefined>(undefined);
  const [amountFrom, setAmountFrom] = useState<number | undefined>(undefined);
  const [tokenFrom, setTokenFrom] = useState<assetType | null>(null);
  const [tokenTo, setTokenTo] = useState<assetType | null>(null);
  const [status, setStatus] = useState<string[]>([]);
  const [data, setData] = useState<any>(null);

  const { address } = useAccount();
  const router = useRouter();
  const diamondAddress = "0x2c0725061515A2C00F32ca30588Ee2079CDB84c9";

  const { data: tokenFromDecimals } = useContractRead({
    address: tokenFrom?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "decimals",
  });

  const { data: tokenFromAmountMax } = useContractRead({
    address: tokenFrom?.address as `0x${string}`,
    abi: abiSmartContractAccount,
    functionName: "getTokenBalance",
    args: [router.query.address],
  });

  const { data: tokenToAmountMax } = useContractRead({
    address: tokenTo?.address as `0x${string}`,
    abi: abiSmartContractAccount,
    functionName: "getTokenBalance",
    args: [router.query.address],
  });

  const { data: tokenToDecimals } = useContractRead({
    address: tokenTo?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "decimals",
  });

  const handleAmountChangeTo = (amount: number) => {
    setAmountTo(amount);
  };

  const handleAmountChangeFrom = (amount: number) => {
    setAmountFrom(amount);
  };

  const getTokenTo = (token: assetType) => {
    setTokenTo(token);
  };

  const getTokenFrom = (token: assetType) => {
    setTokenFrom(token);
  };

  const getStatus = (status: string, statusFuction: string) => {
    setStatus([status, statusFuction]);
  };
  console.log(
    "tokenFrom",
    tokenFrom?.address,
    "tokenTo",
    tokenTo?.address,
    "amountFrom",
    amountFrom,
    "diamond",
    diamondAddress,
    "time",
    (Number(new Date().getTime()) / 1000 + 60 * 20).toFixed(0)
  );
  console.log(status);
  return (
    <main className="mt-[58px] ">
      <div>
        <h1 className="text-4xl font-medium ml-[15px] mb-[30px]">
          {actionSelected}
        </h1>
        <div className="flex items-center justify-between w-full shadow-input rounded-2xl pl-[11px] pr-[25px] py-[16px]">
          <input
            type="number"
            step={0.0000001}
            min={0}
            className="placeholder:text-gray-500 text-3xl outline-none"
            placeholder="0.00"
            value={amountFrom}
            onChange={(e: any) => handleAmountChangeFrom(e.target.value)}
          />
          <div className="flex flex-col text-sm font-medium">
            <div className="flex flex-col text-sm font-medium">
              {assetsMode && router.query.address && address && (
                <TokenDropdown
                  assets={assetsMode}
                  getToken={getTokenFrom}
                  token={tokenFrom}
                  oppositToken={tokenTo}
                  type="From"
                  addressBalance={
                    actionSelected === "Deposit"
                      ? address
                      : (router.query.address as string)
                  }
                />
              )}

              {tokenFrom &&
              tokenFromAmountMax &&
              tokenFromDecimals !== undefined ? (
                <div className="mt-[6px]">
                  Balance:{" "}
                  <span>
                    {Number(
                      formatUnits(
                        tokenFromAmountMax as unknown as bigint,
                        tokenFromDecimals as number
                      )
                    ).toFixed(3)}
                  </span>
                  <button
                    className="text-main ml-1.5"
                    onClick={() => setAmountTo(tokenFromAmountMax as number)}
                  >
                    Max
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[16px]">
        <div className="flex items-center justify-between w-full shadow-input rounded-2xl pl-[11px] pr-[25px] py-[16px]">
          <input
            type="number"
            step={0.0000001}
            min={0}
            className="placeholder:text-gray-500 text-3xl outline-none"
            placeholder="0.00"
            value={amountTo}
            onChange={(e: any) => handleAmountChangeTo(e.target.value)}
          />
          <div className="flex flex-col text-sm font-medium">
            {assetsMode && router.query.address && address && (
              <TokenDropdown
                assets={assetsMode}
                getToken={getTokenTo}
                token={tokenTo}
                oppositToken={tokenFrom}
                type="To"
                addressBalance={
                  actionSelected === "Deposit"
                    ? address
                    : (router.query.address as string)
                }
              />
            )}
            {tokenTo && tokenToAmountMax && tokenToDecimals !== undefined ? (
              <div className="mt-[6px]">
                Balance:{" "}
                <span>
                  {Number(
                    formatUnits(
                      tokenToAmountMax as unknown as bigint,
                      tokenToDecimals as number
                    )
                  ).toFixed(3)}
                </span>{" "}
                <button
                  className="text-main ml-1.5"
                  onClick={() => setAmountTo(tokenToAmountMax as number)}
                >
                  Max
                </button>
              </div>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
        {((status[0] !== "success" && status[1] !== "approve") ||
          (status[0] === "loading" && status[1] === "approve")) &&
        amountFrom &&
        router.query.address ? (
          <TxButton
            className="bg-main w-full mt-[12px] rounded-2xl py-[16px] text-white font-semibold tracking-wider hover:bg-mainHover"
            address={router.query.address as `0x${string}`}
            abi={abiSmartContractAccount}
            functionName={"approveERC20"}
            args={[
              tokenFrom?.address,
              diamondAddress,
              parseUnits(
                amountFrom as unknown as string,
                tokenFromDecimals as number
              ),
            ]}
            getTxStatus={getStatus}
          >
            <span>Approve</span>
          </TxButton>
        ) : (
          status[1] !== "approve" &&
          status[0] !== "loading" &&
          actionSelected !== "Transfer" && (
            <button
              className="bg-main w-full mt-[12px] rounded-2xl py-[16px] text-white font-semibold tracking-wider hover:bg-mainHover opacity-40"
              disabled
            >
              Approve
            </button>
          )
        )}
        {amountFrom &&
          tokenFrom &&
          tokenTo &&
          status[1] === "approveERC20" &&
          status[0] === "success" && (
            <TxButton
              className="bg-main w-full mt-[12px] rounded-2xl py-[16px] text-white font-semibold tracking-wider hover:bg-mainHover"
              address={router.query.address as `0x${string}`}
              abi={abiSmartContractAccount}
              functionName={"callDiamond"}
              args={[
                "0xeb5267ec7fbf7522a1d91db7f0b18003dbb74119",
                0,
                new ethers.utils.Interface(
                  abiGenericSwapFacet
                ).encodeFunctionData("swapTokensGeneric", [
                  ethers.constants.HashZero,
                  "",
                  "",
                  router.query.address,
                  0,
                  [
                    {
                      callTo: "0x5951479fE3235b689E392E9BC6E968CE10637A52",
                      approveTo: "0x5951479fE3235b689E392E9BC6E968CE10637A52",
                      sendingAssetId: tokenFrom?.address,
                      receivingAssetId: tokenTo?.address,
                      fromAmount: Number(
                        parseUnits(amountFrom as unknown as string, 6)
                      ),
                      callData: new ethers.utils.Interface(
                        abiUniswapV2
                      ).encodeFunctionData("swapExactTokensForTokens", [
                        parseUnits(amountFrom.toString(), 6).toString(),
                        0,
                        [tokenFrom?.address, tokenTo?.address],
                        diamondAddress,
                        (Number(new Date().getTime()) / 1000 + 60 * 20).toFixed(
                          0
                        ),
                      ]),
                      requiresDeposit: true,
                    },
                  ],
                ]),
              ]}
              getTxStatus={getStatus}
            >
              <span>Swap {tokenFrom?.symbol}</span>
            </TxButton>
          )}
      </div>
    </main>
  );
}
