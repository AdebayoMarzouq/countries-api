import React from 'react'

import { Outlet } from 'react-router-dom'

import Header from '../components/header.component'

const Main = () => {
  return (
    <div className='color'>
      <Header />
      <main>
        <section className='lock min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] px-8 py-8'>
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Main
