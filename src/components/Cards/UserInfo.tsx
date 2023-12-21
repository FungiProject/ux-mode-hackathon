// React
import React, { useState, useEffect } from "react";
// Images
import DefaultImage from "../../../public/DefaultImage.svg";
import Folders from "../../../public/Folders.svg";
import SearchIcon from "../../../public/SearchIcon.svg";
// Next
import Image from "next/image";
// Heroicons
import { PencilSquareIcon } from "@heroicons/react/20/solid";
// Utils
import formatTimestampToDate from "@/utils/formatTimestampToDate";

type UserInfoProps = {
  address: `0x${string}` | undefined;
  isUser: boolean;
};

export default function UserInfo({ address, isUser }: UserInfoProps) {
  const [formatAddress, setFormatAddress] = useState<string | null>(null);
  const date = 1703164301000;

  useEffect(() => {
    if (address) {
      setFormatAddress(address.substring(0, 10) + "...");
    }
  }, [address]);

  return (
    <main className="flex items-center">
      <Image
        height={125}
        width={118}
        alt="User Image"
        src={DefaultImage.src}
        className="mr-4"
      />
      <div className="flex flex-col">
        <div className="flex items-center text-3xl">
          {" "}
          <span> {formatAddress ? <span>{formatAddress}</span> : <></>}</span>
        </div>
        <span className="text-xl">
          {isUser ? "Joined" : "Created"} {formatTimestampToDate(date)}
        </span>
        {!isUser && (
          <div className="flex mt-[6px]">
            <Image
              height={25}
              width={25}
              alt="User Image"
              src={Folders.src}
              className="mr-[8px]"
            />{" "}
            <Image
              height={25}
              width={25}
              alt="User Image"
              src={SearchIcon.src}
              className="mr-[8px]"
            />
          </div>
        )}
      </div>{" "}
    </main>
  );
}
