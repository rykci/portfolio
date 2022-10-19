import React from 'react'
import Card from './Card'
import { SocialIcon } from 'react-social-icons'

function ProfileCard() {
  return (
    <Card className="">
      <div className="text-center">
        <h2 className="text-5xl font-medium py-2">Ricky Yuen</h2>
        <h3 className="text-2xl py-2">Software Developer</h3>
        <div className="flex justify-center gap-x-12 py-2">
          <SocialIcon url="https://www.linkedin.com/in/yuenricky/" />
          <SocialIcon url="https://github.com/rykci" />
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard
