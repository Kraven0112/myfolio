import React, { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import SearchCountry from "./SearchCountry"
import useFetch from "../../customHooks/useFetch"
import CountryCard from "./CountryCard"
import DuplicateCard from "../../components/DuplicateCard"

export default function AllCountry() {
  const [query, setQuery] = useState("")
  const [continent, setContinent] = useState("")
  const [isDark] = useContext(ThemeContext)
  const data = useFetch(`https://restcountries.com/v3.1/all`)
  data?.map((country) => {
  })
  if (!data) {
    return <DuplicateCard />
  }

  return (
    <main
      className={`min-h-[89.5vh] sm:min-h-[89.5vh] p-4 ${isDark ? "bg-slate-950 text-white " : ""
        }`}
    >
      <SearchCountry fun1={setQuery} fun2={setContinent} />
      {
        !data ? <DuplicateCard /> :
          <section className="grid grid-cols-2 md:flex md:items-center md:justify-between md:flex-wrap md:gap-y-4 gap-x-2 ">
            {data?.filter((country) => {
              return country.continents[0].includes(continent)
            })
              .filter((country) => {
                return country.name.common.includes(query) || country.name.common.toLowerCase().includes(query)
              })
              .map((country) => {
                return (
                  <CountryCard
                    key={country.name.common}
                    title={country.name.common}
                    image={country.flags.png}
                    continent={country.continents[0]}
                    capital={country.capital}
                    region={country.region}
                  />
                )
              })
            }
          </section>
      }
    </main>
  )
}
