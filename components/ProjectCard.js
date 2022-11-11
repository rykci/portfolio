import React from 'react'
import Image from 'next/image'
import Card from './Card'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

function ProjectCard({ cardOpen, setCardOpen }) {
  return (
    <Card>
      <div className="" id="projects">
        <div
          onClick={() => setCardOpen(!cardOpen)}
          className="cursor-pointer flex flex-between -my-4 justify-between"
        >
          <h1 className="p-4 text-lg font-semibold ">Projects</h1>
          {cardOpen ? (
            <ChevronDownIcon className="h-6 w-6 m-4" />
          ) : (
            <ChevronRightIcon className="h-6 w-6 m-4" />
          )}
        </div>
        {cardOpen ? (
          <div className="flex flex-col gap-2 md:flex-row ">
            <Card styles="mt-2 mx-0 rounded-md bg-blue-500/30 pt-0 hover:bg-blue-500/60">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  window.open('https://nyorto.vercel.app', '_blank')
                }
              >
                <div className="project header flex items-center justify-between px-4 py-2">
                  <h2 className="text-white font-semibold">
                    TO or NYC Guessing Game
                  </h2>
                  <div className="flex items-center justify-center gap-x-2">
                    <Image src="/react-logo-64.svg" width={32} height={32} />
                    <Image src="/tailwind-logo-64.svg" width={32} height={32} />
                    <Image src="/vercel-logo.svg" width={32} height={32} />
                  </div>
                </div>
                <div className=" overflow-hidden">
                  <Image
                    className="group-hover:scale-110 ease-in-out duration-300"
                    src="/nyorto-both.png"
                    width={500}
                    height={340}
                  />
                </div>
              </div>
              <p className="px-4 py-2 text-sm">
                In my recent trip to New York, I noticed many similarities with
                Toronto and wondered if my friends would be able to tell the
                difference between the two.
              </p>
              <p className="px-4 py-2 text-sm">
                Uses an API to get random{' '}
                <a
                  className=" text-cyan-200"
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>{' '}
                images tagged{' '}
                <a
                  className=" text-cyan-200"
                  href="https://unsplash.com/s/photos/toronto-street"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Toronto street"
                </a>{' '}
                or{' '}
                <a
                  className=" text-cyan-200"
                  href="https://unsplash.com/s/photos/new-york-street"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "New York street"
                </a>
                .
              </p>
            </Card>
            <Card styles="pt-0 mx-0 rounded-md bg-green-500/30 hover:bg-green-500/60">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  window.open('https://wordlegame.vercel.app', '_blank')
                }
              >
                <div className="project header flex items-center justify-between px-4 py-2">
                  <h2 className="text-white font-semibold  ">Wordle Clone</h2>
                  <div className="flex items-center justify-center gap-x-2">
                    <Image src="/react-logo-64.svg" width={32} height={32} />
                    <Image src="/tailwind-logo-64.svg" width={32} height={32} />
                    <Image src="/vercel-logo.svg" width={32} height={32} />
                  </div>
                </div>
                <div className="">
                  <Image
                    className="group-hover:scale-110 ease-in-out duration-300"
                    src="/wordle-laptop.png"
                    width={500}
                    height={340}
                  />
                </div>
              </div>
              <p className="px-4 py-2 text-sm">
                During the{' '}
                <a
                  className=" text-cyan-200"
                  href="https://www.nytimes.com/games/wordle/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wordle
                </a>{' '}
                craze, I was not satisfied with the daily limit, so I made a
                clone with random 5-letter words and a streak counter.
              </p>
            </Card>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Card>
  )
}

export default ProjectCard
