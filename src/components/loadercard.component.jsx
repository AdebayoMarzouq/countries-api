import React from 'react'

const LoadingCard = () => {
  return (
    <div className='card hover:shadow-lg'>
      <div className='animate-pulse flex flex-col'>
        <div className='w-full h-56 sm:h-48 bg-gray-400'></div>
        <div className='h-full m-4 space-y-2'>
          <span className='block h-10 w-32 bg-gray-400 rounded'></span>
          <span className='block h-6 w-40 bg-gray-400 rounded'></span>
          <span className='block h-6 w-56 bg-gray-400 rounded'></span>
          <span className='block h-6 w-36 bg-gray-400 rounded'></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingCard
