import React from 'react'

import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/solid'

const Button = ({ title }) => {
  return (
    <Link to='/' className='btn'>
      <ArrowLeftIcon className='w-5 h-5' />
      <span className='ml-2'>{title}</span>
    </Link>
  )
}

export default Button
