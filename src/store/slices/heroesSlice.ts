import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IHero } from '../../services/types'

export interface heroesState {
  heroes: IHero[]
  selectedHero: IHero | null
}

const initialState: heroesState = {
  heroes: [],
  selectedHero: null
}

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<IHero[]>) => {
      state.heroes = action.payload
    },
    setSelectedHero: (state, action: PayloadAction<IHero>) => {
      state.selectedHero = action.payload
    }
  },
})

export const { setHeroes, setSelectedHero } = heroesSlice.actions

export default heroesSlice.reducer