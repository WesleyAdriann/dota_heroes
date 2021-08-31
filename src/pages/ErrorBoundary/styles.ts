import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const Text = styled.p`
  color: ${(props) => props.theme.fontWhite};
  font-size: 32px;
`