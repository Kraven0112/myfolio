import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"
export default function Header() {
  const [isDark, setDark] = useContext(ThemeContext)
  const [isVisible, setVisibility] = useState(false)
  return (
    <header
      className={` backdrop-blur-2xl tracking-widest sticky top-0 z-10  ${
        isDark ? " bg-[#421983] text-white" : " bg-white"
      }`}
    >
      <div className="max-w-[1300px] h-20 mx-auto flex items-center justify-between">
        <div>
          <h1
            className={`text-xl sm:text-3xl font-bold ${
              isDark ? "" : "text-blue-700"
            }`}
          >
          {" </ Coder >"}
          </h1>
        </div>
        <nav className={`space-x-16 text-[22px] lg:block hidden font-bold ${isDark?"":"text-blue-700"}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/blog"}>Blogs</Link>
        </nav>
        <div className="flex">
          <Link to={"/"} className={` text-xl mx-4 lg:hidden block ${isDark ? "text-white" :"text-[#421983]"}`}>
            <i className="fa-solid fa-home"></i>
          </Link>
          <Link
            to={"https://github.com/Kraven0112"}
            className={`hidden lg:block sm:text-xl mx-5 font-bold ${isDark? "" : "text-blue-700"}`}
          >
            Connect
          </Link>
          <p
            onClick={() => {
              setDark(!isDark)
              localStorage.setItem("dark", isDark)
            }}
          >
            <i className={`fa-solid fa-sun text-xl mr-4 rounding md:mr-5 ${isDark?"":"text-blue-700"}`}></i>
          </p>
          <button
            onClick={() => {
              setVisibility(!isVisible)
            }}
            className={` text-xl md:hidden block ${isDark ? "text-white " : "text-[#421983]"}`}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link to={'/signin'} className={` text-xl mx-3 hidden md:block font-bold ${isDark?"":"text-blue-700"}`}>
            Sign-in
          </Link>
          
          <Link to={"/login"} className={` text-xl mx-3 hidden md:block font-bold ${isDark?"":"text-blue-700"}`}>
            Log-in
          </Link>
        </div>
      </div>
    </header>
  )
}
