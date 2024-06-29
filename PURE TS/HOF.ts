//^ HIGH ORDER FUNCTIONS ===========================================================================================================================================================> 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//! NOT A HOF
function randomNumberGenerator() { return Math.ceil(Math.random() * 1000) }

//* A HOF
let evenNumbers = numbers.filter((number: number) => {
  return number % 2 === 0
})
console.log(evenNumbers)


//RANDOM ID GENERATOR
function randomIdGenerator(username: string, randomIdGenerator: Function) {
  return `${username} : ${randomIdGenerator()}`
}
console.log(randomIdGenerator("pourya", randomNumberGenerator))