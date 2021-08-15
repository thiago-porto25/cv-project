import React, { useState, useEffect } from 'react'
import { Container, Icon, HomeButton, NewCVButton } from './styles/Header'

export default function Header(props) {
  const [isDisabled, setIsDisabled] = useState(true)

  const handleHomeClick = () => {
    if (!props.inHome) {
      props.setInHome(true)
      props.setInCreating(false)
      props.setInPreview(false)
    } else return
  }

  useEffect(() => {
    if (props.data && props.data.length === 4) setIsDisabled(true)
    else setIsDisabled(false)
  }, [props.data])

  return (
    <Container>
      <span>CV CREATOR</span>
      {props.inHome ? (
        <NewCVButton
          disabled={isDisabled}
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
