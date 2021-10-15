import React, { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Page } from '../../components/Page'
import { Header } from '../../components/Header'
import { useAppSelector, useAppDispatch } from '../../store'
import { setHeroes, setSelectedHero, IHeroState } from '../../store/slices/heroesSlice'

import { getHeros } from '../../services/openDota'


import { Content, HeroWrapper, HeroText, HeroImage, HeroPrimaryAttr } from './styles'


export const Home: React.FC = (props) => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const heroes = useAppSelector((state) => state.heroesReducer.heroes)

  const requestHeroes = useCallback(async () => {
    try {
      const response = await getHeros()
      console.log(response.data)
      const heroes: IHeroState[] = response.data.map((hero) => ({
        ...hero,
        img: hero.name.replace('npc_dota_hero_', '')
      }))
      dispatch(setHeroes(heroes))
    } catch (error) {
      console.log('Error in requestHeroes', error)
    }
  }, [dispatch])


  const onClickHero = (hero: IHeroState) => {
    console.log(hero)
    dispatch(setSelectedHero(hero))
    history.push(`/${hero.name}`)
  }

  useEffect(() => {
    if(!heroes.length) requestHeroes()
  }, [heroes.length, requestHeroes])

  return (
    <Page>
      <Header>Heroes</Header>
      <Content>
        {
          heroes.map((hero) => (
            <HeroWrapper key={hero.name} onClick={() => onClickHero(hero)}>
              <HeroPrimaryAttr heroAttr={hero.primary_attr} alt={hero.name} />
              <HeroText>{hero.localized_name}</HeroText>
              <HeroImage heroImg={hero.img} alt={hero.name} />
            </HeroWrapper>
          ))
        }
      </Content>
    </Page>
  )
}