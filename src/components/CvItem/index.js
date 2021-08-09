import React, { useState } from 'react'
import { Container, Button } from './styles/CvItem'

export default function CvItem(props) {
  return (
    <>
      <Button {...props}>i'm CvItem</Button>
    </>
  )
}
