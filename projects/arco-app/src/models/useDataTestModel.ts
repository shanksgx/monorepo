import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'
//Recoil持久化存储，默认为localStroge
const { persistAtom } = recoilPersist()

export const listsState = atom({
  key: 'listState',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const lengthState = selector({
  key: 'lengthState',
  get: ({ get }) => {
    const length = get(listsState).length
    return length
  }
})
