import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item, state }) => {
  const { name, flags, population, region, capital, cca3 } = item
  const aname = name?.official
  const aflag = flags?.svg

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className='card hover:shadow-lg flex flex-col'>
      <img
        src={aflag}
        alt={aname}
        className='w-full h-56 object-cover border-b dark:border-b-0'
      />
      <div className='px-8 pt-8 pb-12 space-y-4'>
        <h1 className='font-bold text-2xl'>{aname}</h1>
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
            <span className='ml-1'>{capital ? capital : 'Not Available'}</span>
          </p>
        </div>
      </div>
      <div className='self-end mt-auto w-full'>
        <Link
          to={`/country/${cca3.toLowerCase()}`}
          state={state}
          className='btn'
        >
          View details
        </Link>
      </div>
    </div>
  )
}

export default Card
