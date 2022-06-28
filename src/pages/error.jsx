import React from 'react'

import Button from '../components/button.component'

const Error = () => {
  return (
    <div className='lock space-y-16 md:mb-0 bg-light-bg dark:bg-dark-bg pt-12 md:pt-16'>
      <div className='w-32'>
        <Button title='Home' />
      </div>
      <div>
        <img src='./img/error.png' alt='' />
      </div>
    </div>
  )
}

export default Error
