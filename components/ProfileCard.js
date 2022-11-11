import React from 'react'
import Image from 'next/image'
import Card from './Card'
import { SocialIcon } from 'react-social-icons'

function ProfileCard() {
  return (
    <Card className="">
      <div className="text-center md:flex md:justify-between">
        <div className="md:text-left">
          <h2 className="text-5xl font-bold p-2 md:pl-6 md:text-6xl">
            Ricky Yuen
          </h2>
          <h3 className="text-2xl pb-4 md:pl-6 md:text-3xl">
            Software Developer
          </h3>
        </div>

        <div className="md:flex md:gap-8">
          <div className="">
            <Image
              className="border-2 bg-white/30 rounded-full"
              src="/memoji.png"
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-center gap-x-8 py-2 md:flex md:flex-col md:justify-evenly md:pr-6">
            <SocialIcon
              onClick={() =>
                window.open('https://www.linkedin.com/in/yuenricky/', '_blank')
              }
              className="rounded-full cursor-pointer"
              network="linkedin"
            />
            <SocialIcon
              network="github"
              className="rounded-full cursor-pointer"
              onClick={() => window.open('https://github.com/rykci', '_blank')}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard
