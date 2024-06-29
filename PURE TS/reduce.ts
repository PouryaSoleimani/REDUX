//* REDUCE METHOD
let myArray = [1, 2, 3, 4, 5, 6]
let arrayOutput = myArray.reduce((a, b) => { console.log(a, b); return a + b })
console.log(arrayOutput)


let myArray2 = [10, 20, 30, 40, 50, 60]
let reducedArray = myArray2.reduce((x, y) => { console.log(x, y); return x + y })
console.log(reducedArray)