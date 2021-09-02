import styled from 'styled-components'

import { IHeroImage } from './types'

export  const Header = styled.header`
  padding: 24px 0;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.fontWhite};
  font-size: 46px;
`
export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const HeroWrapper = styled.div`
  padding: 12px;
`

export const HeroImage = styled.img.attrs<IHeroImage>(({heroImg}) => ({
  src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImg}.png`
}))<IHeroImage>`
  cursor: pointer;
  height: 72px;
  width: 128px;
`