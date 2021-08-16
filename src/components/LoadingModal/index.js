import React from 'react'
import { Container, Inner, Spinner, Text } from './styles/LoadingModal'

export default function LoadingModal() {
  return (
    <Container>
      <Inner>
        <Spinner />
        <Text>Loading...</Text>
      </Inner>
    </Container>
  )
}
