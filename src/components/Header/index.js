import React from 'react'
import { Container, Icon, HomeButton, NewCVButton } from './styles/Header'

export default function Header(props) {
  const handleHomeClick = () => {
    if (!props.inHome) {
      props.setInHome(true)
      props.setInCreating(false)
      props.setInPreview(false)
    } else return
  }
  return (
    <Container>
      <span>CV CREATOR</span>
      {props.inHome ? (
        <NewCVButton
          onClick={() => {
            props.setInHome(false)
            props.setInCreating(true)
          }}
        >
          <Icon className="fas fa-plus"></Icon> New CV
        </NewCVButton>
      ) : (
        <HomeButton onClick={handleHomeClick}>
          <i className="fas fa-home"></i>
        </HomeButton>
      )}
    </Container>
  )
}
