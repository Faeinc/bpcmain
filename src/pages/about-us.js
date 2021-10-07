
import React from 'react'
import { ScaleIcon } from '@heroicons/react/outline'
import Layout from '../components/layout'
import Seo from '../components/seo'
const features = [
  {
    name: 'We are Client Centric',
    description:
      'When you work with us, your needs are always top priority. We will never stop looking for ways to exceed them and get ahead of any new developments so that you have the best experience possible with us! Trust is everything when it comes to working together, which is why we’re committed to building long-lasting relationships based on trust from the start. If there’s anything else that would make this process easier or more comfortable for you, please don’t hesitate letting us know! We want nothing but the best outcome for your situation. That\'s why we\'re here in the first place - let\'s talk about what matters most now!',
    icon: ScaleIcon,
  },
  {
    name: 'We Deliver Results',
    description:
      'We are a law firm that is committed to providing the highest quality legal services. We have over 14 years of experience, and we will apply our knowledge, skills, and abilities to help you achieve your goals. We understand that every legal matter is different, and we tailor our approach accordingly. You can trust us with your most critical legal issues because we’re here for you! We offer free consultations, so there’s no risk on your end when it comes to finding out how we can help you. Don’t wait any longer – get in touch with us today!',
    icon: ScaleIcon,
  },
  {
    name: 'We Communicate and Manage Expectations',
    description:
      'From the initial client intake meeting to the close of a file, we keep you apprised' +
      ' of anticipated costs, estimated turnaround times of deliverables, the likelihood of' +
      ' success of a particular matter, and what to expect from us throughout the ' +
      'process. When you work with us, we will listen carefully to your concerns and answer ' +
      'any questions you have about your legal situation so there are no surprises down the road.',
    icon: ScaleIcon,
  },
  {
    name: 'We Are Innovative',
    description:
      'We stay on the cutting edge of legal technology. Technology is utilized in our practice to reduce costs for our clients and to streamline everything from intake to trial presentation. ',
    icon: ScaleIcon,
  },
  {
    name: 'We Strive For Balance',
    description:
      'We strive for balance between work and family life. We enjoy the practice of law and cherish family time and community involvement.',
    icon: ScaleIcon,
  },
  {
    name: 'We Act With Integrity',
    description:
      'We deal openly and honestly with our clients and strive for excellence in everything we do.',
    icon: ScaleIcon,
  },
]

class AboutUs extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <Seo
          title="About Us"
          pathname={this.props.location.pathname}/>
        <div className="py-12 bg-white">
          <div className="relative bg-gray-800 overflow-hidden">
            <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
              <svg
                className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                width={364}
                height={384}
                viewBox="0 0 364 384"
                fill="none"
              >
                <defs>
                  <pattern
                    id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"/>
              </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24">
              <main className="mt-16 sm:mt-24">
                <div className="mx-auto max-w-7xl">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div
                      className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                      <div>
                        <h1
                          className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                          <span className="md:block">Are you looking</span>{' '}
                          <span className="text-indigo-400 md:block">for a new law firm?</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                          We’re here to help with everything from business formation, mergers and acquisitions, property
                          purchases and sales, commercial leases, wills & estates and more. You can trust us to provide
                          proactive advice to prevent problems rather than react to them. It’s the perfect fit for your
                          needs. Let us be there when you need it most!
                        </p>
                      </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                      <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                        <div className="px-4 py-8 sm:px-10">
                          <div className="mt-6">
                            <form target="/" method="POST" action="https://formspree.io/f/mgerqzkw"
                                  name="contact-us-form"
                                  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="bg-white">
            <div aria-hidden="true" className="relative">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
                alt="desk with pen and pencil"
                className="w-full h-96 object-center object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white"/>
            </div>

            <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What Sets Us Apart</h2>
                <p className="mt-4 text-gray-500">
                  The legal world is a confusing place. There are so many lawyers and law firms with different areas of
                  expertise that it's hard to know who you should hire for your case.
                </p>
                <p className="mt-4 text-gray-500">
                  We have experience in general business matters, real estate transactions, contract negotiations, and
                  more. Beganyi Professional Corporation Law Firm offers comprehensive legal services at an affordable
                  price tailored to our clients' needs. We're experienced, trustworthy, reliable, responsive, and
                  accessible, all qualities that make us stand out in today's crowded marketplace of lawyers and law
                  firms.
                </p>
              </div>

              <dl
                className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative bg-gray-800">
            <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
                alt="three persons working together"
              />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Ready To Get
                  Started?</h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                <p className="mt-3 text-lg text-gray-300">
                  Call (647) 977-7749 now or contact us using the form above!
                  We provide tailored legal solutions to businesses and individuals located in
                  the Greater Toronto Area, Mississauga, Brampton, Oakville, Hamilton and Milton.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default AboutUs