import styled from 'styled-components'
import Select from 'react-select'

export const ButtonsContainer = styled.div`
  margin: auto;
  margin-bottom: 20px;
`

export const CancelButton = styled.button`
  width: 8rem;
  margin: auto;
  border: none;
  border-radius: 5px;
  background-color: darkred;
  color: white;
  font-family: 'Staatliches', sans-serif;
  font-size: 25px;
  cursor: pointer;
  margin-right: 10px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: #c30101;
  }

  @media (max-width: 700px) {
    width: 7rem;
  }
`

export const Container = styled.div`
  height: fit-content;
`
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
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

export const NextButton = styled.button`
  width: 8rem;
  border: none;
  border-radius: 5px;
  background-color: #010048;
  color: white;
  font-family: 'Staatliches', sans-serif;
  font-size: 25px;
  cursor: pointer;
  margin-left: 10px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: #02006c;
  }
`

export const SaveButton = styled.button`
  width: 8rem;
  margin: auto;
  border: none;
  border-radius: 5px;
  background-color: #010048;
  color: white;
  font-family: 'Staatliches', sans-serif;
  font-size: 25px;
  cursor: pointer;
  margin-left: 10px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: #02006c;
  }

  @media (max-width: 700px) {
    width: 7rem;
  }
`

export const SelectGender = styled(Select)`
  margin-bottom: 20px;
`

export const Text = styled.p`
  color: red;
  margin-top: 0px;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: 35px;
`
