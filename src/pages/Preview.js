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

    toPng(myCv, { quality: 0.2 }).then(function (dataUrl) {
      let link = document.createElement('a')
      link.download = 'my-image-name.jpeg'
      const pdf = new jsPDF()
      const imgProps = pdf.getImageProperties(dataUrl)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
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
            <>
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
            </>
          ) : (
            <NoCv>You must have a CV to be able to view it.</NoCv>
          )}
        </Container>
      </PreviewBg>
      <Footer />
    </>
  )
}
