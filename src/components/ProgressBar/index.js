import React from 'react'
import { Container, Text, Line } from './styles/ProgressBar'

export default function ProgressBar({ progress }) {
  return (
    <Container>
      <Text>Progress: {progress}/4</Text>
      <Line />
    </Container>
  )
}
