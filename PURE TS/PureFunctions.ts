//* PURE FUNCTIONS ==========================================================================================================================================>
function addPure(myNumber: number) { return myNumber * 2 }



//! IMPURE FUNCTIONS ========================================================================================================================================>
let defNumber = 10
function addImpure(myNumber: number) {
  console.log(myNumber)
  return myNumber * 2 + defNumber
}