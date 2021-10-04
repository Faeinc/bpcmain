/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Layout from '../components/layout'
const features = [
  {
    name: 'Be Client Centric',
    description:
      'Our clients come first. We are committed to exceeding your needs and expectations, and are constantly looking for ways to anticipate your requirements ahead of time. We value and strive to build long term relationships with each client.',
    icon: ScaleIcon,
  },
  {
    name: 'Deliver Results',
    description:
      'We will apply our experience, knowledge and skill to place you in the best possible situation, given your particular fact situation, to achieve the goals that you are seeking to achieve..',
    icon: ScaleIcon,
  },
  {
    name: 'Communicate and Manage Expectations',
    description:
      'From the initial client intake meeting to the close of a file, we keep you apprised of anticipated costs, estimated turnaround times of deliverables, the likelihood of success of a particular matter, and what to expect from us throughout the process.',
    icon: ScaleIcon,
  },
  {
    name: 'Be Innovative',
    description:
      'We stay on the cutting edge of legal technology. Technology is utilized in our practice to reduce costs for our clients and to streamline everything from intake to trial presentation. ',
    icon: ScaleIcon,
  },
  {
    name: 'Strive For Balance',
    description:
      'We strive for balance between work and family life. We enjoy the practice of law and cherish family time and community involvement.',
    icon: ScaleIcon,
  },
  {
    name: 'Act With Integrity',
    description:
      'We deal openly and honestly with our clients and strive for excellence in everything we do.',
    icon: ScaleIcon,
  },
]

export default function AboutUs() {
  return (
    <Layout>
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide tailored legal solutions to businesses and individuals located in
            the Greater Toronto Area, Mississauga, Brampton, Oakville, Hamilton and Milton.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xl text-gray-500 lg:mx-auto">Beganyi Professional Corporation (“BPC”) Law Firm offers clients a range of integrated legal services including in the areas of business, corporate, commercial, real estate, land development, tax planning and estate planning law.</p>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Layout>
  )
}
