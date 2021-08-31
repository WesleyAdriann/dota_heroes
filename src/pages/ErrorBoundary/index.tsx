import React, { Component } from 'react'

import {
  Container,
  Text
} from './styles'

type IErrorBoundaryProps = {}
type IErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErrorBoundary error: ', error, errorInfo)
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasError) return (
      <Container>
           <Text>Houve um erro inesperado</Text>
         </Container>
    );
    return this.props.children;
  }
}