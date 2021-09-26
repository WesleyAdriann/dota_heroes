import React, { useEffect, useCallback } from 'react'

import { Page } from '../../components/Page'
import { useAppSelector, useAppDispatch } from '../../store'
import { setHeroes, setSelectedHero, IHeroState } from '../../store/slices/heroesSlice'

import { getHeros } from '../../services/openDota'


import { Header, Title, Content, HeroWrapper, HeroText, HeroImage, HeroPrimaryAttr } from './styles'

export const Home = () => {
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
    console.log(hero.name, ' selected')
    dispatch(setSelectedHero(hero))
  }

  useEffect(() => {
    if(!heroes.length) requestHeroes()
  }, [heroes.length, requestHeroes])

  return (
    <Page>
      <Header>
        <Title>Heroes</Title>
      </Header>
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