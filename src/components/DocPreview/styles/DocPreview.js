import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
`
export const EditButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  color: #03002a;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: #010057;
    transform: scale(1.2);
  }
`
export const EducFrame = styled.section`
  position: relative;
`
export const EducInner = styled.div`
  span {
    font-weight: bold;
  }
`
export const ExpFrame = styled.section`
  position: relative;
`
export const ExpInner = styled.div``
export const InfoFrame = styled.section`
  position: relative;
`
export const Line = styled.hr``
export const SkillsFrame = styled.section`
  position: relative;
`
export const SkillsItem = styled.li``
export const SkillsList = styled.ul``
export const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  &:last-of-type {
    margin-bottom: 15px;
  }
`
export const Title = styled.h1``
