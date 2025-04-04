import React, { useCallback, useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"
import allData from "../assets/cat.json"
export default function CatImages() {
  const [isDark] = useContext(ThemeContext)
  const [single, setSingle] = useState(null)
  const [id, setId] = useState(Math.floor(Math.random() * 51 + 1))

  useEffect(() => {
    setSingle(allData[id])
  }, [id])

  const handleRandom = useCallback(()=>{
    setId(Math.floor(Math.random() * 51 + 1))
  },[])

  return (
    <main
      className={`min-h-[89.5vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-[#1a1a1a] text-white " : ""
      }`}
    >
      <div
        className={`max-w-[1050px] min-h-[300px] sm:min-h-[600px] rounded-lg mx-auto sm:mt-5 mt-10 ${
          isDark ? "sm:shadow-sm sm:shadow-white" : " sm:shadow-2xl"
        } flex items-center justify-center flex-col gap-5`}
      >
        <div className="w-full h-[300px] md:w-full md:h-[500px] flex items-center justify-center">
          <img className={` rounded-md aspect-auto w-[80%] object-cover h-full`} src={single?.image} alt="https://images.unsplash.com/photo-1602418013963-c1f017b3bb63?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fHww" />
        </div>

        <div>
        <button
          onClick={handleRandom}
          className={`p-1 w-[120px] sm:w-[300px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
            isDark ? "bg-green-500 text-slate-950" : "shadow-xl bg-slate-950 text-white"
          }`}
        >
          Random Cat
        </button>
        </div>

      </div>
    </main>
  )
}
