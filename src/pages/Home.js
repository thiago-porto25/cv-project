import React, { useContext } from 'react'
import { Header, Footer, CvItem } from '../components'
import styled from 'styled-components'
import DataContext from '../context/DataContext'

const EmptyMessage = styled.div``

const HomeBg = styled.div`
  background-color: #fff000;
`
const HomeContainer = styled.div``

const NewCVButton = styled.button``

export default function Home(props) {
  const { data, setCurrentCv } = useContext(DataContext)

  return (
    <HomeBg>
      <Header {...props} />
      <HomeContainer>
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
              }}
            />
          ))
        )}
        <NewCVButton
          onClick={() => {
            props.setInHome(false)
            props.setInCreating(true)
          }}
        >
          NEW CV
        </NewCVButton>
      </HomeContainer>
      <Footer />
    </HomeBg>
  )
}
