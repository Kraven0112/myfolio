import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"

export default function Loginpage() {
  const [isDark] = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[95vh] sm:min-h-[89.5vh] p-5 ${isDark ? "bg-slate-950 text-white" : ""
        }`}
    >
      <BackBtn />
      <form
        action="/"
        className={`max-w-[600px]  lg:space-y-8 mx-auto p-3 mt-4 md:p-5 border-[1px] rounded-lg ${isDark ? "bg-slate-800" : "border-black"
          }`}
      >
        <h1 className={`text-center text-4xl md:text-4xl font-bold ${isDark ? "text-purple-400" : "text-blue-700"}`}>Login</h1>
        <div className=" mt-4 md:mt-5">
          <label htmlFor="username" className="text-2xl md:text-[24px]">Email</label>
          <input
            type="text"
            id="username"
            className={`outline-none px-2 text-xl w-full h-10 border-[1px] border-l-0 border-r-0 border-t-0 ${isDark ? "border-white bg-inherit" : " border-black"
              }`}
          />
        </div>
        <div className=" mt-4 md:mt-5">
          <label htmlFor="password" className="text-2xl md:text-[24px]">Password</label>
          <input
            type="text/number"
            id="password"
            className={`outline-none px-2 text-xl  w-full h-10 border-[1px] border-l-0 border-r-0 border-t-0 ${isDark ? "border-white bg-inherit" : " border-black"
              }`}
          />
        </div>
        <div className=" mt-4 md:mt-5 text-center">
          <button className={` w-32 h-14 text-xl  md:w-40 md:text-2xl md:h-10 rounded-md border-[1px] ${isDark ? "bg-purple-500" : "bg-blue-700 text-white border-white"}`}>Login</button>
        </div>
        <p className="text-blue-700 sm:text-xl mt-2">Forget password?</p>
      </form>
    </main>
  )
}
