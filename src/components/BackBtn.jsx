import React, { useContext } from "react"

export default function BackBtn() {
  return (
    <div className="px-2 hidden sm:block">
      <button
        className={`text-xl`}
        onClick={() => {
          history.back()
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  )
}
