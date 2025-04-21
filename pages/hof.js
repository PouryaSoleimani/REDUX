import React from "react";

const hof = () => {
  // NORMAL FUNCTION ==========================================================================================================================================
  function randomNumebr() {
    return Math.floor(Math.random() * 1000);
  }
  console.info(randomNumebr());

  // HOF FUNCTIONS ==========================================================================================================================================
  const Numbers = [1, 2, 3, 4, 5, 6];
  const DoubledNumber = Numbers.map((item) => {
    return item * 2;
  });
  const FilteredNumber = Numbers.filter((item) => {
    return item % 2 == 0;
  });
  console.info("DOUBLED NUMBERS", DoubledNumber);
  console.info("FILTERED NUMBERS", FilteredNumber);

  //  USER GENERATOR ( HOF FUNCTION )
  function randomNumberGenerator() {
    return Math.floor(Math.random() * 1000);
  }
  
  function userGenerator(userName, randomNumberGenerator) {
    const _USER = `${userName} - ID : ${randomNumberGenerator()}`;
    console.info(_USER);
  }

  userGenerator("Pourya", randomNumberGenerator);

  // RETURN ============================================================================================================================================================
  return (
    <div>
      <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">
        HOF FUNCTIONS
      </h1>
    </div>
  );
};

export default hof;
