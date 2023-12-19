// React
import { ReactElement } from "react";
// Components
import ActionsSideBar from "./ActionsSideBar";
import DesktopSideBar from "./DesktopSideBar";
// Wagmi
import { useAccount, useContractRead } from "wagmi";
// Abi
import { abiSCAFactory } from "../../../abis/abis.json";
// Constants
import { scaFactoryFacetAddress } from "@/constants/Constants";

interface SideBarProps {
  page: ReactElement;
}

export default function SideBar({ page }: SideBarProps) {
  const { address } = useAccount();

  const { data: smartAccountsArray } = useContractRead({
    address: scaFactoryFacetAddress,
    abi: abiSCAFactory,
    functionName: "getSmartContractAccountsByOwner",
    args: [address],
  });

  return (
    <div className="z-50">
      <DesktopSideBar smartAccountsArray={smartAccountsArray as string[]} />
      <ActionsSideBar page={page} />
    </div>
  );
}
