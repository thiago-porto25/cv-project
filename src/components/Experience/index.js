/* eslint-disable react-hooks/exhaustive-deps */
/*
  - Data is not properly saving and the effect hook is also not listening to it in the right way.
maybe i may need to create a custom hook that listens for changes in data and current CV.

  - encountered a bug where a Cv duplicated itself on top of another.

  - encountered a bug when creating a no experience Cv and then in the preview page clicking on the
  checkbox to add experience. probably i may have to add state to the checkbox checked attribute.
*/
import React, { useState, useEffect } from 'react'
import clone from 'just-clone'
import Box from '../ExpBox'
import {
  AddButton,
  CancelButton,
  Checkbox,
  Container,
  Form,
  Frame,
  Label,
  NextButton,
  RemoveButton,
  SaveButton,
  Text,
  Title,
} from './styles/Experience'

export default function Experience(props) {
  const [currentCvIndex, setCurrentCvIndex] = useState(
    props.whichPage === 'preview' ? props.data.indexOf(props.currentCv) : 'none'
  )
  const [count, setCount] = useState(
    props.whichPage === 'creating'
      ? 0
      : props.currentCv.experience === 'none' ||
        props.currentCv.experience.length <= 0
      ? 0
      : props.currentCv.experience.length - 1
  )
  const [noExp, setNoExp] = useState(
    props.whichPage === 'creating'
      ? false
      : props.currentCv.experience === 'none'
      ? true
      : false
  )
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
    </>
  )

  useEffect(() => {
    if (props.whichPage === 'creating') props.setProgress(3)

    if (props.whichPage === 'preview') {
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
      setCurrentCvIndex('none')
    }
  }, [])

  useEffect(() => {
    if (props.whichPage === 'preview') {
      const dataClone = clone(props.data)
      dataClone.splice(currentCvIndex, 1, props.currentCv)
      props.setData(dataClone)
    }
  }, [props.currentCv])

  useEffect(() => {
    if (props.whichPage === 'preview' && props.data !== undefined) {
      console.log(props.data)
      localStorage.clear()
      localStorage.setItem('data', JSON.stringify(props.data))
    }
  }, [props.data])

  return (
    <Container>
      <Title>Experience</Title>
      <Form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault()
          if (props.whichPage === 'creating') {
            props.setInExperience(false)
            props.setInSkills(true)
          }
          if (props.whichPage === 'preview') props.setIsEditingExp(false)

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
        <AddButton
          type="button"
          onClick={() => setCount((prev) => (prev < 3 ? prev + 1 : prev))}
        >
          +
        </AddButton>
        <Label>I have no prior experience</Label>
        <Checkbox
          type="checkbox"
          value={noExp}
          defaultChecked={noExp}
          onClick={() => {
            if (!noExp) setCount(0)
            setNoExp((prev) => !prev)
          }}
        />
        {props.whichPage === 'preview' ? (
          <>
            <CancelButton onClick={() => props.setIsEditingExp(false)}>
              Cancel
            </CancelButton>
            <SaveButton type="submit">Save</SaveButton>
          </>
        ) : (
          <NextButton type="submit">Next</NextButton>
        )}
      </Form>
    </Container>
  )
}
