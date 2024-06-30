//^ REDUX REDUCER =====================================================================================================================================================
type ActionType = { type: string }
//* COUNTER ACTIONS =====================================================================================================================================================
let incrementAction = { type: 'INCREMENT' }
let decrementAction = { type: 'DECREMENT' }
let newStore = 0
// * COUNTER REDUCER 
function counterReducer(action: ActionType) {
  switch (action.type) {
    case "INCREMENT": { return newStore + 1 }
    case "DECREMENT": { return newStore - 1 }
    default: { return newStore }
  }
}
// TODOLIST ACTIONS =====================================================================================================================================================
let allTodos: [] = []

let createTodoAction = { type: "ADD_TODO" }
let removeTodoAction = { type: "REMOVE_TODO" }
let updateTodoAction = { type: "UPDATE_TODO" }
let getTodosAction = { type: "GET_TODOS" }

// TODOLIST REDUCER
function todoListReducer(action: ActionType) {
  switch (action.type) {
    case "ADD_TODO": { return allTodos }
    case "REMOVE_TODO": { return allTodos }
    case "UPDATE_TODO": { return allTodos }
    case "GET_TODOS": { return allTodos }
    default: { return allTodos }
  }
}
//? SHOP ACTIONS =====================================================================================================================================================
