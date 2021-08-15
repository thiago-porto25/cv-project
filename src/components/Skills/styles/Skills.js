import styled from 'styled-components'

export const AddSkill = styled.button`
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
  width: 7rem;

  &:hover {
    background-color: #02006c;
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
`

export const Container = styled.div``

export const Frame = styled.div`
  display: flex;
  justify-content: center;
`

export const FinishButton = styled.button`
  width: 9rem;
  border: none;
  border-radius: 5px;
  background-color: #010048;
  color: white;
  font-family: 'Staatliches', sans-serif;
  font-size: 30px;
  cursor: pointer;
  margin-left: 10px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: #02006c;
  }
`

export const Form = styled.form``

export const Input = styled.input`
  border: 1.5px solid lightgray;
  border-radius: 3px;
  height: 2rem;
  padding-left: 10px;
  color: #333333;
  font-size: 16px;
  width: auto;
  margin-bottom: 40px;
`

export const List = styled.ul`
  margin: auto;
  width: 200px;
  padding: 0;

  li {
    list-style-type: square;
    position: relative;
    margin-bottom: 10px;
  }

  i {
    position: absolute;
    right: 0;
    margin-left: 20px;
    color: darkred;
    transition: 100ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
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
`

export const Title = styled.h1``
