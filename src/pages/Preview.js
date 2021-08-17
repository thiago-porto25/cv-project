import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { jsPDF } from 'jspdf'
import { toPng } from 'html-to-image'
import { Header, Footer, DocPreview } from '../components'
import DataContext from '../context/DataContext'

const PreviewBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010048;
  min-height: 95vh;
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

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

const NoCv = styled.h1`
  font-size: 30px;
  padding: 20px 20px;
`

const RedText = styled.p`
  color: red;
  margin-bottom: 40px;
`

export default function Preview(props) {
  const { setData, data, currentCvIndex } = useContext(DataContext)
  const [isEditingInfo, setIsEditingInfo] = useState(false)
  const [isEditingEduc, setIsEditingEduc] = useState(false)
  const [isEditingExp, setIsEditingExp] = useState(false)
  const [isEditingSkills, setIsEditingSkills] = useState(false)

  const createPdfFile = () => {
    props.setIsLoading(true)
    const myCv = document.querySelector('.myCv')
    const myEditButtons = document.querySelectorAll('.fa-edit')

    myCv.style.paddingLeft = '20px'
    myCv.style.paddingRight = '20px'

    myEditButtons.forEach((item) => (item.style.color = 'transparent'))

    toPng(myCv, { quality: 0.95 }).then((dataUrl) => {
      let link = document.createElement('a')
      link.download = 'my-image-name.png'
      const pdf = new jsPDF()
      let position = 0
      const imgProps = pdf.getImageProperties(dataUrl)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      let heightLeft = pdfHeight

      pdf.addImage(dataUrl, 'PNG', 0, position, pdfWidth, pdfHeight)
      heightLeft -= pageHeight
      console.log(heightLeft)

      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight
        pdf.addPage()
        pdf.addImage(dataUrl, 'PNG', 0, position, pdfWidth, pdfHeight)
        heightLeft -= pageHeight
      }

      pdf.save('CV.pdf')
      myCv.style.paddingLeft = ''
      myCv.style.paddingRight = ''
      myEditButtons.forEach((item) => (item.style.color = '#03002a'))
      props.setIsLoading(false)
    })
  }

  return (
    <>
      <Header {...props} />
      <PreviewBg>
        <Container>
          {props.currentCv ? (
            <DocPreview
              className="myCv"
              currentCvIndex={currentCvIndex}
              currentCv={props.currentCv}
              setCurrentCv={props.setCurrentCv}
              data={data}
              setData={setData}
              isEditingEduc={isEditingEduc}
              isEditingExp={isEditingExp}
              isEditingInfo={isEditingInfo}
              isEditingSkills={isEditingSkills}
              setIsEditingEduc={setIsEditingEduc}
              setIsEditingExp={setIsEditingExp}
              setIsEditingInfo={setIsEditingInfo}
              setIsEditingSkills={setIsEditingSkills}
            />
          ) : (
            <NoCv>You must have a CV to be able to view it.</NoCv>
          )}
          <DownloadButton
            disabled={
              !isEditingEduc &&
              !isEditingExp &&
              !isEditingInfo &&
              !isEditingSkills
                ? false
                : true
            }
            onClick={createPdfFile}
          >
            Download as PDF
          </DownloadButton>
          <RedText>Works better in a Desktop!</RedText>
        </Container>
      </PreviewBg>
      <Footer />
    </>
  )
}
