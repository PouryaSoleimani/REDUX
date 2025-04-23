//* REDUX STORE FILE
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//* STORES ________________________________________________________________________________________________________________________________________________
export const counterStore = 0;

export const todolistStore = [
  { id: 1, title: "learn js", createdAT: "today", isDone: false },
  { id: 2, title: "learn redux", createdAT: "yesterday", isDone: false },
];

// ^ SHOP  STORE __________________________________________________________________________________________________________________________________________
let shopStore = {
  products: [],
  atricles: [],
  users: [],
  admins: [],
  orders: [],
};

// ! ACTIONS ______________________________________________________________________________________________________________________________________________
// COUNTER
let incrementAction = { type: "INCREMENT" };
let decrementAction = { type: "DECREMENT" };

// TODOLIST
let addTodoAction = { type: "ADD_TODO" };
let completedTodoAction = { type: "COMPLETE_TODO" };
let removeTodoAction = { type: "REMOVE_TODO" };
let getTodosAction = { type: "GET_TODOS" };
