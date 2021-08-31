import React, {  Component } from 'react'

import { Routes } from './Routes'

export class App extends Component {

  componentDidCatch() {
    return <div />
  }

  render() {
    return (
      <Routes />
    )
  }
}