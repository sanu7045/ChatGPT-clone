import React, { useState } from 'react';
import {  PiSparkle, PiStarFour } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Upgrade() {
  const [activePlan, setActivePlan] = useState('chatgpt');

  return (
    <div className="w-[400px] bg-white rounded-[24px] p-6 shadow-xl border border-gray-100 flex flex-col gap-6">
      {['plus', 'chatgpt'].map((id) => (
        <div key={id} className="flex justify-between items-center group">
          <div className="flex items-center gap-4">
            <div className="text-gray-900">
              {id === 'plus' ? <PiSparkle className="text-3xl font-bold" /> : <PiStarFour className="text-3xl font-bold" />}
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-medium text-gray-900">{id === 'plus' ? <span className='-ml-13'>ChatGPT Plus</span> : <span className='-ml-18'>ChatGPT</span>}</p>
              <p className="text-sm font-normal text-gray-400">{id === 'plus' ? 'Our smartest model & more' : 'Great for everyday tasks'}</p>
            </div>
          </div>
          <div className="flex items-center justify-end min-w-[100px]">
            {activePlan === id ? (
              <div className="rounded-full p-0.5">
                <IoIosCheckmarkCircle className="text-2xl text-black" />
              </div>
            ) : (
              <button
                onClick={() => setActivePlan(id)}
                className="px-5 py-2 rounded-full border border-gray-200 text-gray-900 font-medium text-base hover:bg-gray-50 transition-colors"
              >
                Upgrade
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Upgrade;