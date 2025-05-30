//* REDUX STORE FILE
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//* STORES ________________________________________________________________________________________________________________________________________________
// COUNTER STORE _________________________________________________________________________________________________________________________________________
export const counterStore = 0;

// TODO LIST STORE _______________________________________________________________________________________________________________________________________
export const todolistStore = [
  { id: 1, title: "learn js", createdAT: "today", isDone: false },
  { id: 2, title: "learn redux", createdAT: "yesterday", isDone: false },
];

// SHOP  STORE __________________________________________________________________________________________________________________________________________
let shopStore = {
  products: [],
  atricles: [],
  users: [],
  admins: [],
  orders: [],
};
