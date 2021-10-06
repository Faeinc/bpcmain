import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function BlogHero({content}) {
  const image = content.heroImage.gatsbyImageData
  return (
    <div className="relative bg-gray-50 pt-4 overflow-hidden sm:pt-6 lg:pt-8">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <GatsbyImage  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                        image={image} alt={content.heroImage.description} />
        </div>
      </div>
    </div>
  )
}
