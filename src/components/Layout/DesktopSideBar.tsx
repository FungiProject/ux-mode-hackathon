// React
import React, { useState, useEffect } from "react";
// Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// Types
import { navigationType, NetworkType } from "@/types/Types";
// Constants
import {
  diamondAddress,
  navigation,
  networks,
  scaFactoryFacetAddress,
} from "@/constants/Constants";
// Images
import Logo from "../../../public/Logo.svg";
// Components
import SwitchNetworkModal from "../Modals/SwitchNetworkModal";
// Abi
import { abiSCAFactory } from "../../../abis/abis.json";
// Wagmi
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type DesktopSideBarProps = {
  smartAccountsArray: string[];
};

export default function DesktopSideBar({
  smartAccountsArray,
}: DesktopSideBarProps) {
  const [restOfNetworks, setRestOfNetworks] = useState<NetworkType[]>([]);
  const [previousNetwork, setPreviousNetwork] = useState<NetworkType>();
  const [needSwitch, setNeedSwitch] = useState<boolean>(false);

  const router = useRouter();

  const { chain } = useNetwork();
  const { address } = useAccount();

  const { config: txContractConfig } = usePrepareContractWrite({
    address: scaFactoryFacetAddress,
    abi: abiSCAFactory,
    functionName: "createSmartContractAccount",
    args: [diamondAddress, address],
  });

  const { writeAsync: contractTx, data: dataTx } =
    useContractWrite(txContractConfig);

  const {
    isSuccess: txSuccessWagmi,
    isLoading: txLoadingWagmi,
    isError: txErrorWagmi,
  } = useWaitForTransaction({
    confirmations: 3,
    hash: dataTx?.hash,
  });

  const onWagmiClick = async () => {
    try {
      await contractTx?.();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (txLoadingWagmi) {
    //   getTxStatus("loading", functionName);
    // }
  }, [txSuccessWagmi, txLoadingWagmi, txErrorWagmi]);

  const getSwitchModal = (modalState: boolean) => {
    setNeedSwitch(modalState);
  };

  useEffect(() => {
    if (chain && chain.id !== 919) {
      setNeedSwitch(true);
    } else {
      if (chain) {
        const prev = networks.filter((network) => network.name === chain?.name);
        const rest: NetworkType[] = networks.filter(
          (network) => network.name !== prev[0].name
        );

        setPreviousNetwork(prev[0]);
        setRestOfNetworks(rest);
      }
    }
  }, [chain]);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:flex-col h-[700px] w-[160px] my-[25px]">
      {needSwitch && chain && previousNetwork && restOfNetworks && (
        <SwitchNetworkModal
          getOpenModal={getSwitchModal}
          previousNetwork={previousNetwork}
          restOfNetworks={restOfNetworks}
        />
      )}
      <div className="flex justify-center bg-secondBlack h-full w-full rounded-2xl py-[24px]">
        <div className="flex flex-col justify-between items-center">
          <Link href="/" className="text-red-500">
            <Image
              width={62}
              height={68}
              alt="Logo"
              src={Logo.src}
              aria-hidden="true"
            />
          </Link>
          {navigation.map((item: navigationType) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={classNames(
                  item.name.toLowerCase() ===
                    router.route.slice(1, router.route.length) ||
                    router.route === item.href
                    ? "text-white font-bold"
                    : "text-gray-400 opacity-60 hover:opacity-100",
                  "group flex flex-col items-center gap-x-3 rounded-md text-sm font-medium hover:text-white"
                )}
              >
                <Image
                  width={45}
                  height={45}
                  alt="Navigation Image"
                  src={item.image}
                  className={classNames(
                    item.name.toLowerCase() ===
                      router.route.slice(1, router.route.length) ||
                      router.route === item.href
                      ? "text-white"
                      : "text-white group-hover:text-white ",
                    `shrink-0`
                  )}
                  aria-hidden="true"
                />
                <span className="mt-2">{item.name}</span>
              </Link>
            </div>
          ))}
          {smartAccountsArray?.length === 0 && (
            <button
              className="text-white bg-main px-[18px] py-[12px] rounded-xl text-sm font-medium hover:bg-mainHover"
              onClick={() => onWagmiClick()}
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
