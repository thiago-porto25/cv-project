import React from 'react'
import { Bar, Container, Item, Text, Line } from './styles/ProgressBar'

export default function ProgressBar({ progress }) {
  return (
    <Container>
      <Text>Progress: {progress}/4</Text>
      <Line />
      <Bar progress={progress}>
        <Item />
        <Item />
        <Item />
        <Item />
      </Bar>
    </Container>
  )
}
