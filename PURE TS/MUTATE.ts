//^ MUTATE ===================================================================================================================================================================>
// MUTATE
// IMMUTATE
// MUTABLE
// IMMUTABLE

// PRIMITIVE TYPES
// REFERENCE TYPES


// PRIMITIVE TYPES
let number1 = 12
let number2 = number1
number2 = 8 // REASIGGN => IMMUTABLE

console.log(number1, number2)

// REFERENCE TYPES
let obj1 = { id: 1, title: "FAKE TITLE" }
let obj2 = obj1

obj2.id = 50
obj2.title = "REAL TITLE" // MUTATING => MUTABLE

console.log(obj1, obj2)


