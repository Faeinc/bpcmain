import React from "react";
import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Real Estate Lawyer',
    description: 'Ladislav focuses on real estate and business law. ' +
      'Ladislav is licensed to practice law in Ontario and is real estate insured.',
    icon: DocumentReportIcon,
  },
  {
    name: 'Experienced',
    description: 'Ladislav has over 13 years of experience in real estate both in residential purchases and sales' +
      ' as well as in land development.',
    icon: DocumentReportIcon,
  },
  {
    name: 'Knowledgeable',
    description: 'Ladislav understands the residential real estate market from the development phase to the re-sale phase.He leverages' +
      'this knowledge to ensure that you obtain the best outcome available to you in a real estate ' +
      'transaction.',
    icon: DocumentReportIcon,
  },
  {
    name: 'Gets Results',
    description: "When challenges arise, Ladislav's experience and knowledge will see you" +
      " through to the end of the transaction. With Ladislav, you will always understand" +
      " your rights and obligations under your residential real estate transaction.",
    icon: DocumentReportIcon,
  },
  {
    name: 'Flat Fee Transactions',
    description: 'We provide upfront and uncomplicated quotes for our' +
      ' residential real estate services. ' +
      'Use our real estate quote calculator and see for yourself. ',
    icon: DocumentReportIcon,
  },
  {
    name: 'Superior Service',
    description: 'You can trust us to provide proactive advice to prevent problems rather than react to them. It’s the perfect fit for your needs. Let us be there when you need it most!',
    icon: DocumentReportIcon,
  },
]

export default function WhyChooseBPCResidential() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Why choose us</h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-200">
          At Beganyi Professional Corporation, we understand that every transaction is unique.
          When you work with our firm, you can be confident that we’ll provide you with
          comprehensive advice tailored to your particular situation.
          Whether you’re buying or selling your home, acquiring a family cottage,
          or refinancing your existing property,
          we’ll be there to oversee the entire process and to provide you with timely,
          relevant, and targeted advice.
          By leveraging our experience in acting for buyers, sellers, and developers,
          we can help you navigate the complexities of your real estate transaction and,
          where necessary, help you resolve any issues that may arise.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
