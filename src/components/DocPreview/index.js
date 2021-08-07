import React, { useState, useEffect } from 'react'
import {
  Container,
  EducFrame,
  EducInner,
  ExpFrame,
  ExpInner,
  InfoFrame,
  Line,
  SkillsFrame,
  SkillsItem,
  SkillsList,
  Text,
  Title,
} from './styles/DocPreview'

export default function DocPreview(props) {
  const { currentCv, setCurrentCv } = props

  return (
    <Container>
      <InfoFrame>
        <h2>{currentCv.fullName}</h2>
        <Text>{currentCv.age}</Text>
        <Text>{currentCv.gender}</Text>
        <Text>{currentCv.location}</Text>
        <Text>{currentCv.phone}</Text>
        <Text>{currentCv.email}</Text>
        <Text>{currentCv.gitHub}</Text>
        <Text>{currentCv.linkedIn}</Text>
      </InfoFrame>
      <Line />
      <EducFrame>
        <Title>Education</Title>
        {currentCv.education.map((item, i) => (
          <EducInner key={`${item}-${i}`}>
            <h2>{item.degree}</h2>
            <h3>{item.institution}</h3>
            <span>
              {item.start} - {item.end}
            </span>
          </EducInner>
        ))}
      </EducFrame>
      <Line />
      <ExpFrame>
        <Title>Experience</Title>
        {currentCv.experience === 'none' ? (
          <Text>I have no prior experience.</Text>
        ) : (
          currentCv.experience.map((item, i) => (
            <ExpInner key={`${item}-${i}`}>
              <h2>{item.position}</h2>
              <h3>{item.company}</h3>
              <span>
                {item.end === ''
                  ? `${item.start} - current`
                  : `${item.start} - ${item.end}`}
              </span>
              <p>{item.description}</p>
            </ExpInner>
          ))
        )}
      </ExpFrame>
      <Line />
      <SkillsFrame>
        <Title>Skills</Title>
        <SkillsList>
          {currentCv.skills.map((item, i) => (
            <SkillsItem key={`${item}-${i}`}>{item}</SkillsItem>
          ))}
        </SkillsList>
      </SkillsFrame>
    </Container>
  )
}

//tentar usar indexOf(currentCv) em data para poder salvar mudancas
