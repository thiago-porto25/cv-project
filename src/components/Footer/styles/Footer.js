import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #03002e;
`

export const Link = styled.a`
  color: white;
  text-decoration: none;
  pointer-events: all;

  &:hover {
    color: gray;
    text-decoration: underline;
  }
`

export const Text = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding: 15px 0px 10px 0px;
  pointer-events: none;
`
