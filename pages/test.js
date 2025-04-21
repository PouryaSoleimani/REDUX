import React from "react";

const test = () => {
  // PURE FUNCTION => HAVE SAME OUTPUT EVERYTIME
  function DoubleNumberPure(number) {
    return number * 2;
  }

  // IMPURE FUNCTION => HAVE SIDE EFFECTS (console.log)
  function DoubleNumber2(number) {
    console.log("LOG LOG");
    return number * 2;
  }

  // IMPURE FUNCTION => DOESNT HAVE SAME OUTPUT EVERYTIME
  function randomNumber(number) {
    return number * Math.random();
  }

  console.info("PURE FUNCTION ==>", DoubleNumberPure(10));
  console.info("IMPURE FUNCTION ==>", DoubleNumber2(10));
  console.info("IMPURE FUNCTION ==>", randomNumber(10));

  return <div>test</div>;
};

export default test;
