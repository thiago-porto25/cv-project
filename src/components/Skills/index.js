/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import clone from 'just-clone'
import {
  AddSkill,
  CancelButton,
  Container,
  FinishButton,
  Form,
  Frame,
  Input,
  List,
  SaveButton,
  Title,
} from './styles/Skills'

export default function Skills(props) {
  const [currentCvIndex] = useState(
    props.whichPage === 'preview'
      ? props.data.indexOf(props.currentCv)
      : undefined
  )
  const [newSkill, setNewSkill] = useState('')
  const [skillsList, setSkillsList] = useState([])

  const handleDelete = (i) => {
    const newList = skillsList.map((item) => item)
    newList.splice(i, 1)
    setSkillsList(newList)
  }

  useEffect(() => {
    if (
      props.whichPage === 'creating' &&
      props.currentCv.skills !== undefined
    ) {
      if (props.data === undefined) {
        props.setData([props.currentCv])
      } else props.setData([...props.data, props.currentCv])
    }
    if (props.whichPage === 'preview') {
      const dataClone = clone(props.data)
      const newData = dataClone.map((item, i) => {
        if (currentCvIndex === i) {
          return props.currentCv
        } else return item
      })
      props.setData(newData)
    }
  }, [props.currentCv])

  useEffect(() => {
    if (props.data !== undefined) {
      localStorage.setItem('data', JSON.stringify(props.data))
    }
  }, [props.data])

  useEffect(() => {
    if (props.whichPage === 'creating') props.setProgress(4)
    if (props.whichPage === 'preview') setSkillsList(props.currentCv.skills)
    return () => {
      setNewSkill('')
      setSkillsList([])
    }
  }, [])

  return (
    <Container>
      <Title>Skills</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          props.setCurrentCv({ ...props.currentCv, skills: skillsList })

          if (props.whichPage === 'creating') {
            setTimeout(() => {
              props.setInSkills(false)
              props.setInCreating(false)
              props.setInPreview(true)
            }, 500)
          }
          if (props.whichPage === 'preview') props.setIsEditingSkills(false)
        }}
      >
        <Frame>
          <Input
            type="text"
            value={newSkill}
            onChange={({ target }) => setNewSkill(target.value)}
          />
          <AddSkill
            type="button"
            onClick={() => {
              setSkillsList((prev) => [...prev, newSkill])
              setNewSkill('')
            }}
          >
            Add skill
          </AddSkill>
        </Frame>
        <List>
          {skillsList.map((item, i) => (
            <li key={`${item} - ${i}`}>
              {item}
              <i
                className="fas fa-trash-alt"
                onClick={() => handleDelete(i)}
              ></i>
            </li>
          ))}
        </List>
        {props.whichPage === 'preview' ? (
          <>
            <CancelButton onClick={() => props.setIsEditingSkills(false)}>
              Cancel
            </CancelButton>
            <SaveButton type="submit">Save</SaveButton>
          </>
        ) : (
          <FinishButton type="submit">Finish CV</FinishButton>
        )}
      </Form>
    </Container>
  )
}
