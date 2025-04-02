import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"

export default function Blog() {
    const [isDark] = useContext(ThemeContext)
    return (
        <main className={`min-h-[89.5vh] p-4 ${isDark
            ? "bg-[#1a1a1a] text-white"
            : ""
            }`}>

            <div className="max-w-[1000px] mx-auto mt-1">
                <h1 className={`text-xl sm:text-2xl md:text-4xl font-bold underlin text-blue-500`}>Html</h1>
                <p className={`text-pretty sm:text-xl`}>HTML is strtuctural language used to create structure of website. It is used to create and structure content on the web. It defines the layout and elements of web pages, allowing browsers to display text, images, and other multimedia.</p>
            </div>

            <div className="max-w-[1000px] mx-auto mt-5">
                <h1 className={`text-xl sm:text-2xl md:text-4xl font-bold underline text-pink-500`}>CSS</h1>
                <p className={`text-pretty sm:text-xl`}>CSS stands for cascading style sheet. It is used to decorate the webpages like font,colors, layout. It allows developers to separate content from design, making it easier to maintain and style websites across different devices.</p>
            </div>
            <div className="max-w-[1000px] mx-auto mt-5">
                <h1 className={`text-xl sm:text-2xl md:text-4xl font-bold underline text-orange-400`}>Javascript</h1>
                <p className={`text-pretty sm:text-xl`}>JavaScript is a high-level, dynamic, and interpreted programming language that is widely used for creating interactive and dynamic content on the web. It is an essential part of web development, alongside HTML and CSS, and is often referred to as the "programming language of the web."</p>
            </div>
            <div className="max-w-[1000px] mx-auto mt-5">
                <h1 className={`text-xl sm:text-2xl md:text-4xl font-bold underline text-blue-600`}>React</h1>
                <p className={`text-pretty sm:text-xl`}>React is most popular javascript library which is used to create the responsive user interfaces and web pages. React provides the features of components which make code size small and readable. </p>
                <p className={`text-pretty sm:text-xl mt-3`}>There are most important hooks concepts in react:</p>
                <Link to={"/statehook"} className={`underline text-lg ${isDark ? "text-green-200" : ""}`}>useState</Link> <br />
                <Link className={`underline text-xl ${isDark ? "text-green-200" : ""}`}>useEffect</Link> <br />
                <Link className={`underline text-xl ${isDark ? "text-green-200" : ""}`}>useContext</Link> <br />
                <Link className={`underline text-xl ${isDark ? "text-green-200" : ""}`}>useRef</Link> <br />
                <Link className={`underline text-xl ${isDark ? "text-green-200" : ""}`}>useReducer</Link> <br />
                <Link className={`underline text-xl ${isDark ? "text-green-200" : ""}`}>useMemo</Link> <br />
                <Link className={`underline text-xl ${isDark ? "text-green-200" : ""}`}>useCallback</Link> <br />
            </div>
        </main>
    )
}