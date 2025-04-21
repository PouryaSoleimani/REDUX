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
  // HOF FUNCTIONS  2==========================================================================================================================================

  function FOO() {
    // A HOF that return a function for output
    console.info("FOOOOOO OUTSIDE");
    return function FOOINNER() {
      return "HELLO FROM FOOOOO INSIDE";
    };
  }
  console.info(FOO()());

  // HOF FUNCTIONS TYPE 2
  function firstFunc(numberOne) {
    console.info("1st FUNCTION", numberOne);
    return function secondFunc(numberTwo) {
      console.info("2nd FUNCTION", numberTwo);
    };
  }
  console.info(firstFunc(5)(10));

  // SHORT FORM
  const firstFunc2 = (numberOne) => (numberTwo) => numberOne + numberTwo;
  console.info(firstFunc2(5)(10));

  const hofFunction = () => {
    return () => {
      console.info("INNER FUNCTION HOF");
    };
  };
  hofFunction()(); // CALLING THE INNER FUNCTION OF A HOF FUNCTION

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
