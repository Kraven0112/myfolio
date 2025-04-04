import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import BackBtn from '../components/BackBtn'
import myimage from "../assets/my.jpeg"
import { Link } from 'react-router-dom'

export default function Telegram() {
    const [isDark] = useContext(ThemeContext)
  return (
    <main
    className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
              isDark ? "bg-[#1a1a1a] text-white " : ""
    }`}
  >
      <div className="max-w-[1200px] mx-auto">
          <img className={`block mx-auto rounded-[50%] w-[200px] ${isDark?"shadow-lg shadow-white":"shadow-lg shadow-green-400"}`} src={myimage} alt="" />
      </div>  

      <Link to={"https://www.telegram.com"} className={` block md:max-w-[800px] md:h-[270px] mx-auto rounded-lg mt-12 md:mt-16 p-3 text-center space-x-6 lg:space-y-8  ${isDark?"shadow-sm shadow-white ":"shadow-lg bg-slate-300"}`}>
          <h1 className={`text-4xl font-bold md:text-6xl text-blue-600`}> <i className='fa-brands fa-telegram'></i> Telegram</h1>
          <p className='text-2xl md:text-4xl'>Sorry you cannot contact me. I do not use telegram.</p>
          <p className={`text-xl md:text-2xl font-bold ${isDark?"text-blue-600":"text-green-600"}`}>Click the box to see telegram website</p>
      </Link>
  </main>
  )
}
