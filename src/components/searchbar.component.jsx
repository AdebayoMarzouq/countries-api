import React from 'react'

const Searchbar = ({ keyWord, setKeyWord }) => {
  return (
    <label
      htmlFor='search'
      className='w-full md:w-2/5 text-light-input dark:text-dark-text dark:bg-dark-element rounded-lg relative'
    >
      <input
        id='search'
        type='text'
        placeholder='Search for a country...'
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
        className='w-full placeholder:text-input-light dark:placeholder:text-dark-text bg-light-element dark:bg-dark-element py-4 pl-20 pr-8 shadow-md relative rounded-lg'
      />
      <svg
        className='pointer-events-none w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 translate-x-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        ></path>
      </svg>
    </label>
  )
}

export default Searchbar
