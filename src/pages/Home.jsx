import React, { Suspense } from 'react'

import Searchbar from '../components/searchbar.component'
import Filter from '../components/filter.component'
// import Card from '../components/card.component'
import LoadingCard from '../components/loadercard.component'
import { useGlobalContext } from '../context'
import { ReactComponent } from '../Eclipse-1s-200px.svg'

const LazyComponent = React.lazy(() => import('../components/card.component'))

const Home = () => {
  const { error, keyWord, region, isLoading, data } = useGlobalContext()

  if (!error.a) {
    return (
      <>
        <section className='py-6 space-y-8'>
          <div className='flex flex-col md:flex-row justify-between md:items-center space-y-8 md:space-y-0'>
            <Searchbar />

            <div className='w-56 text-light-text dark:text-dark-text self-start'>
              <Filter />
            </div>
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
            {isLoading ? (
              <div className='col-span-full'>
                <ReactComponent />
              </div>
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
                .map((item) => {
                  return (
                    <Suspense key={item.cca3} fallback={<LoadingCard />}>
                      <LazyComponent key={item.cca3} item={item} />
                    </Suspense>
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
