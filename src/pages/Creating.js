import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import DataContext from '../context/DataContext'
import { LoadingModal } from '../components'
import {
  Education,
  Experience,
  Footer,
  GeneralInfo,
  Header,
  ProgressBar,
  Skills,
} from '../components'

const CreatingBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010048;
  min-height: 95vh;
`

const CreatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  width: 80%;
  max-width: 700px;
  min-height: 400px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
`

export default function Creating(props) {
  const { setCurrentCv, setData, currentCv, data } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)
  const [inGeneralInfo, setInGeneralInfo] = useState(true)
  const [inEducation, setInEducation] = useState(false)
  const [inExperience, setInExperience] = useState(false)
  const [inSkills, setInSkills] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    return () => {
      setInGeneralInfo(true)
      setInEducation(false)
      setInExperience(false)
      setInSkills(false)
      setProgress(0)
    }
  }, [])

  return (
    <>
      <Header {...props} />
      <CreatingBg>
        {isLoading && <LoadingModal />}
        <CreatingContainer>
          <ProgressBar progress={progress} />
          {inGeneralInfo && (
            <GeneralInfo
              setInGeneralInfo={setInGeneralInfo}
              setInEducation={setInEducation}
              setCurrentCv={setCurrentCv}
              setProgress={setProgress}
              whichPage="creating"
            />
          )}
          {inEducation && (
            <Education
              setInEducation={setInEducation}
              setInExperience={setInExperience}
              setCurrentCv={setCurrentCv}
              currentCv={currentCv}
              setProgress={setProgress}
              whichPage="creating"
            />
          )}
          {inExperience && (
            <Experience
              setInExperience={setInExperience}
              setInSkills={setInSkills}
              setCurrentCv={setCurrentCv}
              currentCv={currentCv}
              setProgress={setProgress}
              whichPage="creating"
            />
          )}
          {inSkills && (
            <Skills
              setInSkills={setInSkills}
              setCurrentCv={setCurrentCv}
              currentCv={currentCv}
              setData={setData}
              data={data}
              setInCreating={props.setInCreating}
              setInPreview={props.setInPreview}
              setProgress={setProgress}
              whichPage="creating"
              setIsLoading={setIsLoading}
            />
          )}
        </CreatingContainer>
      </CreatingBg>
      <Footer />
    </>
  )
}
