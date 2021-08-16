import styled from 'styled-components'

export const AddButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #010048;
  color: white;
  font-weight: bold;
  font-family: 'Staatliches', sans-serif;
  font-size: 20px;
  height: 2.1rem;
  width: 6rem;

  &:hover {
    background-color: #02006c;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
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

export const Container = styled.div``

export const Form = styled.form``

export const Frame = styled.div``

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

export const RemoveButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: darkred;
  color: white;
  font-weight: bold;
  font-family: 'Staatliches', sans-serif;
  font-size: 20px;
  height: 2.1rem;
  width: 6rem;

  &:hover {
    background-color: #c30101;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
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

export const Text = styled.p`
  color: red;
  margin-top: 0px;
  margin-bottom: 20px;
`

export const Title = styled.h1``
