/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import GeneralInfo from '../GeneralInfo'
import Education from '../Education'
import Experience from '../Experience'
import Skills from '../Skills'
import {
  Container,
  EditButton,
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
  const { currentCv, setCurrentCv, data, setData } = props
  const [isEditingInfo, setIsEditingInfo] = useState(false)
  const [isEditingEduc, setIsEditingEduc] = useState(false)
  const [isEditingExp, setIsEditingExp] = useState(false)
  const [isEditingSkills, setIsEditingSkills] = useState(false)

  useEffect(() => {
    return () => {
      setIsEditingInfo(false)
      setIsEditingEduc(false)
      setIsEditingExp(false)
      setIsEditingSkills(false)
      setCurrentCv(undefined)
    }
  }, [])

  console.log(data)

  return (
    <Container>
      <InfoFrame>
        {isEditingInfo ? (
          <GeneralInfo
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            data={data}
            setData={setData}
            setIsEditingInfo={setIsEditingInfo}
            whichPage="preview"
          />
        ) : (
          <>
            <h2>{currentCv.fullName}</h2>
            <Text>{currentCv.age}</Text>
            <Text>{currentCv.gender}</Text>
            <Text>{currentCv.location}</Text>
            <Text>{currentCv.phone}</Text>
            <Text>{currentCv.email}</Text>
            <Text>{currentCv.gitHub}</Text>
            <Text>{currentCv.linkedIn}</Text>
            <EditButton onClick={() => setIsEditingInfo(true)}>
              <i className="fas fa-edit"></i>
            </EditButton>
          </>
        )}
      </InfoFrame>
      <Line />
      <EducFrame>
        <Title>Education</Title>
        {isEditingEduc ? (
          <Education
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            data={data}
            setData={setData}
            setIsEditingEduc={setIsEditingEduc}
            whichPage="preview"
          />
        ) : (
          <>
            {currentCv.education.map((item, i) => (
              <EducInner key={`${item}-${i}`}>
                <h2>{item.degree}</h2>
                <h3>{item.institution}</h3>
                <span>
                  {item.start} - {item.end}
                </span>
              </EducInner>
            ))}
            <EditButton onClick={() => setIsEditingEduc(true)}>
              <i className="fas fa-edit"></i>
            </EditButton>
          </>
        )}
      </EducFrame>
      <Line />
      <ExpFrame>
        <Title>Experience</Title>
        {isEditingExp ? (
          <Experience
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            data={data}
            setData={setData}
            setIsEditingExp={setIsEditingExp}
            whichPage="preview"
          />
        ) : currentCv.experience === 'none' ? (
          <>
            <Text>I have no prior experience.</Text>
            <EditButton onClick={() => setIsEditingExp(true)}>
              <i className="fas fa-edit"></i>
            </EditButton>
          </>
        ) : (
          <>
            {currentCv.experience.map((item, i) => (
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
            ))}
            <EditButton onClick={() => setIsEditingExp(true)}>
              <i className="fas fa-edit"></i>
            </EditButton>
          </>
        )}
      </ExpFrame>
      <Line />
      <SkillsFrame>
        <Title>Skills</Title>
        {isEditingSkills ? (
          <Skills
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            data={data}
            setData={setData}
            setIsEditingSkills={setIsEditingSkills}
            whichPage="preview"
          />
        ) : (
          <>
            <SkillsList>
              {currentCv.skills.map((item, i) => (
                <SkillsItem key={`${item}-${i}`}>{item}</SkillsItem>
              ))}
            </SkillsList>
            <EditButton onClick={() => setIsEditingSkills(true)}>
              <i className="fas fa-edit"></i>
            </EditButton>
          </>
        )}
      </SkillsFrame>
    </Container>
  )
}
