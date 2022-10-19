import React from 'react'

function Navbar() {
  return (
    <nav className="px-10 flex justify-between">
      <h1 className="text-xl">rickyyu.en</h1>
      <ul className="flex gap-5">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
