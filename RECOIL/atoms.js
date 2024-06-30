//^ ATOMS
import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const COUNTERSTATE = atom({ key: 'counterstate', default: 0, });

export const TODOS = atom({
  key: 'todos', default: [{ id: 1, title: "GO TO GYM", isCompleted: false, effects_UNSTABLE: [persistAtom], }],
});