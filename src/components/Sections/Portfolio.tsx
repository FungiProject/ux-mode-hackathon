// React
import React from "react";
// Wagmi
import { useAccount } from "wagmi";
// Components
import UserInfo from "../Cards/UserInfo";
import ResultsChart from "../Chart/ResultsChart";

export default function Portfolio() {
  const { address } = useAccount();
  const personalBalance = 8974.31;

  return (
    <main>
      <UserInfo address={address} isUser={true} isOwner={true} />
      <div className="mt-[25px]">
        <ResultsChart personalBalance={personalBalance} />
      </div>
    </main>
  );
}
