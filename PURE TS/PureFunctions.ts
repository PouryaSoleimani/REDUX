//* PURE FUNCTIONS =>
function addPure(myNumber: number) {
  return myNumber * 2
}


//! IMPURE FUNCTIONS =>
function addImpure(myNumber: number) {
  console.log(myNumber)
  let defNumber = 10
  return myNumber * 2 + defNumber
}