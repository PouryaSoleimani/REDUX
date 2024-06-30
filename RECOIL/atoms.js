//^ ATOMS
import { atom } from "recoil";


export const COUNTERSTATE = atom({ key: 'counterstate', default: 0, });

export const TODOS = atom({ key: 'todos', default: [], });