
import React, { useState } from 'react'
import { PhoneIcon } from '@heroicons/react/outline'
import Layout from '../components/layout'
import Seo from '../components/seo'
import axios from 'axios'
export default function ContactModule() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/fe732601-f109-4508-ba96-c4fcd036c716",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  }

  return (

    <form target="/" onSubmit={(e)=> {handleSubmit(e)}} method="POST" name="contact-us-form" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
            Phone
          </label>
          <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            aria-describedby="phone-optional"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subject"
            id="subject"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">
            Message
          </label>
          <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
        </div>
        <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      defaultValue={''}
                    />
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

