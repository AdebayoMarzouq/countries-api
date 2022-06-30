import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [cat, setCat] = useState([
    'Filter by Region',
    'Europe',
    'Asia',
    'Americas',
    'Africa',
    'Oceania',
    'Antarctic',
  ])
  const [keyWord, setKeyWord] = useState('')
  const [region, setRegion] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ a: false, b: '' })

  useEffect(() => {
    console.log('triggered')
    axios('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (response.status === 200) {
          setCat([
            'Filter by Region',
            'All',
            ...new Set(response.data.map((item) => item.region)),
          ])
          setData(
            response.data.sort((a, b) => {
              return a.name.common.toLowerCase() > b.name.common.toLowerCase()
                ? 1
                : -1
            })
          )
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.log(error)
        setError({ a: true, b: error.message })
      })
  }, [])

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cat,
        keyWord,
        setKeyWord,
        region,
        setRegion,
        isLoading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
