import React, { useContext } from 'react'
import { Header, Footer, CvItem } from '../components'
import styled from 'styled-components'
import DataContext from '../context/DataContext'

const CvsContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin-left: 10px;
  margin-right: 10px;
`

const EmptyMessage = styled.h1``

const HomeBg = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010048;
  height: 87.3%;
  min-height: 500px;
`

const HomeContainer = styled.div`
  width: 80%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default function Home(props) {
  const { data, setData, setCurrentCv, setCurrentCvIndex } =
    useContext(DataContext)

  if (data) console.log(data.length)

  return (
    <>
      <Header {...props} data={data} />
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
                  itemId={i}
                  itemData={item}
                  setData={setData}
                  data={data}
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
        </HomeContainer>
      </HomeBg>
      <Footer />
    </>
  )
}
