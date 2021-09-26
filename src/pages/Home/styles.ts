import styled from 'styled-components'

import { EHeroPrimaryAttr } from '../../utils'

import { IHeroImage, IHeroPrimaryAttr } from './types'

export  const Header = styled.header`
  padding: 24px 0;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.fontWhite};
  font-size: 46px;
`
export const Content = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const HeroWrapper = styled.div`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 72px;
  justify-content: flex-end;
  margin: 12px;
  position: relative;

  transition: transform 0.3s;

  width: 128px;

  &:hover {
    transform: scale(1.6, 1.6);
    z-index: 2;
  }
`

export const HeroText = styled.p`
  color: white;
  margin: 4px;
  position: absolute;
  text-align: right;
  user-select: none;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  width: 100%;
`


export const HeroPrimaryAttr = styled.img.attrs<IHeroPrimaryAttr>(({heroAttr}) => ({
  src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${EHeroPrimaryAttr[heroAttr]}.png`
}))<IHeroPrimaryAttr>`
  height: 32px;
  margin-bottom: 8px;
  position: absolute;
  width: 32px;
`

export const HeroImage = styled.img.attrs<IHeroImage>(({heroImg}) => ({
  src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImg}.png`
}))<IHeroImage>`
  box-shadow: 5px 5px 5px -5px #000000;
  height: 100%;
  width: 100%;
`