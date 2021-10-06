import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const PracticeAreaHero = ({ title, content }) => {
 const image = content.headerImager.gatsbyImageData;
  return(
<div className="relative">
  <main className="lg:relative">
    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span className="block xl:inline">{content.name}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          {content.description.description}
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="/contact/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <GatsbyImage className="absolute inset-0 w-full h-full object-cover"
                   image={image} alt={content.headerImager.description} />
     {/* <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        alt=""
      />*/}
    </div>
  </main>
</div>)

}

export default PracticeAreaHero
