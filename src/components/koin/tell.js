import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

function Tell() {
  //const [Price, setPrice] = useState("1000");

  return (
    <div>
      <div className="flex flex-row gap-4 ">
        <h1 className="text-xl font-bold">Fundamentals</h1>
        <FaInfoCircle className="mt-auto mb-auto" />
      </div>
      <div className="flex justify-around mt-6 sm:flex-col md:flex-col">
        <div className="flex flex-col justify-center w-[47%] sm:w-auto md:auto">
          <div className="flex justify-around border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">Bitcoin Price</div>
            <div className="flex w-[50%] justify-end">${"16,815.46"}</div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">24h Low / 24h High</div>
            <div className="flex w-[50%] justify-end">
              ${"16,382.07 / "}${"16,874.12"}
            </div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">7d Low / 7d High</div>
            <div className="flex w-[50%] justify-end">
              ${"16,382.07 / "}${"16,874.12"}
            </div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">Trading Volume</div>
            <div className="flex w-[50%] justify-end">${"23,249,202,782"}</div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">Market Cap Rank</div>
            <div className="flex w-[50%] justify-end">#{1}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[47%] sm:w-auto md:auto">
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">Market Cap</div>
            <div className="flex w-[50%] justify-end">${"323,507,290,047"}</div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%] sm:w-[70%]">Market Cap Dominance</div>
            <div className="flex w-[50%] sm:w-[30%] justify-end">
              ${"38.343%"}
            </div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">Volume / Market Cap</div>
            <div className="flex w-[50%] justify-end">${"0.0718"}</div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">All-Time High</div>
            <div className="flex flex-col w-[80%]">
              <div className="flex justify-end gap-2">${"69,044.77 "} <span className="text-red-500">{" -75.6%"}</span></div>
              <div className="flex justify-end text-xs">
                {"Nov 10, 2021 (about 1 year)"}
              </div>
            </div>
          </div>
          <div className="flex justify-around  border-b-2 pb-2 pt-2 text-sm">
            <div className="flex w-[50%]">All-Time Low</div>
            <div className="flex flex-col w-[60%]">
              <div className="flex justify-end gap-2">${"67.81 "} <span className="text-green-500">{"24729.1%"}</span></div>
              <div className="flex justify-end text-xs">
                {"Jul 06, 2013 (over 9 year)"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tell;
