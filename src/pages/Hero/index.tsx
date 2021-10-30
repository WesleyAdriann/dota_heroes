import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Page } from '../../components/Page'
import { Header } from '../../components/Header'
import { useAppSelector } from '../../store'

import { Content, InfoCard, Text } from './styles'

export const Hero = () => {
  const history = useHistory()
  const heroPage = useAppSelector((state) => state.heroesReducer.selectedHero)

  useEffect(() => {
    if (!heroPage) history.push('/')
  }, [history, heroPage])

  return (
    <Page>
      <Header>
        {heroPage?.localized_name}
      </Header>
      <Content>
        <InfoCard>
          <Text>
            Attack Type: <strong>{heroPage?.attack_type}</strong>
          </Text>
          <Text>
            Primary Attribute: <strong>{heroPage?.primary_attr.toUpperCase()}</strong>{'\n'}
          </Text>
          <Text>
            Roles:
            <ul>
              {heroPage?.roles.map(role => (
                <Text>
                  <li>
                    {role}
                  </li>
                </Text>
              ))}
            </ul>
          </Text>
        </InfoCard>
        <img src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroPage?.img}.png`} alt={heroPage?.name} />
      </Content>
    </Page>
  )
}