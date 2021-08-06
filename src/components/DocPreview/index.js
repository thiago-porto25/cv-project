import React, { useState, useEffect } from 'react'
import { Container, Line, Text, Title } from './styles/DocPreview'

export default function DocPreview(props) {
  const { currentCv, setCurrentCv } = props

  return (
    <Container>
      <Title>{currentCv.fullName}</Title>
      <Text>{currentCv.age}</Text>
      <Text>{currentCv.gender}</Text>
      <Text>{currentCv.location}</Text>
      <Text>{currentCv.phone}</Text>
      <Text>{currentCv.email}</Text>
      <Text>{currentCv.gitHub}</Text>
      <Text>{currentCv.linkedIn}</Text>
    </Container>
  )
}
