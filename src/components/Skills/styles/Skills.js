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

  @media (max-width: 700px) {
    margin-left: 0;
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

export const Frame = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 0 !important;
    margin-bottom: 40px;
  }
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

export const Form = styled.form`
  height: 100%;
`

export const Input = styled.input`
  border: 1.5px solid lightgray;
  border-radius: 3px;
  height: 2rem;
  padding-left: 10px;
  color: #333333;
  font-size: 16px;
  width: auto;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    margin-left: 0;
  }
`

export const ItemText = styled.p`
  width: 80%;
  display: block;
  word-wrap: break-word;
`

export const List = styled.ul`
  margin: auto;
  width: 230px;
  padding: 0;

  li {
    list-style-type: square;
    position: relative;
    margin-bottom: 10px;
    width: 100%;

    i {
      position: absolute;
      top: 0;
      right: 0;
      color: darkred;
      transition: 100ms ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
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

  @media (max-width: 700px) {
    width: 7rem;
  }
`

export const Title = styled.h1``
