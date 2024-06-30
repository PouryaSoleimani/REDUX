//^ ATOMS =========================================================================================================================================================================>
import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const COUNTERSTATE = atom({ key: 'counterstate', default: 0, effects_UNSTABLE: [persistAtom] });


export const TODOS = atom({ key: 'todos', default: [], effects_UNSTABLE: [persistAtom] });