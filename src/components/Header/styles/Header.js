import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #03002a;
  height: 4rem;
  position: relative;

  & span {
    font-family: 'Staatliches', sans-serif;
    font-size: 40px;
    margin-left: 30px;
    pointer-events: none;
  }
`

export const Icon = styled.i`
  transition: 300ms cubic-bezier(0.63, 0.47, 0.71, 1.26);
  font-size: 20px;
  line-height: 43px;
`

export const HomeButton = styled.button`
  font-size: 28px;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20%;
  right: 3%;
  transition: 200ms ease-in-out;

  &:hover {
    color: #eeeeee;
    transform: scale(1.2);
  }
`

export const NewCVButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  color: #03002a;
  font-family: 'Staatliches', sans-serif;
  font-size: 25px;
  font-weight: bold;
  line-height: 0;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  cursor: pointer;
  box-sizing: border-box;
  transition: 200ms ease-in-out;
  position: absolute;
  top: 20%;
  right: 3%;

  &:hover {
    background-color: #eeeeee;
    transform: scale(1.05);
  }

  &:hover > ${Icon} {
    transform: rotate(90deg);
  }
`
