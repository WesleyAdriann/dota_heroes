import React from 'react'

import { Container, Content } from './styles'

export const Page: React.FC = ({ children }) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
)