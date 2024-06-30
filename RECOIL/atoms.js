//^ ATOMS
import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
})

export const COUNTERSTATE = atom({ key: 'counterstate', default: 0, });

export const TODOS = atom({
  key: 'todos', default: [
    { id: 1, title: "GO TO GYM", isCompleted: false, effects_UNSTABLE: [persistAtom], }
  ],
});