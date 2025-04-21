import React from "react";

const reducerfunction = () => {
  //  FIRST TEST
  const numArrays = [1, 2, 3, 4, 5];

  const sumNumber = numArrays.reduce((a, b) => {
    return a + b;
  });

  console.info("SUM ====> ", sumNumber);
  // SECOND TEST
  const numArrays2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const sum2 = numArrays2.reduce((firstArray, secondArray) => {
    return [...firstArray, ...secondArray];
  });

  console.info("SUM 2 =========>", sum2);

  return (
    <div>
      <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">
        REDUCER FUNCTIONS
      </h1>
    </div>
  );
};

export default reducerfunction;
