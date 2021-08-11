import React, { useState, useEffect } from 'react'
import DataContext from './context/DataContext'

import Home from './pages/Home'
import Creating from './pages/Creating'
import Preview from './pages/Preview'

function App() {
  const [data, setData] = useState(undefined)
  const [currentCv, setCurrentCv] = useState(undefined)
  const [currentCvIndex, setCurrentCvIndex] = useState(undefined)
  const [inHome, setInHome] = useState(true)
  const [inCreating, setInCreating] = useState(false)
  const [inPreview, setInPreview] = useState(false)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data'))
    if (localData) {
      setData(localData)
    }
  }, [])

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          setData,
          currentCv,
          setCurrentCv,
          currentCvIndex,
          setCurrentCvIndex,
        }}
      >
        {inHome && (
          <Home
            setInHome={setInHome}
            setInCreating={setInCreating}
            setInPreview={setInPreview}
            inHome={inHome}
            inCreating={inCreating}
            inPreview={inPreview}
          />
        )}
        {inCreating && (
          <Creating
            setInHome={setInHome}
            setInCreating={setInCreating}
            setInPreview={setInPreview}
            inHome={inHome}
            inCreating={inCreating}
            inPreview={inPreview}
          />
        )}
        {inPreview && (
          <Preview
            setInHome={setInHome}
            setInCreating={setInCreating}
            setInPreview={setInPreview}
            currentCv={currentCv}
            setCurrentCv={setCurrentCv}
            inHome={inHome}
            inCreating={inCreating}
            inPreview={inPreview}
          />
        )}
      </DataContext.Provider>
    </>
  )
}

export default App
