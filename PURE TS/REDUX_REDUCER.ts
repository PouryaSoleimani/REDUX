//^ REDUX REDUCER =====================================================================================================================================================
//COUNTER ACTIONS
let incrementAction = { type: 'INCREMENT' }
let decrementAction = { type: 'DECREMENT' }

let newStore = 0
//COUNTER REDUCER 
function counterReducer(action: { type: string }) {
  switch (action.type) {

    case "INCREMENT": { return newStore + 1 }
    case "DECREMENT": { return newStore - 1 }

    default:
      break;
  }

}