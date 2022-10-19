import React, { useState } from 'react'
import Card from './Card'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

function ProjectCard() {
  const [cardOpen, setCardOpen] = useState(false)

  return (
    <Card>
      <div className="">
        <div
          onClick={() => setCardOpen(!cardOpen)}
          className="cursor-pointer flex flex-between -my-4 justify-between"
        >
          <h1 className="p-4">Projects</h1>
          {cardOpen ? (
            <ChevronDownIcon className="h-6 w-6 m-4" />
          ) : (
            <ChevronRightIcon className="h-6 w-6 m-4" />
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
