<!-- ~ REDUX TUTORIAL -->
1 - make a folder name {redux} in the root directory of the project
2 - inside the redux folder , make a file named {reducer.js} =>
3 - inside the file {reducer.js} :

```js
 const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": { return state + 1 }
    case "DECREMENT": { return state - 1 }
    default: { return state }
  }
}
export default reducer
```

4 - make a file named {store.js} in the redux folder , inside the {store.js} file : 

```js
import { legacy_createStore } from "redux";
import reducer from "./reducer";

const store = legacy_createStore(reducer)

export default store
```


5- make a file named {actionTypes.js} in the redux folder , inside the {actionTypes.js} file : 

```js 
const counterIncrement = "INCREMENT"
const counterDecrement = "DECREMENT"
```