import React from 'react';
import { MdArrowDropUp } from "react-icons/md";

function Top3() {
  const staticData = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      thumb: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png', // Replace with an actual URL or image path if needed
      price_change_percentage_24h: '8.21',
    },
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      thumb: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png', // Replace with an actual URL or image path if needed
      price_change_percentage_24h: '5.26',
    },
    {
      name: 'Polygon',
      symbol: 'MATIC',
      thumb: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png', // Replace with an actual URL or image path if needed
      price_change_percentage_24h: '4.32',
    },
  ];

  return (
    <div className='bg-white mr-[4rem] sm:mr-0 md:mr-0 mt-[1rem] rounded-2xl p-6 sm:p-4'>
      <h2 className="text-lg font-bold mb-4">Trending Coins (24h)</h2>
      {staticData.map((item, index) => (
        <div className="flex flex-col m-1 rounded-lg" key={index}>
          <div className="flex gap-2 justify-between mt-4 font-bold">
            <div className="flex gap-2">
              <div>
                <img src={item.thumb} alt={item.name} className="w-6 h-6" />
              </div>
              <div>{item.name}</div>
              <div>{`(${item.symbol})`}</div>
            </div>
            <div className="flex bg-[#EBF9F4] h-[50%] p-1 pl-1 pr-2 rounded text-[#14B079]">
              <MdArrowDropUp className="text-lg" />
              <div className="text-xs">{`${item.price_change_percentage_24h}%`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Top3;
