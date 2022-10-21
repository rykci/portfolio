import React from 'react'
import Image from 'next/image'
import Card from './Card'
import { SocialIcon } from 'react-social-icons'

function ProfileCard() {
  return (
    <Card className="">
      <div className="text-center">
        <h2 className="text-5xl font-bold p-2">Ricky Yuen</h2>
        <h3 className="text-2xl pb-4">Software Developer</h3>

        <div className="">
          <Image
            className="border-2 bg-white/30 rounded-full"
            src="/memoji.png"
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-center gap-x-8 py-2">
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
    </Card>
  )
}

export default ProfileCard
