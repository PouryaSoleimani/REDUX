//^ MUTATE ===================================================================================================================================================================>
// MUTATE
// IMMUTATE
// MUTABLE => number , string , boolean 
// IMMUTABLE => array , object 

// PRIMITIVE TYPES
// REFERENCE TYPES


// PRIMITIVE TYPES
let number1 = 12
let number2 = number1
number2 = 8 // REASIGGN => IMMUTABLE
console.log(number1, number2)

let numbersArray = [1, 2, 3, 4, 5]
numbersArray = [6, 7, 8, 9, 10]
console.log(numbersArray) //=> [6,7,8,9,10] => REASIGGNED AND NOT MUTATED

// REFERENCE TYPES
let obj1 = { id: 1, title: "FAKE TITLE" }
let obj2 = obj1

obj2.id = 50
obj2.title = "REAL TITLE" // MUTATING => MUTABLE

console.log(obj1, obj2)

// METHODS WITH MUTATE :( MUTATE = CHANGING THE ORIGINAL VARIBALE )
let array = [1, 2, 3, 4, 5, 6, 7]
let newArray = array.map(item => item * 2) // -> .map doesn't mutate the array
console.log(array, newArray) // => array = [1, 2, 3, 4, 5, 6, 7] && newArray = [2,4,6,8,10,12,14]

// METHODS WITHOUT MUTATE : ( MUTATE = CHANGING THE ORIGINAL VARIBALE )
let array2 = [10, 20, 30, 40, 50, 60]
let reversedArray = array2.reverse() //-> .reverse() mutates the array
console.log(array2, reversedArray) // array2 = [60,50,40,30,20,10] && reversedArray = [60,50,40,30,20,10]
