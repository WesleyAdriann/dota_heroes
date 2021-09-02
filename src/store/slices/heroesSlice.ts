import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IHero } from '../../services/types'

export interface IHeroState extends IHero {
  img: string
}

export interface heroesState {
  heroes: IHeroState[]
  selectedHero: IHeroState | null
}

const initialState: heroesState = {
  heroes: [],
  selectedHero: null
}

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<IHeroState[]>) => {
      state.heroes = action.payload
    },
    setSelectedHero: (state, action: PayloadAction<IHeroState>) => {
      state.selectedHero = action.payload
    }
  },
})

export const { setHeroes, setSelectedHero } = heroesSlice.actions

export default heroesSlice.reducer