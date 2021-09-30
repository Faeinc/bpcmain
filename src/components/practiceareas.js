import React from 'react'
import InboxIcon from '@heroicons/react/outline/InboxIcon'
import SparklesIcon from '@heroicons/react/outline/SparklesIcon'
import { graphql, useStaticQuery } from 'gatsby'
import BriefcaseIcon from '@heroicons/react/outline/BriefcaseIcon'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function PracticeAreas() {
  const getData = graphql`
    query practiceQuery {
    allContentfulPracticeAreas(sort: {fields: practiceAreaId, order: ASC}) {
    nodes {
      practiceAreaId
      name
      slug
      description {
        description
      }
      headerImager {
          gatsbyImageData
        }
    }
  }
}

`
  const rawQuery = useStaticQuery(getData);
  const practiceAreas = rawQuery.allContentfulPracticeAreas.nodes;
console.log(practiceAreas[0].headerImager.gatsbyImageData)
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
      <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl pb-5">
          Practice Areas
        </p>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <BriefcaseIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {practiceAreas[0].name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {practiceAreas[0].description.description}
                </p>
                <div className="mt-6">
                  <a
                    href={"/practice-areas/" + practiceAreas[0].slug}
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <GatsbyImage className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                image={practiceAreas[0].headerImager.gatsbyImageData} alt="temporary alternate" />

            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {practiceAreas[1].name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {practiceAreas[1].description.description}
                </p>
                <div className="mt-6">
                  <a
                    href={"/practice-areas/" + practiceAreas[1].slug}
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <GatsbyImage className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                           image={practiceAreas[1].headerImager.gatsbyImageData} alt="temporary alternate" />

            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <BriefcaseIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {practiceAreas[2].name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {practiceAreas[2].description.description}
                </p>
                <div className="mt-6">
                  <a
                    href={"/practice-areas/" + practiceAreas[2].slug}
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <GatsbyImage className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                           image={practiceAreas[2].headerImager.gatsbyImageData} alt="temporary alternate" />

            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {practiceAreas[3].name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {practiceAreas[3].description.description}
                </p>
                <div className="mt-6">
                  <a
                    href={"/practice-areas/" + practiceAreas[3].slug}
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <GatsbyImage className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                           image={practiceAreas[3].headerImager.gatsbyImageData} alt="temporary alternate" />

            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <BriefcaseIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {practiceAreas[4].name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {practiceAreas[4].description.description}
                </p>
                <div className="mt-6">
                  <a
                    href={"/practice-areas/" + practiceAreas[4].slug}
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <GatsbyImage className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                           image={practiceAreas[4].headerImager.gatsbyImageData} alt="temporary alternate" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}