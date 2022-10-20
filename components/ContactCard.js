import React, { useState } from 'react'
import Card from './Card'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

function ContactCard({ cardOpen, setCardOpen }) {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: '',
  })

  const changeValue = (e, field) => {
    let newFields = formFields
    newFields[field] = e.target.value
    console.log(newFields)
    setFormFields({ ...newFields })
  }

  return (
    <Card>
      <div className="" id="contact">
        <div
          onClick={() => setCardOpen(!cardOpen)}
          className="cursor-pointer flex flex-between -my-4 justify-between"
        >
          <h1 className="p-4 text-lg font-semibold">Contact</h1>
          {cardOpen ? (
            <ChevronDownIcon className="h-6 w-6 m-4" />
          ) : (
            <ChevronRightIcon className="h-6 w-6 m-4" />
          )}
        </div>
        {cardOpen ? (
          <Card styles="pt-0 mx-0 rounded-md my-2 backdrop-blur-none bg-inherit pb-0 mb-0">
            <div className="p-4">
              <p className=" text-sm text-center">
                Have a question or want to work together? Leave your details and
                I'll get back to you as soon as possible.
              </p>
              <form className="py-4 flex flex-col gap-y-2">
                <input
                  placeholder="Name"
                  className="p-1 px-2 bg-white/80 rounded-md text-black"
                  value={formFields.name}
                  onChange={(e) => changeValue(e, 'name')}
                />
                <input
                  placeholder="Email"
                  className="p-1 px-2 bg-white/80 rounded-md text-black"
                  value={formFields.email}
                  onChange={(e) => changeValue(e, 'email')}
                />
                <input
                  placeholder="Message"
                  className="p-1 px-2 pb-16 bg-white/80 rounded-md text-black"
                  value={formFields.message}
                  onChange={(e) => changeValue(e, 'message')}
                />
                <div className="flex items-center justify-center pt-4">
                  <button className="border-2 py-1 px-4 rounded hover:bg-teal-400 hover:border-teal-400">
                    Sumbit
                  </button>
                </div>
              </form>
            </div>
          </Card>
        ) : (
          <></>
        )}
      </div>
    </Card>
  )
}

export default ContactCard

/*
<div className="p-4">
            <p className=" text-sm">
              Have a question or want to work together? Leave your details and
              I'll get back to you as soon as possible.
            </p>
            <form className="py-4 flex flex-col gap-y-2">
              <input
                placeholder="Name"
                className="p-1 px-2 bg-white/80 rounded-md"
              />
              <input
                placeholder="Email"
                className="p-1 px-2 bg-white/80 rounded-md"
              />
              <input
                placeholder="Message"
                className="p-1 px-2 h- bg-white/80 rounded-md"
              />
              <button>Sumbit</button>
            </form>
          </div>
*/
