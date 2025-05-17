import React from "react";

const reducerfunction = () => {
  // TEST 1
  const numArrays = [1, 2, 3, 4, 5];

  const sumNumber = numArrays.reduce((a, b) => {
    return a + b;
  });

  console.info("SUM ====> ", sumNumber);

  // TEST 2
  const numArrays2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const sum2 = numArrays2.reduce((firstArray, secondArray) => {
    return [...firstArray, ...secondArray]; // Concating the two arrays to achieve just one array
  });

  // TEST 3
  console.info("SUM 2 =========>", sum2);

  const alphabetArray = [["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"]];
  const alphabetString = alphabetArray.reduce((a, b) => {
    return a.concat(b);
  });
  console.info(
    "ALPHABET =====>",
    alphabetString.join().toUpperCase().replaceAll(",", " ")
  );

  const fruitsArray = [
    ["apple", "banana"],
    ["cherry", "date"],
    ["elderberry", "fig"],
  ];
  const reduceddFruits = fruitsArray.reduce((a, b) => {
    return a.concat(b);
  });

  console.info("FRUITS =====>", reduceddFruits);

  return (
    <div>
      <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">
        REDUCER FUNCTIONS
      </h1>
    </div>
  );
};

export default reducerfunction;
