/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import DataContext from '../../context/DataContext'
import { LoadingModal } from '..'
import {
  AddSkill,
  ButtonsContainer,
  CancelButton,
  Container,
  FinishButton,
  Form,
  Frame,
  Input,
  ItemText,
  List,
  SaveButton,
  Title,
} from './styles/Skills'

export default function Skills(props) {
  const { setCurrentCvIndex } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)
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
      if (!props.data) {
        props.setData([props.currentCv])
        setCurrentCvIndex(0)
      } else {
        props.setData([...props.data, props.currentCv])
        setCurrentCvIndex(props.data.length)
      }
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
    <>
      {isLoading && <LoadingModal />}
      <Container>
        {props.whichPage === 'creating' && <Title>Skills</Title>}
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            props.setCurrentCv({ ...props.currentCv, skills: skillsList })

            if (props.whichPage === 'creating') {
              setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
                props.setInSkills(false)
                props.setInCreating(false)
                props.setInPreview(true)
              }, 1000)
            }
            if (props.whichPage === 'preview') props.setIsEditingSkills(false)
          }}
        >
          <Frame>
            <Input
              type="text"
              maxLength="50"
              value={newSkill}
              onChange={({ target }) => setNewSkill(target.value)}
              placeholder="Add a skill here..."
            />
            <AddSkill
              type="button"
              onClick={() => {
                setSkillsList((prev) => {
                  if (skillsList.length >= 5) return prev
                  else return [...prev, newSkill]
                })
                setNewSkill('')
              }}
            >
              Add skill
            </AddSkill>
          </Frame>
          <List>
            {skillsList.map((item, i) => (
              <li key={`${item} - ${i}`}>
                <ItemText>{item}</ItemText>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => handleDelete(i)}
                ></i>
              </li>
            ))}
          </List>
          {props.whichPage === 'preview' ? (
            <ButtonsContainer>
              <CancelButton onClick={() => props.setIsEditingSkills(false)}>
                Cancel
              </CancelButton>
              <SaveButton type="submit">Save</SaveButton>
            </ButtonsContainer>
          ) : (
            <ButtonsContainer>
              <FinishButton type="submit">Finish CV</FinishButton>
            </ButtonsContainer>
          )}
        </Form>
      </Container>
    </>
  )
}
