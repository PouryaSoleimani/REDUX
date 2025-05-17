//! REDUX REDUCER FILE
import { counterIncrement, counterDecrement } from "./actionTypes";
import { incrementAction, decrementAction } from "./actionTypes";

// COUNTER REDUCER
export const counterReducer = (action) => {
  switch (action) {
    case "INCREMENT": {
      return newStore;
    }
    case "DECREMENT": {
      return newStore;
    }
  }
};

// TODOS REDUCER
export const todosReducer = (action) => {
  switch (action.type) {
    case "ADD_TO": {
      return newTodos;
    }
    case "COMPLETED_TODO": {
      return newTodos;
    }
    case "REMOVE_TODO": {
      return newTodos;
    }
  }
};
