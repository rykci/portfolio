import React from 'react'

function Card({ children }) {
  return (
    <div className="mx-10 rounded-xl text-white py-4 backdrop-blur bg-white/30">
      {children}
    </div>
  )
}

export default Card
