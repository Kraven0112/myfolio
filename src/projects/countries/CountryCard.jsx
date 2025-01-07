import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function CountryCard({title,image,capital,continent,region}) {
    const[isDark] = useContext(ThemeContext)
  return (
    <Link to={`/country/${title}`} className={`block overflow-hidden rounded-xl md:rounded-2xl sm:w-[300px] marker md:w-[340px] md:h-[415px] hover:scale-[1] my-2 ${isDark?"shadow-sm shadow-white":"shadow-lg"}`}>
      <img className=' w-[100%] md:h-[200px] h-[110px]' src={image} alt="accessory" />
      <div className='md:mt-3 p-1 md:p-2 md:space-y-3'>
      <h1 className='sm:mt-1 md:text-4xl text-[12px] font-bold'>{title}</h1>
      <p className='text-[10px] sm:text-xl'>Capital : {capital}</p>
      <p className='text-[10px] sm:text-xl'>Continent : {continent}</p>
      <p className='text-[10px] sm:text-xl'>Region : {region}</p>
      </div>
    </Link>
  )
}
