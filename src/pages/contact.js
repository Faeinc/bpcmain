
import React from 'react'
import { PhoneIcon } from '@heroicons/react/outline'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactModule from '../components/contact-module'
class Contact extends React.Component {

  render() {


    return (

      <Layout location={this.props.location}>
        <Seo
          title="Contact-Us"
          pathname={this.props.location.pathname}/>
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
                  <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">Office Location</h3>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    102-2680 Matheson Boulevard East <br/>
                    Mississauga, ON <br/>
                    L4W 0A5
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-indigo-50">
                      <PhoneIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                      <span className="ml-3">Tel: +1 (647) 977-7749</span>
                    </dd>
                    <dd className="flex text-base text-indigo-50">
                      <PhoneIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                      <span className="ml-3">Fax: +1 (888) 470-5151</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                  </dl>
                </div>

                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                  <ContactModule></ContactModule>
                </div>
              </div>

            </div>

          </div>

        </div>


      </Layout>
    )
  }
}
export default Contact

