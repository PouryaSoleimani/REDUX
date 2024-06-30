//^ COUNTER_REDUCER
const incButton = document.querySelector("#incButton") as HTMLButtonElement
const decButton = document.querySelector("#decButton") as HTMLButtonElement
const resButton = document.querySelector("#resButton") as HTMLButtonElement
const numElem = document.querySelector("#numElem") as HTMLHeadingElement


type ActionType2 = { type: string }
//* REDUCER
function counterReducer2(action: ActionType2) {
  switch (action.type) {
    case "INCREMENT": { }
    case "DECREMENT": { }
    case "RESET": { }
    default: { }
  }
}
