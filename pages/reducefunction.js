import React from "react";

const reducerfunction = () => {
  const numArrays = [10, 20, 30, 40, 50];
  const sumNumber = numArrays.reduce((a, b) => {
    console.log(a, b);
    return a + b;
  });

  return (
    <div>
      <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">
        REDUCER FUNCTIONS
      </h1>
    </div>
  );
};

export default reducerfunction;
