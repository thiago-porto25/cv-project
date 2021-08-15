import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eeeeee;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border: 1.5px solid lightgray;
  border-radius: 3px;
  height: 2rem;
  padding-left: 10px;
  color: #333333;
  font-size: 16px;
  width: auto;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 17px;
`

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 1.5px solid lightgray;
  border-radius: 3px;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  color: #333333;
  font-size: 16px;
  width: auto;
  margin-bottom: 20px;
`
