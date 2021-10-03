import React from 'react'
import Layout from './layout'
/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function ArticleContent({ post }) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-8"
             dangerouslySetInnerHTML={{
               __html: post.body.childMarkdownRemark.html,
             }} />
        </div>

      </div>
    </div>
  )
}
