import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { theme, GlobalStyle } from '../styles'
import { store } from '../store'

import { Routes } from './Routes'
import { ErrorBoundary } from './ErrorBoundary'

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>
)