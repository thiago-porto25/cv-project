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
  const [info1, setInfo1] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })
  const [info2, setInfo2] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })
  const [info3, setInfo3] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })
  const [info4, setInfo4] = useState({
    company: '',
    position: '',
    description: '',
    start: '',
    end: '',
  })

  const boxes = (
    <>
      <Box info={info1} setInfo={setInfo1} />
      {count >= 1 && <Box info={info2} setInfo={setInfo2} />}
      {count >= 2 && <Box info={info3} setInfo={setInfo3} />}
      {count >= 3 && <Box info={info4} setInfo={setInfo4} />}
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

          let expInfo
          if (!noExp) {
            expInfo = [info1, info2, info3, info4].filter(
              (item) => item.company !== '' && item.position !== ''
            )
          } else expInfo = 'none'
          props.setCurrentCv({ ...props.currentCv, experience: expInfo })
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
