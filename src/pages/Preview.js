import React, { useContext } from 'react'
import styled from 'styled-components'
import { Header, Footer, DocPreview } from '../components'
import DataContext from '../context/DataContext'

const PreviewBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010048;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 80%;
  max-width: 700px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
`

const DownloadButton = styled.button`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 14rem;
  height: 3rem;
  color: white;
  font-family: 'Staatliches', sans-serif;
  font-size: 25px;
  font-weight: bold;
  background-color: #03002a;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  cursor: pointer;
  box-sizing: border-box;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: #010057;
    transform: scale(1.05);
  }
`

const NoCv = styled.h1``

export default function Preview(props) {
  const { setData, data, currentCvIndex } = useContext(DataContext)

  return (
    <>
      <Header {...props} />
      <PreviewBg>
        <Container>
          {props.currentCv ? (
            <DocPreview
              currentCvIndex={currentCvIndex}
              currentCv={props.currentCv}
              setCurrentCv={props.setCurrentCv}
              data={data}
              setData={setData}
            />
          ) : (
            <NoCv>You must have a CV to be able to view it</NoCv>
          )}
          <DownloadButton>Download as PDF</DownloadButton>
        </Container>
      </PreviewBg>
      <Footer />
    </>
  )
}
