import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function ArticleContent({ post }) {
  const text = post.body.childMarkdownRemark.html
  /*const split = text.split(' ');
  const bottomHalf  = Math.floor((split.length/2))
  const topHalf  = Math.ceil((split.length/2))
  const firstHalfOfArray = split.slice(0, bottomHalf).join(" ") + "</p>"
  const secondHalfOfArray = "<p>"+ split.slice(split.length-(topHalf)).join(" ")
  console.log(text)
  let parse2 = ReactHtmlParser(firstHalfOfArray);
  let parse3 = ReactHtmlParser(secondHalfOfArray);*/
  let parse4  = ReactHtmlParser(text)
  function modifyText(item, index, arr) {

    if (item.type === 'h2') {
      arr[index] = React.createElement('h2', {className: 'mt-2 block text-2xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl', children:item.props.children}, )

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
    else if (item.type === 'p') {
      arr[index] = React.createElement('p', {className: 'text-justify', children:item.props.children}, )

    }
    else if (item.type === 'ol') {
      arr[index] = React.createElement('ol', {className: 'text-justify', children:item.props.children}, )

    }
    else if (item.type === 'ul') {
      arr[index] = React.createElement('ul', {className: 'text-justify', children:item.props.children}, )

    }
    else{
      arr[index] = item;
    }
  }
 /* parse2.forEach(
    modifyText
  )
  parse3.forEach(modifyText)*/
  parse4.forEach(modifyText)
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               {post.title}
            </span>
            </h1>
          </div>
        </div>
        <div className="relative">
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            {parse4}
          </div>
        </div>
      </div>
    </div>
  )
}
