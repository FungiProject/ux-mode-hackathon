// Types
import { fundType } from "@/types/Types";
// React
import React from "react";
// Components
import FundsTableCard from "../Cards/FundsTableCard";

type FundsTableProps = {
  accounts: string[];
  startIndex: number;
  endIndex: number;
  isPortfolio: boolean;
};

export default function FundsTable({
  accounts,
  startIndex,
  endIndex,
  isPortfolio,
}: FundsTableProps) {
  return (
    <div className="mt-[20px] w-full h-[574px] pt-[23px] px-[20px] bg-white rounded-lg overflow-hidden">
      <div className="grid grid-cols-4 pb-[26px] text-xl font-medium">
        <div className="col-span-2 ml-[30px]">Account</div>{" "}
        <div className="text-center">Networks</div>{" "}
      </div>{" "}
      {accounts
        .slice(startIndex, endIndex)
        .map((account: string, index: number) => (
          <FundsTableCard
            account={account}
            key={index}
            isPortfolio={isPortfolio}
          />
        ))}
    </div>
  );
}
