import styled from 'styled-components'

export const Button = styled.button`
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
    transform: scale(1.2);
  }
`

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
    font-size: 30px;
    margin-left: 10px;
    pointer-events: none;
  }
`
