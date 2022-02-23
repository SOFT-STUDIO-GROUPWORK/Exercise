import React, { Dispatch, SetStateAction, useState } from "react";

const Counter: React.FC = () => {
  const MIN_VALUE: number = 0;
  const MAX_VALUE: number = 10;
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    useState(MIN_VALUE);

  const handleIncrease = () => {
    if (count >= MAX_VALUE) alert("Can't vote anymore");
    else setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count <= MIN_VALUE) alert("Can't unvote anymore");
    else setCount(count - 1);
  };

  const displayCount = (): string => {
    if (count === MAX_VALUE) return "MAX";
    else if (count === MIN_VALUE) return "MIN";
    else return count.toString();
  };

  const getButtonStyle = (className: string): string => {
    return `${className} text-white font-bold py-2 px-4 rounded m-0 w-fit border-b-4 active:border-b-0`;
  };

  return (
    <div className='flex flex-row justify-items-center'>
      <button className={getButtonStyle("bg-green-500 hover:bg-green-600 border-green-700")} onClick={handleIncrease}>
        Click to Vote
      </button>
      <button className='bg-gray-50 cursor-default mx-4 rounded-xl text-lg p-3 border-green-900 border-2 font-bold w-full max-w-[20%]'>
        {displayCount()}
      </button>
      <button className={getButtonStyle("bg-red-500 hover:bg-red-600 border-red-700")} onClick={handleDecrease}>
        Click to Unvote
      </button>
    </div>
  );
};

export default Counter;
