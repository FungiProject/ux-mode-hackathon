// React
import React, { useEffect, useState } from "react";
// Types
import { assetType } from "@/types/Types";
// Next
import Image from "next/image";
// Wagmi
import { useAccount, useContractRead, useNetwork } from "wagmi";
// Abis
import { abiERC20, abiSmartContractAccount } from "../../../abis/abis.json";
// Utils
import getMaxTokens from "@/utils/getMaxToken";
// Viem
import { formatUnits } from "viem";

type TokenCardProps = {
  asset: assetType;
  getToken: (token: assetType) => void;
  addressBalance: string;
};

export default function TokenCard({
  asset,
  getToken,
  addressBalance,
}: TokenCardProps) {
  const { data: tokenToAmountMax } = useContractRead({
    address: asset?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "balanceOf",
    args: [addressBalance],
  });

  const { data: tokenFromDecimals } = useContractRead({
    address: asset?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "decimals",
  });

  return (
    <button
      className="px-4 py-2 rounded-xl w-full hover:bg-gray-100 flex justify-between items-center my-0.5 text-start"
      onClick={() => getToken(asset)}
    >
      <div className="pl-[46px] flex">
        <Image
          width={46}
          height={46}
          alt="Network Image"
          src={asset.image}
          aria-hidden="true"
          className="mr-6 rounded-full"
        />
        <div className="flex flex-col">
          <span>{asset.name}</span>
          <span>{asset.symbol}</span>
        </div>
      </div>
      {tokenToAmountMax &&
      tokenFromDecimals !== undefined &&
      Number(tokenToAmountMax) !== 0 ? (
        <div>
          {Number(
            formatUnits(
              tokenToAmountMax as unknown as bigint,
              tokenFromDecimals as number
            )
          ).toFixed(5)}
        </div>
      ) : (
        <div>0</div>
      )}
    </button>
  );
}
