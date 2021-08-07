/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Box from '../EducBox'
import {
  AddButton,
  Container,
  Form,
  Frame,
  NextButton,
  RemoveButton,
  Text,
  Title,
} from './styles/Education'

export default function Education(props) {
  const [count, setCount] = useState(0)
  const [info1, setInfo1] = useState({
    institution: '',
    degree: '',
    start: '',
    end: '',
  })
  const [info2, setInfo2] = useState({
    institution: '',
    degree: '',
    start: '',
    end: '',
  })
  const [info3, setInfo3] = useState({
    institution: '',
    degree: '',
    start: '',
    end: '',
  })
  const [info4, setInfo4] = useState({
    institution: '',
    degree: '',
    start: '',
    end: '',
  })

  useEffect(() => {
    props.setProgress(2)
    return () => setCount(0)
  }, [])

  return (
    <Container>
      <Title>Education:</Title>
      <Form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault()
          props.setInEducation(false)
          props.setInExperience(true)
          const educInfo = [info1, info2, info3, info4].filter(
            (item) => item.institution !== '' && item.degree !== ''
          )
          props.setCurrentCv({ ...props.currentCv, education: educInfo })
        }}
      >
        <Frame>
          <Box info={info1} setInfo={setInfo1} />
          {count >= 1 && <Box info={info2} setInfo={setInfo2} />}
          {count >= 2 && <Box info={info3} setInfo={setInfo3} />}
          {count >= 3 && <Box info={info4} setInfo={setInfo4} />}
          <RemoveButton
            type="button"
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            X
          </RemoveButton>
        </Frame>
        <AddButton
          type="button"
          onClick={() => setCount((prev) => (prev < 3 ? prev + 1 : prev))}
        >
          +
        </AddButton>
        <NextButton type="submit">Next</NextButton>
      </Form>
    </Container>
  )
}

/*
ter degree, nome da instituicao, ano de entrada, ano de conclusao. se cursando deixar em branco
*/
