import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default function StateHook () {
    const[isDark] = useContext(ThemeContext)
  return(
      <main className={`min-h-screen p-4 ${isDark
          ? "bg-slate-950 text-white"
          : ""
          }`}>
    <h1 className='text-xl'>useState</h1>
    </main>
  )
}