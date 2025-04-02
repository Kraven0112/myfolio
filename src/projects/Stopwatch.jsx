import React, {useContext,useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import BackBtn from '../components/BackBtn'

export default function Stopwatch() {
    const[isDark]  = useContext(ThemeContext)
    const[milisecond,setMiliSecond] = useState(0)
    const[second,setSecond] = useState(0)
    const[minute,setMinute] = useState(0)
    const[interval,setInter] = useState(0)

    const handleStart = (()=>{
        const interval = setInterval(()=>{
            setMiliSecond(prev => prev + 1)
        },10)

        setInter(interval)
        return () => clearInterval(interval)
    })

    const handleStop = (() => {
      clearInterval(interval)
    })

    const handleReset = (() => {
      clearInterval(interval)
      setMiliSecond(0)
      setSecond(0)
      setMinute(0)
    })
    

    if(milisecond > 99){
        setSecond(prev => prev + 1)
        setMiliSecond(0)
    }
    if(second > 59){
        setMinute(prev => prev + 1)
        setSecond(0)
    }
    if(minute > 59){
        setMinute(0)
    }

  return (
    <main className={`min-h-[89.5vh] sm:min-h-[89.5vh] p-5 ${isDark ?"bg-[#1a1a1a] text-white":""}`}>
      <div className={`max-w-[1050px] min-h-[600px] md:mt-5 mt-50 rounded-lg mx-auto ${
          isDark ? "md:shadow-sm md:shadow-white" : " md:shadow-2xl"
        } flex items-center justify-center flex-col gap-14 sm:gap-14`}>
                    <h1
          className={` text-4xl md:text-6xl lg:text-8xl font-bold ${
            isDark ? "textAnimation" : "text-sky-900"
          }`}
        >
          StopWatch
        </h1>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">{minute < 10 ? "0"+minute : minute}<span className='text-pink-500'>m</span> : {second < 10 ? "0"+second :second}<span className='text-purple-500'>s</span> : {milisecond < 10 ? "0"+milisecond :milisecond}<span className='text-green-500'>ms</span></h1>

        <div className="sm:space-x-5 space-x-1 flex items-center justify-center">
          <button
          onClick={handleStop}
            className={`w-[90px] sm:w-[200px] lg:w-[250px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "bg-orange-500 text-white" : "shadow-xl bg-emerald-400"
            }`}
          >
            Stop
          </button>
          <button
          onClick={handleStart}
            className={`w-[100px] sm:w-[200px] lg:w-[250px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "bg-orange-500 text-white" : "shadow-xl bg-emerald-400"
            }`}
          >
            Start
          </button>
          <button
          onClick={handleReset}
            className={`w-[90px] sm:w-[200px] lg:w-[250px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "bg-orange-500 text-white" : "shadow-xl bg-emerald-400"
            }`}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}
