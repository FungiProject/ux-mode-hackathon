// React
import React, { ReactElement, useEffect, useState } from "react";
// Components
import TxButton from "../Buttons/TxButton";
import TokenDropdown from "../Dropdown/TokenDropdown";
import Loader from "../Loader/Spinner";
import NotificationsCard from "./NotificationsCard";
// Utils
import getMaxTokens from "@/utils/getMaxToken";
// Wagmi
import { useAccount, useNetwork, useContractRead } from "wagmi";
// Constants
import { assetsMode } from "@/constants/Constants";
// Types
import { assetType } from "@/types/Types";
// Abis
import { abiERC20, abiSmartContractAccount } from "../../../abis/abis.json";
// Viem
import { formatUnits, parseUnits } from "viem";
// Next
import { useRouter } from "next/router";
// Images
import Error from "../../../public/Error.svg";
import Success from "../../../public/Success.svg";

type DWCActionCardProps = {
  actionSelected: string;
};

export default function DWCActionCard({ actionSelected }: DWCActionCardProps) {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [receiver, setReceiver] = useState<string | undefined>("");
  const [status, setStatus] = useState<string[]>([]);
  const [token, setToken] = useState<assetType | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<string | ReactElement | null>(null);
  const [txDescription, setTxDescription] = useState<string | null>(null);

  const { address } = useAccount();
  const router = useRouter();

  const { data: tokenDecimals } = useContractRead({
    address: token?.address as `0x${string}`,
    abi: abiERC20,
    functionName: "decimals",
  });

  // const { data: maxBalanceToken } = useContractRead({
  //   address: token?.address as `0x${string}`,
  //   abi: abiSmartContractAccount,
  //   functionName: "getTokenBalance",
  //   args: [router.query.address],
  // });

  const handleAmountChange = (amount: number) => {
    setAmount(amount);
  };

  const handleReceiverChange = (receiver: string) => {
    setReceiver(receiver);
  };

  const getToken = (token: assetType) => {
    setToken(token);
  };

  const getStatus = (status: string, statusFuction: string) => {
    setStatus([status, statusFuction]);
  };

  useEffect(() => {
    setStatus([]);
    setReceiver("");
    setToken(null);
    setAmount(0);
  }, [actionSelected]);

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
    if (
      status[0] === "success" &&
      (status[1] === "transfer" || status[1] === "transferERC20")
    ) {
      setReceiver("");
      setToken(null);
      setAmount(0);
      setTimeout(() => {
        setTitle(null);
        setTxDescription(null);
        setImage(null);
      }, 2000);
    }
  }, [status]);

  return (
    <main className="mt-[108px] ">
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
          value={amount}
          onChange={(e: any) => handleAmountChange(e.target.value)}
        />
        <div className="flex flex-col text-sm font-medium">
          <div className="flex flex-col text-sm font-medium">
            {assetsMode && router.query.address && address && (
              <TokenDropdown
                assets={assetsMode}
                getToken={getToken}
                token={token}
                oppositToken={null}
                type="From"
                addressBalance={
                  actionSelected === "Deposit"
                    ? address
                    : (router.query.address as string)
                }
              />
            )}

            {/* {token && maxBalanceToken && tokenDecimals !== undefined ? (
              <div className="mt-[6px]">
                Balance:{" "}
                <span>
                  {Number(
                    formatUnits(
                      maxBalanceToken as unknown as bigint,
                      tokenDecimals as number
                    )
                  ).toFixed(3)}
                </span>
                <button
                  className="text-main ml-1.5"
                  onClick={() => setAmount(maxBalanceToken as number)}
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
      {actionSelected === "Transfer" && (
        <div className="flex items-center">
          <span className="mt-[16px] mr-[24px] text-gray-800">Receiver:</span>
          <div className="flex items-center justify-between w-full shadow-input rounded-2xl pl-[11px] pr-[25px] py-[8px] mt-[16px]">
            <input
              type="text"
              step={0.0000001}
              min={0}
              className="placeholder:text-gray-500  outline-none w-full text-sm"
              placeholder="0xas2fads..."
              value={receiver}
              onChange={(e: any) => handleReceiverChange(e.target.value)}
            />
          </div>
        </div>
      )}
      {actionSelected !== "Transfer" &&
      (status.length === 0 ||
        (status[0] === "loading" && status[1] === "approve")) &&
      amount &&
      router.query.address &&
      token ? (
        <TxButton
          className="bg-main w-full mt-[12px] rounded-2xl py-[16px] text-white font-semibold tracking-wider hover:bg-mainHover"
          address={token?.address as `0x${string}`}
          abi={abiERC20}
          functionName={"approve"}
          args={[
            router.query.address,
            parseUnits(amount as unknown as string, tokenDecimals as number),
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
      {((actionSelected === "Transfer" && receiver !== "") ||
        (status[1] === "approve" && status[0] !== "loading") ||
        (status[1] === "transfer" && status[0] === "loading")) &&
        amount &&
        router.query.address && (
          <TxButton
            className="bg-main w-full mt-[12px] rounded-2xl py-[16px] text-white font-semibold tracking-wider hover:bg-mainHover"
            address={
              actionSelected !== "Transfer"
                ? (token?.address as `0x${string}`)
                : (router.query.address as `0x${string}`)
            }
            abi={
              actionSelected !== "Transfer" ? abiERC20 : abiSmartContractAccount
            }
            functionName={
              actionSelected !== "Transfer" ? "transfer" : "transferERC20"
            }
            args={
              actionSelected !== "Transfer"
                ? [
                    router.query.address,
                    parseUnits(
                      amount as unknown as string,
                      tokenDecimals as number
                    ),
                  ]
                : [
                    token?.address,
                    receiver,
                    parseUnits(
                      amount as unknown as string,
                      tokenDecimals as number
                    ),
                  ]
            }
            getTxStatus={getStatus}
          >
            {actionSelected === "Transfer" ? (
              <span>Send</span>
            ) : (
              <span>Deposit</span>
            )}
          </TxButton>
        )}
      {actionSelected === "Transfer" && (!amount || receiver === "") && (
        <button
          className="bg-main w-full mt-[12px] rounded-2xl py-[16px] text-white font-semibold tracking-wider hover:bg-mainHover opacity-40"
          disabled
        >
          Send
        </button>
      )}
      {title && image && txDescription && (
        <NotificationsCard
          title={title}
          image={image}
          txDescription={txDescription}
        />
      )}
    </main>
  );
}
