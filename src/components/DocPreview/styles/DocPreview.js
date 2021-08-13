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
  background-color: #eeeeee;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0px 20px 20px 20px;
  margin-bottom: 20px;

  h3 {
    font-weight: normal;
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`
export const ExpFrame = styled.section`
  position: relative;
`
export const ExpInner = styled.div`
  background-color: #eeeeee;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0px 20px 0px 20px;
  margin-bottom: 20px;

  h3 {
    font-weight: normal;
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`
export const InfoFrame = styled.section`
  padding-left: 20px;
  position: relative;

  h2 {
    margin-left: -20px;
    font-size: 40px;
    font-weight: bolder;
  }
`
export const Line = styled.hr``

export const SkillsFrame = styled.section`
  position: relative;
`
export const SkillsItem = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`

export const SkillsList = styled.ul`
  list-style: square;
`

export const Text = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 5px;

  &::first-of-type {
    margin-top: 0px;
  }
  &:last-of-type {
    margin-bottom: 30px;
  }
`
export const Title = styled.h1`
  font-size: 35px;
`
