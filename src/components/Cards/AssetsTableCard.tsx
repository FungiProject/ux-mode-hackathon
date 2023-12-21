// React
import React, { useEffect, useState } from "react";
// Next
import Image from "next/image";
// Types
import { assetType } from "@/types/Types";
// Utils
import formatNumber from "@/utils/formatNumber";
// Wagmi
import { useContractRead } from "wagmi";
// Abis
import { abiERC20 } from "../../../abis/abis.json";
// Viem
import { formatUnits } from "viem";

type AssetsTableCardProps = {
  asset: assetType;
  index: number;
  isPortfolio?: boolean;
  address: string;
};

export default function AssetsTableCard({
  asset,
  index,
  isPortfolio,
  address,
}: AssetsTableCardProps) {
  const [balance, setBalance] = useState<number | null>(null);
  const { data: tokenBalance } = useContractRead({
    address: asset?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "balanceOf",
    args: [address],
  });

  const { data: tokenFromDecimals } = useContractRead({
    address: asset?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "decimals",
  });

  const assetsPageChildren = (
    <>
      <div className="text-center">
        ${asset?.price !== undefined && formatNumber(asset.price)}
      </div>
      <div className="text-center">
        ${asset?.marketCap !== undefined && formatNumber(asset.marketCap)}
      </div>
      <div className="text-center">
        ${asset?.volumen24 !== undefined && formatNumber(asset.volumen24)}
      </div>
    </>
  );

  const porfolioPageChildren = (
    <>
      <div className="text-center">
        ${asset?.price !== undefined && formatNumber(asset.price)}
      </div>
      <div className="text-center">${balance?.toFixed(2)}</div>
      <div className="text-center">
        {" "}
        {Number(
          formatUnits(
            tokenBalance as unknown as bigint,
            tokenFromDecimals as number
          )
        ).toFixed(5)}
      </div>
    </>
  );

  useEffect(() => {
    setBalance(
      Number(
        formatUnits(
          tokenBalance as unknown as bigint,
          tokenFromDecimals as number
        )
      ) * Number(asset.price)
    );
  }, [tokenBalance]);

  return (
    <div className="border-t-1 border-gray-300 grid grid-cols-6 py-[24px] items-center px-10">
      <div className="flex items-center">
        {index + 1}
        <Image
          width={50}
          height={50}
          alt="Logo"
          src={asset.image}
          className="ml-[50px] rounded-full"
        />
      </div>
      <div className="flex items-start flex-col col-span-2">
        <div>{asset.name}</div> <div>{asset.symbol}</div>
      </div>
      {isPortfolio ? porfolioPageChildren : assetsPageChildren}
    </div>
  );
}
