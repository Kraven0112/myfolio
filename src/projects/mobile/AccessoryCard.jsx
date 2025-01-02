import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function AccessoryCard({image,title}) {
    const[isDark] = useContext(ThemeContext)
  return (
    <Link to={`/accessorydetail/${title}`} className={`block text-center rounded-2xl w-[full] h-[200px] m-2 md:w-[340px] md:h-[410px] md:p-1 ${isDark?"shadow-sm shadow-white":"shadow-lg"}`}>
      <img className=' w-[80%] h-[75%] sm:w-full sm:h-[90%]' src={image} alt="accessory" />
      <h1 className='sm:mt-1 sm:text-2xl text-sm font-bold'>{title}</h1>
    </Link>
  )
}
