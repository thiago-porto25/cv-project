/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Box from '../ExpBox'
import {
  AddButton,
  Checkbox,
  Container,
  Form,
  Frame,
  Label,
  NextButton,
  RemoveButton,
  Text,
  Title,
} from './styles/Experience'

export default function Experience(props) {
  const [count, setCount] = useState(0)
  const [noExp, setNoExp] = useState(false)
  const [data1, setData1] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })
  const [data2, setData2] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })
  const [data3, setData3] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })
  const [data4, setData4] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })

  const boxes = (
    <>
      <Box data={data1} setData={setData1} />
      {count >= 1 && <Box data={data2} setData={setData2} />}
      {count >= 2 && <Box data={data3} setData={setData3} />}
      {count >= 3 && <Box data={data4} setData={setData4} />}
    </>
  )

  useEffect(() => {
    props.setProgress(3)
    return () => {
      setCount(0)
      setNoExp(false)
    }
  }, [])

  return (
    <Container>
      <Title>Experience</Title>
      <Form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault()
          props.setInExperience(false)
          props.setInSkills(true)

          let expData
          if (!noExp) {
            expData = [data1, data2, data3, data4].filter(
              (item) => item.company !== '' && item.position !== ''
            )
          } else expData = 'none'
          props.setCurrentCv({ ...props.currentCv, experience: expData })
        }}
      >
        <Frame>
          {!noExp ? boxes : null}
          <RemoveButton
            type="button"
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            X
          </RemoveButton>
        </Frame>
        <Label>I have no prior experience</Label>
        <Checkbox
          type="checkbox"
          value={noExp}
          onClick={() => setNoExp((prev) => !prev)}
        />
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
