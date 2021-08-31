import React, { useEffect, useCallback } from 'react'

import { Page } from '../../components/Page'
import { useAppSelector, useAppDispatch } from '../../store'
import { setHeroes, setSelectedHero } from '../../store/slices/heroesSlice'

import { getHeroStats } from '../../services/openDota'

import { Title } from './styles'

export const Home = () => {
  const dispatch = useAppDispatch()
  const heroes = useAppSelector((state) => state.heroesReducer.heroes)

  const requestHeroes = useCallback(async () => {
    try {
      const response = await getHeroStats()
      dispatch(setHeroes(response.data))
    } catch (error) {
      console.log('Error in requestHeroes', error)
    }
  }, [dispatch])

  useEffect(() => {
    if(!heroes.length) requestHeroes()
  }, [heroes.length, requestHeroes])

  return (
    <Page>
      <Title>Heroes</Title>
    </Page>
  )
}