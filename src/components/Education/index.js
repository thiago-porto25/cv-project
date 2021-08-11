/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Box from '../EducBox'
import {
  AddButton,
  CancelButton,
  Container,
  Form,
  Frame,
  NextButton,
  RemoveButton,
  SaveButton,
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
    if (props.whichPage === 'creating') props.setProgress(2)

    if (props.whichPage === 'preview') {
      setCount(
        props.currentCv.education.length <= 0
          ? 0
          : props.currentCv.education.length - 1
      )

      const educ = props.currentCv.education

      switch (educ.length) {
        case 1:
          setInfo1(educ[0])
          break
        case 2:
          setInfo1(educ[0])
          setInfo2(educ[1])
          break
        case 3:
          setInfo1(educ[0])
          setInfo2(educ[1])
          setInfo3(educ[2])
          break
        case 4:
          setInfo1(educ[0])
          setInfo2(educ[1])
          setInfo3(educ[2])
          setInfo4(educ[3])
          break
        default:
          break
      }
    }
    return () => {
      setCount(0)
    }
  }, [])

  return (
    <Container>
      <Title>Education:</Title>
      <Form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault()

          const educInfo = [info1, info2, info3, info4].filter(
            (item) => item.institution !== '' && item.degree !== ''
          )
          props.setCurrentCv({ ...props.currentCv, education: educInfo })

          if (props.whichPage === 'creating') {
            props.setInEducation(false)
            props.setInExperience(true)
          }
          if (props.whichPage === 'preview') props.setIsEditingEduc(false)
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
        {props.whichPage === 'preview' ? (
          <>
            <CancelButton onClick={() => props.setIsEditingEduc(false)}>
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
