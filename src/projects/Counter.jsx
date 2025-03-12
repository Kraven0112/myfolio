import React, { useCallback, useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"

export default function Counter() {
  const [isDark] = useContext(ThemeContext)
  const [count, setCount] = useState(0)

const handleIncrement = useCallback(()=>{
    setCount(prev => prev + 1)
},[])

const handleDecrement = useCallback(()=>{
    setCount(prev => prev - 1)
},[])

  return (
    <main
      className={`min-h-[89.5vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn/>
      <div
        className={`max-w-[1050px] min-h-[300px] sm:min-h-[600px] rounded-lg mx-auto sm:mt-5 mt-10 ${
          isDark ? "sm:shadow-sm sm:shadow-white" : " sm:shadow-2xl"
        } flex items-center justify-center flex-col gap-10`}
      >
        <h1
          className={` text-4xl md:text-6xl lg:text-8xl font-bold ${
            isDark ? "text-emerald-600" : "text-sky-900"
          }`}
        >
          counter
        </h1>
        <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold">{count}</h1>
        <div className="sm:space-x-5 space-x-5">
          <button
          onClick={handleDecrement}
            className={` p-1 w-[120px] sm:w-[300px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "bg-green-500 text-slate-950" : "shadow-xl bg-orange-400"
            }`}
          >
            Decrement
          </button>
          <button
          onClick={handleIncrement}
            className={` p-1 w-[120px] sm:w-[300px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "bg-green-500 text-slate-950" : "shadow-xl bg-orange-400"
            }`}
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  )
}


// useCallback() hook is used to optimise the react application by preventing the unnecessary re-rendering in the application.
