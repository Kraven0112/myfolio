import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default function DuplicateCard() {
    const [isDark] = useContext(ThemeContext)
    return (
        <div className={`grid grid-cols-2 md:flex md:items-center md:justify-between md:flex-wrap md:gap-y-4  ${isDark ? "bg-black":"" }`}>
            {
                Array.from({ length: 100 }).map((ei, i) => {
                    return (
                        <div key={i} className={`w-[full] h-[200px] overflow-hidden rounded-xl md:rounded-2xl sm:w-[300px] marker md:w-[340px] md:h-[415px] hover:scale-[1] my-2 flex items-center justify-center ${isDark ? "shadow-sm shadow-white bg-gray-300" : "shadow-lg bg-gray-100"}`}>
                            <div className="loader">
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}