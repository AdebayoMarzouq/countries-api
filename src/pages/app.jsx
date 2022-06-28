import React from 'react'

import { Outlet } from 'react-router-dom'

import Header from '../components/header.component'

const Main = () => {
  return (
    <div className='text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg font-body min-h-screen'>
      <Header />
      <div className='lg:-mb-40 lg:pb-12'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
