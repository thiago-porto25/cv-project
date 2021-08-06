import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Header, Footer, DocPreview } from '../components'
import DataContext from '../context/DataContext'

const PreviewBg = styled.div``

const Container = styled.div``

const DownloadButton = styled.button``

const NoCv = styled.h1``

export default function Preview(props) {
  const { data, setData } = useContext(DataContext)

  useEffect(() => {
    console.log(data)
    console.log(props.currentCv)
  })
  return (
    <PreviewBg>
      <Header {...props} />
      <Container>
        {props.currentCv ? (
          <DocPreview
            currentCv={props.currentCv}
            setCurrentCv={props.setCurrentCv}
            setData={setData}
          />
        ) : (
          <NoCv>You must have a CV to be able to view it</NoCv>
        )}
        <DownloadButton>Download as PDF</DownloadButton>
      </Container>
      <Footer />
    </PreviewBg>
  )
}
