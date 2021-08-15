/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {
  ButtonsContainer,
  CancelButton,
  Container,
  Form,
  Input,
  Label,
  NextButton,
  SaveButton,
  SelectGender,
  Text,
  Title,
} from './styles/GeneralInfo'

export default function GeneralInfo(props) {
  const [Cv, setCv] = useState({
    fullName: '',
    age: '',
    gender: '',
    location: '',
    email: '',
    phone: '',
    gitHub: '',
    linkedIn: '',
  })

  const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ]

  useEffect(() => {
    if (props.whichPage === 'creating') props.setProgress(1)

    if (props.whichPage === 'preview') {
      setCv({
        fullName: props.currentCv.fullName,
        age: props.currentCv.age,
        gender: props.currentCv.gender,
        location: props.currentCv.location,
        email: props.currentCv.email,
        phone: props.currentCv.phone,
        gitHub: props.currentCv.gitHub,
        linkedIn: props.currentCv.linkedIn,
      })
    }

    return () => {
      setCv({
        fullName: '',
        age: '',
        gender: '',
        location: '',
        email: '',
        phone: '',
        gitHub: '',
        linkedIn: '',
      })
    }
  }, [])

  return (
    <Container
      style={{
        width: props.whichPage === 'creating' ? '90%' : '100%',
      }}
    >
      <Title
        style={{ marginLeft: props.whichPage === 'creating' ? '0px' : '-20px' }}
      >
        General Information
      </Title>
      <Form
        style={{
          marginLeft: props.whichPage === 'creating' ? '0px' : '-20px',
        }}
        method="POST"
        onSubmit={(e) => {
          e.preventDefault()

          if (props.whichPage === 'creating') {
            props.setInGeneralInfo(false)
            props.setInEducation(true)
            props.setCurrentCv(Cv)
          }

          if (props.whichPage === 'preview') {
            props.setCurrentCv({
              ...props.currentCv,
              fullName: Cv.fullName,
              age: Cv.age,
              gender: Cv.gender,
              location: Cv.location,
              email: Cv.email,
              phone: Cv.phone,
              gitHub: Cv.gitHub,
              linkedIn: Cv.linkedIn,
            })
            props.setIsEditingInfo(false)
          }
        }}
      >
        <Label>*Full Name</Label>
        <br />
        <Input
          type="text"
          placeholder="Your Full Name"
          value={Cv.fullName}
          onChange={({ target }) => setCv({ ...Cv, fullName: target.value })}
          minLength="5"
          maxLength="25"
          required
        />
        <br />
        <Label>*Age</Label>
        <br />
        <Input
          type="number"
          placeholder="Your Age"
          min="0"
          max="100"
          value={Cv.age}
          onChange={({ target }) => setCv({ ...Cv, age: target.value })}
          required
        />
        <br />
        <Label>*Gender</Label>
        <br />
        <SelectGender
          options={options}
          onChange={(e) => setCv({ ...Cv, gender: e.value })}
          required
        />
        <br />
        <Label>*Location</Label>
        <br />
        <Input
          type="text"
          placeholder="City, State"
          minLength="5"
          maxLength="50"
          value={Cv.location}
          onChange={({ target }) => setCv({ ...Cv, location: target.value })}
          required
        />

        <Label>*Email</Label>
        <br />
        <Input
          type="email"
          placeholder="Your Email"
          value={Cv.email}
          minLength="7"
          maxLength="40"
          onChange={({ target }) => setCv({ ...Cv, email: target.value })}
          required
        />
        <br />
        <Label>*Phone Number</Label>
        <br />
        <Input
          type="text"
          placeholder="Your Phone Number"
          minLength="4"
          maxLength="17"
          value={Cv.phone}
          onChange={({ target }) => setCv({ ...Cv, phone: target.value })}
          required
        />
        <br />
        <Label>GitHub</Label>
        <br />
        <Input
          type="text"
          placeholder="Your GitHub Username"
          minLength="2"
          maxLength="30"
          value={Cv.gitHub}
          onChange={({ target }) => setCv({ ...Cv, gitHub: target.value })}
        />
        <br />
        <Label>LinkedIn</Label>
        <br />
        <Input
          type="text"
          placeholder="Your LinkedIn Username"
          minLength="2"
          maxLength="30"
          value={Cv.linkedIn}
          onChange={({ target }) => setCv({ ...Cv, linkedIn: target.value })}
        />
        <Text>Fields with * are required!</Text>
        {props.whichPage === 'preview' ? (
          <ButtonsContainer>
            <CancelButton onClick={() => props.setIsEditingInfo(false)}>
              Cancel
            </CancelButton>
            <SaveButton type="submit">Save</SaveButton>
          </ButtonsContainer>
        ) : (
          <ButtonsContainer>
            <NextButton type="submit">Next</NextButton>
          </ButtonsContainer>
        )}
      </Form>
    </Container>
  )
}
