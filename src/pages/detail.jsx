import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

import Button from '../components/button.component'

const Detail = () => {
  const { countryid } = useParams()
  const location = useLocation()
  const item = location.state

  const detail = (id) => item.find((item) => item.cca3 === id.toUpperCase())

  const data = detail(countryid)

  const {
    name,
    flags,
    coatOfArms,
    population,
    region,
    subregion,
    tld,
    currencies,
    languages,
    capital,
    borders,
  } = data

  const aname = name?.official
  const bname = Object.values(name?.nativeName)[0].official
  const cname = name?.common
  const aflag = flags?.svg
  const carms = coatOfArms?.svg
  const alanguage = Object.values(languages) || 'Not Available'
  const acurrency = Object.values(currencies)[0].name || 'Not Available'

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <section className='md:mb-0 pb-14 md:pb-0 mt-12 md:mt-16'>
      <div className='lock space-y-16 md:mb-0'>
        <div className='w-32'>
          <Button title='Back' />
        </div>

        <div className='xl:grid xl:grid-cols-5'>
          <div className='mb-10 md:mb-0 md:max-w-lg xl:mx-0 relative lg:h-full xl:col-span-2'>
            <img src={aflag} alt={aname} className='lg:h-full object-cover' />
            {carms && (
              <img
                src={carms}
                alt='coat of arms'
                className='absolute top-4 right-4 w-20 h-20 rounded-full border overflow-hidden'
              />
            )}
          </div>
          <div className='flex flex-col space-y-8 md:grid md:grid-cols-2 xl:col-span-3 md:my-8 xl:ml-12'>
            <div className='col-span-2'>
              <h1 className='font-bold text-xl'>{aname}</h1>
            </div>
            <div className='space-y-3'>
              <p>
                <span className='font-semibold'>Native Name:</span>
                <span className='pl-1'>{bname}</span>
              </p>
              <p>
                <span className='font-semibold'>Population:</span>
                <span className='pl-1'>{numberWithCommas(population)}</span>
              </p>
              <p>
                <span className='font-semibold'>Region:</span>
                <span className='pl-1'>{region}</span>
              </p>
              <p>
                <span className='font-semibold'>Sub Region:</span>
                <span className='pl-1'>{subregion}</span>
              </p>
              <p>
                <span className='font-semibold'>Capital:</span>
                <span className='pl-1'>{capital}</span>
              </p>
            </div>
            <div className='space-y-3'>
              <p>
                <span className='font-semibold'>Common Name:</span>
                <span className='pl-1'>{cname}</span>
              </p>
              <p>
                <span className='font-semibold'>Top Level Domain:</span>
                <span className='pl-1'>{tld}</span>
              </p>
              <p>
                <span className='font-semibold'>Currencies:</span>
                <span className='pl-1'>{acurrency}</span>
              </p>
              <p>
                <span className='font-semibold'>Language(s):</span>
                <span className='pl-1'>{alanguage.join(', ')}</span>
              </p>
            </div>
            <div className='space-y-3 md:space-y-0 md:space-x-2 lg:space-x-4 col-span-2 flex flex-col md:flex-row md:items-baseline'>
              <span className='font-semibold xl:whitespace-nowrap'>
                Border Countries:
              </span>
              <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2'>
                {borders &&
                  borders.map((country) => (
                    <Link
                      to={`/country/${country.toLowerCase()}`}
                      key={country}
                      className='btn flex justify-center items-center rounded'
                      state={item}
                    >
                      {country}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail
