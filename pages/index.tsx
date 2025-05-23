//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________
import React from "react";

const Home = () => {
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
    <>
      <div>
        <h1 className="text-3xl font-extrabold bg-purple-700 text-center py-2 border-b-8">
          REDUX HOME PAGE
        </h1>
      </div>
    </>
  );
};

export default Home;
