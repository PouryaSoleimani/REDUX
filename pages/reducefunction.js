import React from "react";

const reducerfunction = () => {
  const numArrays = [1, 2, 3, 4, 5];

  const sumNumber = numArrays.reduce((a, b) => {
    return a + b;
  });

  console.info("SUM ====> ", sumNumber);

  return (
    <div>
      <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">
        REDUCER FUNCTIONS
      </h1>
    </div>
  );
};

export default reducerfunction;
