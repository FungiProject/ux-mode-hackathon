// React
import React, { ReactElement, useEffect, useState } from "react";
// Components
import TxButton from "../Buttons/TxButton";
import TokenDropdown from "../Dropdown/TokenDropdown";
import NotificationsCard from "./NotificationsCard";
import Loader from "../Loader/Spinner";
// Types
import { assetType } from "@/types/Types";
// Wagmi
import { useAccount, useContractRead } from "wagmi";
// Constants
import {
  assetsMode,
  diamondAddress,
  genericSwapFacetAddress,
  uniswapAddress,
} from "@/constants/Constants";
// Viem
import { parseUnits } from "viem";
// Abis
import {
  abiERC20,
  abiSmartContractAccount,
  abiGenericSwapFacet,
  abiUniswapV2,
} from "../../../abis/abis.json";
// Next
import { useRouter } from "next/router";
// Ethers
import { ethers } from "ethers";
// Images
import Error from "../../../public/Error.svg";
import Success from "../../../public/Success.svg";

type SwapperProps = {
  actionSelected: string;
};

export default function Swapper({ actionSelected }: SwapperProps) {
  const [amountTo, setAmountTo] = useState<number | undefined>(undefined);
  const [amountFrom, setAmountFrom] = useState<number | undefined>(undefined);
  const [tokenFrom, setTokenFrom] = useState<assetType | null>(null);
  const [tokenTo, setTokenTo] = useState<assetType | null>(null);
  const [status, setStatus] = useState<string[]>([]);
  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<string | ReactElement | null>(null);
  const [txDescription, setTxDescription] = useState<string | null>(null);

  const { address } = useAccount();
  const router = useRouter();

  const { data: tokenFromDecimals } = useContractRead({
    address: tokenFrom?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "decimals",
  });

  // const { data: tokenFromAmountMax } = useContractRead({
  //   address: tokenFrom?.address as `0x${string}`,
  //   abi: abiSmartContractAccount,
  //   functionName: "getTokenBalance",
  //   args: [router.query.address],
  // });

  // const { data: tokenToAmountMax } = useContractRead({
  //   address: tokenTo?.address as `0x${string}`,
  //   abi: abiSmartContractAccount,
  //   functionName: "getTokenBalance",
  //   args: [router.query.address],
  // });

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

  useEffect(() => {
    if (status[0] === "loading") {
      setTitle("Processing");
      setTxDescription("The transaction is being processed.");
      setImage(Loader);
    } else if (status[0] === "error") {
      setTitle("Error");
      setTxDescription("Failed transaction.");
      setImage(Error.src);
    } else if (status[0] === "success") {
      setTitle("Success");
      setTxDescription("The transaction was executed correctly");
      setImage(Success.src);
    }
    if (status[0] === "success" && status[1] === "callDiamond") {
      setAmountFrom(undefined);
      setAmountTo(undefined);
      setTokenFrom(null);
      setTokenTo(null);
      setTimeout(() => {
        setTitle(null);
        setTxDescription(null);
        setImage(null);
      }, 2000);
    }
  }, [status]);

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

              {/* {tokenFrom &&
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
              )} */}
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
            {/* {tokenTo && tokenToAmountMax && tokenToDecimals !== undefined ? (
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
            )} */}
          </div>
        </div>

        {(status.length === 0 ||
          (status[0] === "loading" && status[1] === "approveERC20")) &&
        amountFrom &&
        router.query.address &&
        tokenFrom &&
        tokenTo ? (
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
              ).toString(),
            ]}
            getTxStatus={getStatus}
          >
            <span>Approve</span>
          </TxButton>
        ) : (
          status[1] !== "approveERC20" &&
          status[0] !== "loading" && (
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
          router.query.address &&
          ((status[1] === "approveERC20" && status[0] === "success") ||
            (status[1] === "callDiamond" && status[0] === "loading") ||
            (status[1] === "callDiamond" && status[0] === "success")) && (
            <TxButton
              className="bg-main w-full mt-[12px] rounded-2xl py-[16px] text-white font-semibold tracking-wider hover:bg-mainHover"
              address={router.query.address as `0x${string}`}
              abi={abiSmartContractAccount}
              functionName={"callDiamond"}
              args={[
                genericSwapFacetAddress,
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
                      callTo: uniswapAddress,
                      approveTo: uniswapAddress,
                      sendingAssetId: tokenFrom?.address,
                      receivingAssetId: tokenTo?.address,
                      fromAmount: parseUnits(
                        amountFrom.toString(),
                        6
                      ).toString(),
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
        {title && image && txDescription && (
          <NotificationsCard
            title={title}
            image={image}
            txDescription={txDescription}
          />
        )}
      </div>
    </main>
  );
}
