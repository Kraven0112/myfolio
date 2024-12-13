import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from '../components/BackBtn'

export default function Blog() {
    const [isDark] = useContext(ThemeContext)
    return (
        <main className={`min-h-[95vh] sm:min-h-[89.5vh] p-4 ${isDark
            ? "bg-slate-950 text-white"
            : ""
            }`}>
            <BackBtn/>
        </main>
    )
}