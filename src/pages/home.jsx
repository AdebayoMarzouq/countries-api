import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Searchbar from '../components/searchbar.component'
import Filter from '../components/filter.component'
import Card from '../components/card.component'
import LoadingCard from '../components/loadercard.component'

const Home = () => {
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
    axios('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (response.status === 200) {
          setCat([
            'Filter by Region',
            ...new Set(response.data.map((item) => item.region)),
          ])
          setData(
            response.data.sort((a, b) => {
              // console.log(a, b)
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

  if (!error.a) {
    return (
      <>
        <section className='lock py-6 space-y-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0'>
            <Searchbar keyword={keyWord} setKeyWord={setKeyWord} />

            <div className='w-64 text-light-text dark:text-dark-text self-start'>
              <Filter categories={cat} setRegion={setRegion} />
            </div>
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6 gap-12'>
            {isLoading ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : (
              data
                .filter((item) => {
                  if (
                    item.region
                      .toLowerCase()
                      .includes(region.toLowerCase().toLowerCase())
                  )
                    return true
                  return false
                })
                .filter((item) => {
                  if (
                    item.name.common
                      .toLowerCase()
                      .includes(keyWord.toLowerCase().toLowerCase()) ||
                    item.name.official
                      .toLowerCase()
                      .includes(keyWord.toLowerCase().toLowerCase())
                  ) {
                    return true
                  }

                  return false
                })
                .map((item, index) => {
                  return (
                    <Card
                      key={item.cca3}
                      data={data}
                      setData={setData}
                      item={item}
                      state={data}
                    />
                  )
                })
            )}
          </div>
        </section>
      </>
    )
  } else {
    return (
      <div className='max-h-screen w-screen overflow-y-hidden flex flex-col justify-center items-center transform translate-y-full'>
        <h1 className='text-lg'>An Error occured, try reloading the page</h1>
        <p className='text-sm'>{error.b}</p>
      </div>
    )
  }
}

export default Home
