import React from 'react'

function Navbar({ openProjects, openContact }) {
  return (
    <nav className="px-10 flex justify-between">
      <a className="text-xl" href="">
        rickyyu.en
      </a>
      <ul className="flex gap-5">
        <li>
          <a href="#projects" onClick={openProjects}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={openContact}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
