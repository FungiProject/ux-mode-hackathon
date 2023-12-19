// React
import React from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// Images
import Mode from "../../../public/ModeChain.jpeg";

type HomeTableCardProps = { account: string; isPortfolio: boolean };

export default function FundsTableCard({ account }: HomeTableCardProps) {
  return (
    <div className="border-t-1 border-gray-300 grid grid-cols-4 py-[24px] items-center text-lg">
      <div className="flex col-span-2 items-center">
        <div className="ml-[30px]">{account}</div>
      </div>
      <div className="flex justify-center">
        <Image
          width={35}
          height={35}
          alt="Logo"
          src={Mode.src}
          className="rounded-full"
        />
      </div>{" "}
      <div className="justify-end flex">
        <Link
          className="rounded-full bg-main px-[10px] py-[8px] w-[75px] text-center text-white mr-[15px] hover:bg-mainHover"
          href={`/fund/${account}`}
        >
          See
        </Link>
      </div>
    </div>
  );
}
