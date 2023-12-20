// React
import React, { ReactElement, useEffect, useState } from "react";
// Next
import { useRouter } from "next/router";
// Constants
import { fundViews } from "@/constants/Constants";
// Wagmi
import { useAccount, useContractRead } from "wagmi";
// Components
import ActionsButton from "../Buttons/ActionsButton";
import UserInfo from "../Cards/UserInfo";
import ActivityView from "../FundViews/ActivityView";
import OverviewView from "../FundViews/OverviewView";
import PortfolioView from "../FundViews/PortfolioView";
import ActionsSwitcher from "../Switchers/ActionsSwitcher";
// Abis
import { abiSmartContractAccount } from "../../../abis/abis.json";

export default function FundDetails() {
  const [actionSelected, setActionSelected] = useState<string>("Overview");
  const [ownerLoaded, setOwnerLoaded] = useState<boolean>(false);
  const [view, setView] = useState<ReactElement | null>(null);
  const { address } = useAccount();
  const router = useRouter();

  const { data: owner } = useContractRead({
    address: router?.query.address as `0x${string}`,
    abi: abiSmartContractAccount,
    functionName: "owner",
  });
  console.log(owner);
  const getActionSelected = (action: string) => {
    setActionSelected(action);
  };

  const getViewComponent = () => {
    switch (actionSelected) {
      case "Overview":
        setView(<OverviewView />);
        break;
      case "Activity":
        setView(<ActivityView />);
        break;
      case "Portfolio":
        setView(<PortfolioView />);
        break;
      default:
        setView(<OverviewView />);
        break;
    }
  };

  useEffect(() => {
    getViewComponent();
  }, []);

  useEffect(() => {
    setOwnerLoaded(true);
  }, [address]);

  useEffect(() => {
    getViewComponent();
  }, [actionSelected, router]);

  return (
    <main>
      {ownerLoaded ? (
        <>
          {" "}
          <UserInfo
            address={router.query.address as `0x${string}`}
            isUser={false}
          />
          <div className="flex flex-col items-end mb-[12px]">
            <ActionsButton
              fund={router.query.address as string}
              isOwner={owner === address}
            />

            <div
              className={`flex items-center w-full ${
                owner === address && actionSelected === "Members"
                  ? "justify-between"
                  : "justify-end"
              }`}
            >
              <ActionsSwitcher
                actions={fundViews}
                actionSelected={actionSelected}
                getActionSelected={getActionSelected}
                className="h-[40px] p-[4px] w-[600px] rounded-full grid grid-cols-3 bg-white items-center text-center mt-[17px] shadow-xl text-sm"
                paddingButton="py-[6px]"
              />
            </div>
          </div>
          {view && view}
        </>
      ) : (
        <></>
      )}
    </main>
  );
}
