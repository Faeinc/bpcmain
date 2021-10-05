import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigationv2'
import ArticleContent from '../components/article-content'
import { GatsbyImage } from 'gatsby-plugin-image'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const firstPost = posts.shift()
    const image = firstPost.heroImage.gatsbyImageData
    console.log(posts)
    return (
      <Layout location={this.props.location}>
        <Seo
          title="Blog"
          pathname={this.props.location.pathname}/>

        {/*<Hero title="Blog" />*/}
        <section className="relative py-20 overflow-hidden">
          <GatsbyImage alt="Blog List Header Image" image={image}
                       className="absolute top-0 left-0 w-full h-full object-cover"></GatsbyImage>

            <div className="relative container px-4 mx-auto z-10">
              <div className="max-w-xl mx-auto lg:mx-0 py-12 pl-16 pr-32 bg-white clip-path-right-top">
                <h3 className="mb-4 text-2xl font-semibold text-blue-800">  <a href={"/blog/" + firstPost.slug} className="hover:underline">
                  {firstPost.title}
                </a></h3>
                <p className="mb-7 text-gray-500 text-base leading-relaxed"> <div dangerouslySetInnerHTML={{
                  __html: firstPost.description.childMarkdownRemark.html
                }} className="text-justify" /></p>

              </div>
            </div>
        </section>

        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        author {
          name
          image {
            gatsbyImageData
          }
        }
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
