//* REDUCE METHOD
const myArray = [1, 2, 3, 4, 5, 6]

const arrayOutput = myArray.reduce((a, b) => {
  console.log(a, b)
  return a + b
})

console.log(arrayOutput)

