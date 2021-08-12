import React, { useContext } from 'react'
import { Header, Footer, CvItem } from '../components'
import styled from 'styled-components'
import DataContext from '../context/DataContext'

const CvsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`

const EmptyMessage = styled.h1``

const HomeBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010048;
  height: 100%;
`

const HomeContainer = styled.div`
  width: 80%;
  height: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const NewCVButton = styled.button`
  width: 14rem;
  height: 3rem;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: #03002a;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  cursor: pointer;
  box-sizing: border-box;
  transition: 100ms ease-in-out;

  &:hover {
    background-color: #010057;
    transform: scale(1.05);
  }
`

export default function Home(props) {
  const { data, setCurrentCv, setCurrentCvIndex } = useContext(DataContext)

  return (
    <>
      <Header {...props} />
      <HomeBg>
        <HomeContainer>
          <CvsContainer>
            {!data ? (
              <EmptyMessage>
                It seems you have no CVs. Create you first one!
              </EmptyMessage>
            ) : (
              data.map((item, i) => (
                <CvItem
                  key={`${item} - ${i}`}
                  data-id={i}
                  itemData={item}
                  onClick={() => {
                    props.setInHome(false)
                    props.setInPreview(true)
                    setCurrentCv(item)
                    setCurrentCvIndex(i)
                  }}
                />
              ))
            )}
          </CvsContainer>
          <NewCVButton
            onClick={() => {
              props.setInHome(false)
              props.setInCreating(true)
            }}
          >
            CREATE A NEW CV
          </NewCVButton>
        </HomeContainer>
      </HomeBg>
      <Footer />
    </>
  )
}
