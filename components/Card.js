import React from 'react'

function Card({ styles, children }) {
  return (
    <div
      className={`mx-10 rounded-xl text-white py-4 backdrop-blur bg-white/30 ${
        styles ? styles : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Card
