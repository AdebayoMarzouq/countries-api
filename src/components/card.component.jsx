import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  const { name, flags, population, region, capital, cca3 } = item
  const aname = name?.official
  const aflag = flags?.svg

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Link to={`/country/${cca3.toLowerCase()}`}>
      <div className='card hover:shadow-lg flex flex-col h-full'>
        <img
          src={aflag}
          alt={aname}
          className='w-full h-52 object-cover border-b dark:border-b-0'
          lazyloading='true'
        />
        <div className='px-8 pt-6 pb-4 space-y-4'>
          <h2 className='font-bold text-2xl'>{aname}</h2>
          <div className='flex flex-col space-y-2'>
            <p>
              <span className='font-semibold'>Population:</span>
              <span className='ml-1'>{numberWithCommas(population)}</span>
            </p>
            <p>
              <span className='font-semibold'>Region:</span>
              <span className='ml-1'>{region}</span>
            </p>
            <p>
              <span className='font-semibold'>Capital:</span>
              <span className='ml-1'>
                {capital ? capital : 'Not Available'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
