import React from "react";

const test = () => {
  // PURE FUNCTION => HAVE SAME OUTPUT EVERYTIME
  function DoubleNumber(number) {
    return number * 2;
  }

  // IMPURE FUNCTION => DOESNT HAVE SAME OUTPUT EVERYTIME
  function randomNumber(number) {
    return number * Math.random();
  }

  console.info("PURE FUNCTION ==>", DoubleNumber(10));
  console.info("IMPURE FUNCTION ==>", randomNumber(10));

  return <div>test</div>;
};

export default test;
