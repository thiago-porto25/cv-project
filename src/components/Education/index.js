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
  const [data1, setData1] = useState({
    institution: '',
    degree: '',
    start: '',
    end: '',
  })
  const [data2, setData2] = useState({
    institution: '',
    degree: '',
    start: '',
    end: '',
  })
  const [data3, setData3] = useState({
    institution: '',
    degree: '',
    start: '',
    end: '',
  })
  const [data4, setData4] = useState({
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
          const educData = [data1, data2, data3, data4].filter(
            (item) => item.institution !== '' && item.degree !== ''
          )
          props.setCurrentCv({ ...props.currentCv, education: educData })
        }}
      >
        <Frame>
          <Box data={data1} setData={setData1} />
          {count >= 1 && <Box data={data2} setData={setData2} />}
          {count >= 2 && <Box data={data3} setData={setData3} />}
          {count >= 3 && <Box data={data4} setData={setData4} />}
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
