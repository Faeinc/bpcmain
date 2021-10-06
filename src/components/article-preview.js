/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function ArticlePreview({posts}) {

  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-wider text-cyan-600 uppercase">Blog</h2>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {posts.map((post) =>{
            const image = post.heroImage.gatsbyImageData
            const authorImage = post.author.image.gatsbyImageData
            return (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                {image &&
                <GatsbyImage  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                              image={image} alt={post.heroImage.description} />}
                {/*<img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />*/}
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    {post.tags && post.tags.length>0 &&
                      post.tags.map((tag) =>{
                        return(
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          {tag}
                      </span>)
                      })
                    }
                  </p>
                  <a href={"/blog/" + post.slug + "/"} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    {/*<p className="mt-3 text-base text-gray-500">{post.description.childMarkdownRemark}</p>*/}
                  </a>
                  <p className="mb-7 text-gray-500 text-base leading-relaxed"> <div dangerouslySetInnerHTML={{
                    __html: post.description.childMarkdownRemark.html
                  }} className="text-justify" /></p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <GatsbyImage alt="Author Image" image={authorImage} className="h-10 w-10 rounded-full"></GatsbyImage>

                    {/* <a href={post.author.href}>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name} />
                    </a>*/}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.publishDate}>{post.publishDate}</time>
                      <span aria-hidden="true">&middot;</span>
                     {/* <span>{post.readingLength} read</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          )}
        </div>
      </div>
    </div>
  )
}
