import React from "react";

const mutation = () => {
  // PRIMITIVE TYPES ( DOESNT CHANGE THE MAIN SOURE ) ===> IMMUTABLE
  let number1 = "12";
  let number2 = number1;
  number2 = "10";
  console.info(number1, number2);

  // REFRECNE TYPES ( CHANGE THE MAIN SOURE ) ===>  MUTABLE
  let obj1 = { id: 1, title: "Fake Title" };

  let obj2 = obj1;
  console.info(obj1, obj2);

  obj2.title = "REAL TITLE";
  console.info(obj1, obj2);

  let numbersArray = [1, 2, 3, 4, 5];
  numbersArray[0] = 0;

  let firstNumberArrays = [1, 2, 3, 4, 5];
  let secondNumbersArrays = firstNumberArrays.map((item) => item * 2); // DOESNT MUTATE THE FIRST ARRAY

  console.info(firstNumberArrays, secondNumbersArrays);

  let reversedNumbersArrays = [...firstNumberArrays].reverse();
  console.info("FIRST ARRAY ==>", firstNumberArrays);
  console.info("REVERSED ARRAY ==>", reversedNumbersArrays);

  return (
    <div>
      <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">
        {" "}
        MUTATIONS{" "}
      </h1>
    </div>
  );
};

export default mutation;
