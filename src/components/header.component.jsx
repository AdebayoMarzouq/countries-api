import { useState } from 'react'

const Header = () => {
  const [dark, setDark] = useState(false)

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark')
    setDark((prev) => !prev)
  }

  return (
    <>
      <header className='h-20 md:h-24 py-7 md:scroll-py-28 bg-light-element dark:bg-dark-element font-body text-light-text dark:text-dark-text shadow-lg'>
        <div className='lock px-8 flex justify-between items-center'>
          <h1 className='font-bold md:text-xl select-none'>
            Where in the world?
          </h1>
          <button
            className='flex items-center space-x-2'
            onClick={toggleDarkMode}
          >
            {dark ? (
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
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                ></path>
              </svg>
            ) : (
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
            )}
            <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
            {/* change text in light mode */}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
