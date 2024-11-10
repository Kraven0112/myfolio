import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"

export default function Loginpage() {
  const [isDark] = useContext(ThemeContext)

  return (
    <main
      className={`min-h-[95vh] sm:min-h-[89.5vh] p-5 ${
        isDark ? "bg-slate-950 text-white" : ""
      }`}
    >
      <BackBtn />
      <form
      action="/"
        className={`max-w-[600px]  lg:space-y-8 mx-auto p-3 mt-4 md:p-5 border-[1px] rounded-lg ${
          isDark ? "bg-slate-800" : "border-black"
        }`}
      >
        <h1 className={`text-center text-4xl md:text-6xl font-bold ${isDark?"text-purple-400":"text-blue-700"}`}>Login</h1>
        <div className=" mt-4 md:mt-5">
          <label htmlFor="username" className="text-2xl md:text-[27px]">Email</label> <br />
          <input
            type="text"
            id="username"
            className={`outline-none px-2 text-xl w-full h-12 border-[1px] mt-1 ${
              isDark ? "border-white bg-inherit" : " border-black"
            }`}
          />
        </div>
        <div className=" mt-4 md:mt-5">
          <label htmlFor="password" className="text-2xl md:text-[27px]">Password</label> <br />
          <input
            type="text/number"
            id="password"
            className={`outline-none px-2 text-xl  w-full h-12 border-[1px] mt-1 ${
              isDark ? "border-white bg-inherit" : " border-black"
            }`}
          />
        </div>
            <div className=" mt-4 md:mt-5 text-center"> 
            <button className={` w-32 h-10 text-xl  md:w-36 md:text-2xl md:h-10 rounded-md border-[1px] ${isDark?"bg-purple-500":"bg-blue-700 text-white border-white"}`}>Login</button>
            </div>
      </form>
    </main>
  )
}
