import styled from 'styled-components'

export const Container = styled.div`
  background-color: #13120e;
  min-height: 100vh;
  padding-bottom: 24px;
  width: 100%;
`

export const Content = styled.div`
  margin: auto;
  max-width: 1200;
  width: 80%;


  @media (max-width: 768px) {
    padding: 0 16px;
    width: 100%;
  }
`