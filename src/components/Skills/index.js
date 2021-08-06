/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import {
  AddSkill,
  Container,
  FinishButton,
  Form,
  Frame,
  Input,
  List,
  Title,
} from './styles/Skills'

export default function Skills(props) {
  const [newSkill, setNewSkill] = useState('')
  const [skillsList, setSkillsList] = useState([])

  const handleDelete = (i) => {
    const newList = skillsList.map((item) => item)
    newList.splice(i, 1)
    setSkillsList(newList)
  }

  useEffect(() => {
    props.setProgress(4)
    return () => {
      setNewSkill('')
      setSkillsList([])
    }
  }, [])

  useEffect(() => {
    if (props.currentCv.skills !== undefined) {
      console.log('test')
      if (props.data === undefined) {
        props.setData([props.currentCv])
      } else props.setData([...props.data, props.currentCv])
    }
  }, [props.currentCv])

  useEffect(() => {
    if (props.data !== undefined) {
      localStorage.setItem('data', JSON.stringify(props.data))
    }
  }, [props.data])

  return (
    <Container>
      <Title>Skills</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          props.setCurrentCv({ ...props.currentCv, skills: skillsList })
          setTimeout(() => {
            props.setInSkills(false)
            props.setInCreating(false)
            props.setInPreview(true)
          }, 500)
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
        <FinishButton type="submit">Finish CV</FinishButton>
      </Form>
    </Container>
  )
}
