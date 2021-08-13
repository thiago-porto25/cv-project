import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

export const Container = styled.div`
  color: black;
  height: 11rem;
  border: 1.5px solid gray;
  border-radius: 10px;
  box-shadow: 0px 0px 5px darkgray;
  position: relative;

  &:hover {
    background-color: #eeeeee;
    box-shadow: 0px 0px 10px gray;
  }
`
export const Delete = styled.div`
  color: darkred;
  font-size: 20px;
  position: absolute;
  cursor: pointer;
  margin-right: 10px;
  top: 15px;
  right: 5px;
  transition: 200ms;
  box-sizing: border-box;

  &:hover {
    color: #c30101;
    transform: scale(1.1);
  }
`

export const PreviewButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: #010048;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  transition: 100ms ease-in-out;

  &:hover {
    background-color: #010057;
    transform: scale(1.05);
  }
`

export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
