import React from 'react'

import Button from '../components/button.component'

const Error = () => {
  return (
    <section className='lock space-y-16 md:mb-0 bg-light-bg dark:bg-dark-bg md:mt-20'>
      <div className='w-32'>
        <Button title='Home' />
      </div>
      <div>
        <img src='./img/error.png' alt='' />
      </div>
    </section>
  )
}

export default Error
