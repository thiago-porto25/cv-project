/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Box from '../ExpBox'
import {
  AddButton,
  ButtonsContainer,
  CancelButton,
  Checkbox,
  Container,
  Form,
  Frame,
  Label,
  Line,
  NextButton,
  RemoveButton,
  SaveButton,
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
      <Box info={info1} setInfo={setInfo1} setCount={setCount} />
      {count >= 1 && (
        <Box info={info2} setInfo={setInfo2} setCount={setCount} />
      )}
      {count >= 2 && (
        <Box info={info3} setInfo={setInfo3} setCount={setCount} />
      )}
      {count >= 3 && (
        <Box info={info4} setInfo={setInfo4} setCount={setCount} />
      )}
      <RemoveButton
        type="button"
        onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
      >
        Remove
      </RemoveButton>
      <AddButton
        type="button"
        onClick={() => setCount((prev) => (prev < 3 ? prev + 1 : prev))}
      >
        Add
      </AddButton>
      <Text>Fields with * are required!</Text>
      <Line />
    </>
  )

  useEffect(() => {
    if (props.whichPage === 'creating') props.setProgress(3)

    if (props.whichPage === 'preview') {
      setNoExp(props.currentCv.experience === 'none' ? true : false)
      setCount(
        props.currentCv.experience === 'none' ||
          props.currentCv.experience.length <= 0
          ? 0
          : props.currentCv.experience.length - 1
      )

      const exp = props.currentCv.experience

      switch (exp.length) {
        case 1:
          setInfo1(exp[0])
          break
        case 2:
          setInfo1(exp[0])
          setInfo2(exp[1])
          break
        case 3:
          setInfo1(exp[0])
          setInfo2(exp[1])
          setInfo3(exp[2])
          break
        case 4:
          setInfo1(exp[0])
          setInfo2(exp[1])
          setInfo3(exp[2])
          setInfo4(exp[3])
          break
        default:
          break
      }
    }

    return () => {
      if (props.whichPage === 'creating') {
        setCount(0)
        setNoExp(false)
      }
    }
  }, [])

  return (
    <Container>
      {props.whichPage === 'creating' && <Title>Experience</Title>}
      <Form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault()

          let expInfo
          if (!noExp) {
            expInfo = [info1, info2, info3, info4].filter(
              (item) => item.company !== '' && item.company !== undefined
            )
          } else expInfo = 'none'

          props.setCurrentCv({ ...props.currentCv, experience: expInfo })

          if (props.whichPage === 'creating') {
            props.setInExperience(false)
            props.setInSkills(true)
          }
          if (props.whichPage === 'preview') props.setIsEditingExp(false)
        }}
      >
        <Frame>{!noExp ? boxes : null}</Frame>
        <Checkbox
          type="checkbox"
          checked={noExp}
          onChange={() => {
            if (!noExp) setCount(0)
            setNoExp((prev) => !prev)
          }}
        />
        <Label>I have no prior experience.</Label>
        {props.whichPage === 'preview' ? (
          <ButtonsContainer>
            <CancelButton onClick={() => props.setIsEditingExp(false)}>
              Cancel
            </CancelButton>
            <SaveButton type="submit">Save</SaveButton>
          </ButtonsContainer>
        ) : (
          <NextButton type="submit">Next</NextButton>
        )}
      </Form>
    </Container>
  )
}
