import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Routes } from './Routes'
import { ErrorBoundary  } from './ErrorBoundary '

import { theme, GlobalStyle } from '../styles'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </ThemeProvider>
)