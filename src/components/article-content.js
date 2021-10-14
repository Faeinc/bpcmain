import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function ArticleContent({ post }) {
  const text = post.body.childMarkdownRemark.html
  const split = text.split(' ');
  const bottomHalf  = Math.floor((split.length/2))
  const topHalf  = Math.ceil((split.length/2))
  const firstHalfOfArray = split.slice(0, bottomHalf).join(" ") + "</p>"
  const secondHalfOfArray = "<p>"+ split.slice(split.length-(topHalf)).join(" ")
  let parse2 = ReactHtmlParser(firstHalfOfArray);
  let parse3 = ReactHtmlParser(secondHalfOfArray);
  function modifyText(item, index, arr) {

    if (item.type === 'h2') {
      arr[index] = React.createElement('h2', {className: 'mt-6 prose prose-indigo leading-6 text-indigo-600 font-semibold tracking-wide uppercase', children:item.props.children}, )

    }
    else if (item.type === 'h3') {
      arr[index] = React.createElement('h3', {className: 'mt-6 prose prose-indigo leading-6 text-indigo-600 font-semibold tracking-wide uppercase', children:item.props.children}, )

    }
    else if (item.type === 'h4') {
      arr[index] = React.createElement('h4', {className: 'mt-6 prose prose-indigo leading-6 text-indigo-600 font-semibold tracking-wide uppercase', children:item.props.children}, )

    }
    else if (item.type === 'h5') {
      arr[index] = React.createElement('h4', {className: 'mt-6 prose prose-indigo leading-6 text-indigo-600 font-semibold tracking-wide uppercase', children:item.props.children}, )

    }
    else if (item.type === 'h1') {
      arr[index] = React.createElement('h1', {className: 'mt-6 prose prose-indigo leading-6 text-indigo-600 font-semibold tracking-wide uppercase', children:item.props.children}, )

    }
    else{
      arr[index] = item;
    }
  }
  parse2.forEach(
    modifyText
  )
  parse3.forEach(modifyText)
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h1 className="uppercase text-indigo-600 mt-2 text-2xl leading-8 font-semibold tracking-wide text-gray-900 sm:text-1xl">
              {post.title}
            </h1>
          </div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="text-gray-500 lg:mt-0">
               {/* <div dangerouslySetInnerHTML={{
                  __html: firstHalfOfArray
                }} className="text-justify" />*/}
                {/*<div>
                {parse2}
              </div>*/}
                {parse2}
              </div>
              <div className="text-gray-500 lg:mt-0">
               {/* <div dangerouslySetInnerHTML={{
                  __html: secondHalfOfArray
                }} className="text-justify" />*/}
                {parse3}
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
             {/* <a
                href="#"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact sales
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
