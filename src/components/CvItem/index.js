import React from 'react'
import {
  ButtonsContainer,
  Container,
  Delete,
  PreviewButton,
  Text,
} from './styles/CvItem'

export default function CvItem(props) {
  const handleDelete = (id) => {
    const newData = props.data.filter((_, i) => i !== id)
    props.setData(newData)
  }

  return (
    <Container>
      <Text>{props.itemData.fullName.split(' ')[0]}</Text>
      <ButtonsContainer>
        <PreviewButton {...props}>Open CV</PreviewButton>
      </ButtonsContainer>
      <Delete onClick={() => handleDelete(props.itemId)}>
        <i className="fas fa-trash-alt"></i>
      </Delete>
    </Container>
  )
}
