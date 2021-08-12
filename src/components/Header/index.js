import React from 'react'
import { Container, Button } from './styles/Header'

export default function Header(props) {
  const handleClick = () => {
    if (!props.inHome) {
      props.setInHome(true)
      props.setInCreating(false)
      props.setInPreview(false)
    } else return
  }
  return (
    <Container>
      <span>Cv Creator App</span>
      <Button onClick={handleClick}>
        <i className="fas fa-home"></i>
      </Button>
    </Container>
  )
}
