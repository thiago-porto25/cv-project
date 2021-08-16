import React, { useContext, useEffect } from 'react'
import { Header, Footer, CvItem, EmptyCvItem } from '../components'
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

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`

const EmptyMessage = styled.h1`
  color: black;
  margin: 0 auto;
  margin-top: 100px;
`

const HomeBg = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010048;
  height: 87.3%;
  @media (max-width: 450px) {
    height: fit-content;
  }

  @media (max-width: 800px) {
    min-height: 95vh;
  }
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
  height: fit-content;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 450px) {
    height: fit-content;
    margin-top: 40px;
    margin-bottom: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export default function Home(props) {
  const { data, setData, setCurrentCv, setCurrentCvIndex } =
    useContext(DataContext)

  useEffect(() => {
    if (data && data.length > 0) {
      localStorage.setItem('data', JSON.stringify(data))
    } else if (data && data.length === 0) localStorage.clear()
  }, [data])

  return (
    <>
      <Header {...props} data={data} />
      <HomeBg>
        <HomeContainer>
          {!data && (
            <EmptyMessage>
              It seems you have no CVs. Create you first one!
            </EmptyMessage>
          )}
          <CvsContainer>
            {data &&
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
              ))}
            {data && data.length === 1 ? (
              <>
                <EmptyCvItem />
                <EmptyCvItem />
                <EmptyCvItem />
              </>
            ) : data && data.length === 2 ? (
              <>
                <EmptyCvItem />
                <EmptyCvItem />
              </>
            ) : data && data.length === 3 ? (
              <>
                <EmptyCvItem />
              </>
            ) : null}
          </CvsContainer>
        </HomeContainer>
      </HomeBg>
      <Footer />
    </>
  )
}
