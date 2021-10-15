import React from 'react'

import { Container, Title } from './styles'

interface IHeader {
  children: React.ReactNode
}

export const Header: React.FC<IHeader> = ({ children }) => (
  <Container>
    <Title>
      {children}
    </Title>
  </Container>
)