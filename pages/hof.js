import React from "react";

const hof = () => {
    // NORMAL FUNCTION
  function randomNumebr() {
    return Math.floor(Math.random() * 1000);
  }
  console.info(randomNumebr());



  return (
    <div>
      <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">
        HOF FUNCTIONS
      </h1>
    </div>
  );
};

export default hof;
