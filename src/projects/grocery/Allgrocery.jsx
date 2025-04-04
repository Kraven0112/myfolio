import React, { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import GrocerySearch from "./GrocerySearch"
import useFetch from "../../customHooks/useFetch"
import GroceryCard from "./GroceryCard"
import DuplicateCard from "../../components/DuplicateCard"

export default function Allgrocery() {
  const [isDark] = useContext(ThemeContext)
  const [query, setQuery] = useState("")
  const data = useFetch("https://dummyjson.com/products/category/groceries")
  const allGrocery = data?.products


  return (
    <main
      className={`min-h-[89.5vh] sm:min-h-[89.5vh] p-4 ${isDark ? "bg-[#1a1a1a] text-white " : ""
        }`}
    >
      <GrocerySearch fun1={setQuery} />
      {
        !allGrocery ? <DuplicateCard /> :
          <section className="grid grid-cols-2 md:flex md:items-center md:justify-between md:flex-wrap md:gap-y-4 md:mt-5 mt-5">
            {allGrocery?.filter((grocery) => {
              return grocery.title.toLowerCase().includes(query) || grocery.title.includes(query)
            })?.map((grocery) => {
              return (
                <GroceryCard
                  key={grocery.title}
                  title={grocery.title}
                  image={grocery.images[0]}
                />
              )
            })}
          </section>
      }
    </main>
  )
}
