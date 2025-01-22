import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import AccessorySearch from './AccessorySearch'
import useFetch from '../../customHooks/useFetch'
import AccessoryCard from './AccessoryCard'

export default function AllAccessories() {
    const[isDark]  = useContext(ThemeContext)
    const[query,setQuery] = useState('')
    const[brand,setBrand] = useState('')
    const data = useFetch('https://dummyjson.com/products/category/smartphones')
    const allData = data?.products
  return (
    <main    className={`min-h-[89.5vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}>
      <AccessorySearch fun1={setQuery} fun2={setBrand} />

      <section className=' grid grid-cols-2  md:flex md:items-center md:justify-between md:flex-wrap md:gap-y-5 mt-5'>
        {
          allData?.filter((product)=>{
            return product.brand.includes(brand)
          })
          .filter((product)=>{
            return product.title.toLowerCase().includes(query)
          })
          .map((product)=>{
            return(
              <AccessoryCard key={product.title} image={product.images[2]} title={product.title}/>
            )
          })
        }
      </section>
    </main>
  )
}
