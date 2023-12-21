// React
import React, { useEffect, useState } from "react";
// Constants
import { diamondAddress, homeCards } from "@/constants/Constants";
// Types
import { fundType, homeDataType } from "@/types/Types";
// Components
import HomeCard from "../Cards/HomeCard";
import SearchBar from "../Filters/SearchBar";
import FundsTable from "../Tables/FundsTable";
import SortBy from "../Filters/SortBy";
// Heroicons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// Wagmi
import { useContractRead } from "wagmi";
// Abi
import { abiSCAFactory } from "../../../abis/abis.json";
// Constants
import { scaFactoryFacetAddress } from "@/constants/Constants";
import Loader from "../Loader/Spinner";

export default function Home() {
  const { data: smartAccountsArray } = useContractRead({
    address: diamondAddress,
    abi: abiSCAFactory,
    functionName: "getCreatedSmartContractAccounts",
    args: [],
  });

  const { data: totalAccounts } = useContractRead({
    address: diamondAddress,
    abi: abiSCAFactory,
    functionName: "getSmartContractAccountCount",
    args: [],
  });

  const [accountsArrayCopy, setAccountsArrayCopy] = useState<string[]>([
    ...(smartAccountsArray ? (smartAccountsArray as string[]) : []),
  ]);
  const [originalFunds, setOriginalFunds] = useState<string[]>([
    ...(smartAccountsArray ? (smartAccountsArray as string[]) : []),
  ]);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const ITEMS_PER_PAGE = 5;
  const totalItems = accountsArrayCopy.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getInfo = (query: string) => {
    setSearch(query);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    let copy = [...originalFunds];

    if (search.length !== 0) {
      copy = copy.filter((fund: string) =>
        fund.toLowerCase().includes(search.toLowerCase())
      );
    }

    setAccountsArrayCopy(copy);
  }, [search, originalFunds]);

  useEffect(() => {
    setOriginalFunds([...(smartAccountsArray as string[])]);
    setLoading(false);
  }, [smartAccountsArray]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === currentPage ||
        i === currentPage - 1 ||
        i === currentPage + 1 ||
        i === totalPages
      ) {
        pageNumbers.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push("...");
      }
    }

    return pageNumbers.map((pageNumber, index) =>
      pageNumber.toString() !== "..." ? (
        <button
          key={index}
          className={
            pageNumber === currentPage
              ? "bg-main py-0.5 px-2 rounded-lg text-white"
              : "mx-2.5"
          }
          onClick={() => handlePageChange(Number(pageNumber))}
        >
          {pageNumber}
        </button>
      ) : (
        <span className="mx-1" key={index}>
          {pageNumber}
        </span>
      )
    );
  };

  return (
    <main>
      <div className="flex flex-row mt-[22px] gap-x-[20px] mb-[25px]">
        {homeCards.map((infoCard: homeDataType, index: number) => {
          return (
            <HomeCard
              title={infoCard.title}
              amount={index === 0 ? (totalAccounts as number) : 1000000}
              imageHeight={infoCard.imageHeight}
              imageWidth={infoCard.imageWidth}
              imageSrc={infoCard.imageSrc}
              key={infoCard.title}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-x-[20px]">
        <SearchBar
          getInfo={getInfo}
          query={search}
          classMain="rounded-full text-black px-[22px] items-center w-[270px] shadow-lg outline-none placeholder:text-black bg-white flex"
          placeholder="Search"
        />
      </div>

      {!loading ? (
        <>
          <FundsTable
            accounts={accountsArrayCopy}
            startIndex={startIndex}
            endIndex={endIndex}
            isPortfolio={false}
          />
          <div className="flex items-center mt-4 relative">
            <span>
              Showing {startIndex + 1}-{endIndex} out of{" "}
              {accountsArrayCopy.length}
            </span>
            <div className="flex justify-center items-center absolute inset-x-0 bottom-0 top-3">
              {currentPage !== 1 && (
                <button onClick={() => handleClickPrevious()}>
                  <ChevronLeftIcon
                    className=" w-[45px] h-[36px] text-black"
                    aria-hidden="true"
                  />
                </button>
              )}
              {renderPageNumbers()}{" "}
              {currentPage < accountsArrayCopy.length / 5 && (
                <button onClick={() => handleClickNext()}>
                  <ChevronRightIcon
                    className=" w-[45px] h-[36px] text-black"
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="h-[400px] flex justify-center items-center">
          {" "}
          <Loader />
        </div>
      )}
    </main>
  );
}
