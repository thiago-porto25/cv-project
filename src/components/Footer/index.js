import React from 'react'
import { Container, Link, Text } from './styles/Footer'

export default function Footer() {
  return (
    <Container>
      <Text>
        WebPage created by{' '}
        <Link href="https://github.com/thiago-porto25">
          <i className="fab fa-github-square"></i> Thiago Porto.
        </Link>{' '}
        Icons by <Link href="https://fontawesome.com/">Font Awesome.</Link>
      </Text>
    </Container>
  )
}
