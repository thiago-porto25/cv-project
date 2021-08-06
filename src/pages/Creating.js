import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import DataContext from '../context/DataContext'
import {
  Education,
  Experience,
  Footer,
  GeneralInfo,
  Header,
  ProgressBar,
  Skills,
} from '../components'

const CreatingBg = styled.div``

const CreatingContainer = styled.div``

export default function Creating(props) {
  const { setCurrentCv, setData, currentCv, data } = useContext(DataContext)
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
    <CreatingBg>
      <Header {...props} />
      <CreatingContainer>
        <ProgressBar progress={progress} />
        {inGeneralInfo && (
          <GeneralInfo
            setInGeneralInfo={setInGeneralInfo}
            setInEducation={setInEducation}
            setCurrentCv={setCurrentCv}
            setProgress={setProgress}
          />
        )}
        {inEducation && (
          <Education
            setInEducation={setInEducation}
            setInExperience={setInExperience}
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            setProgress={setProgress}
          />
        )}
        {inExperience && (
          <Experience
            setInExperience={setInExperience}
            setInSkills={setInSkills}
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            setProgress={setProgress}
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
          />
        )}
      </CreatingContainer>
      <Footer />
    </CreatingBg>
  )
}
