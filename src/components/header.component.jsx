import { useState } from 'react'

const Header = () => {
  const [, setDark] = useState(false)

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark')
    setDark((prev) => !prev)
  }

  return (
    <>
      <header className='h-20 md:h-24 py-7 md:scroll-py-28 bg-light-element dark:bg-dark-element shadow-xl'>
        <div className='lock flex justify-between items-center'>
          <h1 className='font-bold md:text-xl select-none'>
            Where in the world?
          </h1>
          <button
            className='flex items-center space-x-2'
            onClick={toggleDarkMode}
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              ></path>
            </svg>
            <span>Dark Mode</span>
            {/* change text in light mode */}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
