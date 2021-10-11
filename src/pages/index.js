import React, { useState } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PracticeAreas from '../components/practiceareas'
import FAQRealEstate from '../components/faq-residential-real-estate'
import Seo from '../components/seo'
import HomeHeader from '../components/home-header'
import HomeCore from '../components/landing/home/home-core'

class RootIndex extends React.Component {
  render() {
    /*const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const menu = get(this, 'props.data.allContentfulMenuItems.nodes')
*/

    return (
      <Layout location={this.props.location}>
        <Seo
          title="Business & Real Estate Lawyers"
          pathname={this.props.location.pathname}/>
        <HomeCore></HomeCore>
         {/* <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Modern Solutions for </span>{' '}
                <span className="block text-indigo-600 xl:inline">Modern Challenges</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Founded in 2007, the Beganyi Professional Corporation Law Firm helps clients tackle
                modern challenges. We advise individuals, entrepreneurs, and growing and mature
                companies on a wide range of transactional issues. By remaining mindful of the
                bigger picture, we are better able to anticipate our clients’ needs and
                approach issues proactively to prevent problems rather than react to them.
                Our philosophy is simple: we believe in providing exceptional service coupled
                with pragmatic and forward-thinking legal advice. We love what we do, and we
                do it right. Our clients come to us for experience, solutions, creativity,
                service, and value. To see how we can help you, talk to us.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Book a Free 20 Minute Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt="temporary picture"
            />
          </div>
        </main>*/}
      {/*  <PracticeAreas></PracticeAreas>
*/}

      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
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
    allContentfulMenuItems(sort: {order: ASC, fields: menupositionid}) {
    nodes {
      name
      hasChildren
      href
      isChild
      parentId {
        name
        menupositionid
      }
      menupositionid
    }
  }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
   allContentfulBranding {
    nodes {
      businessLawHeader {
        gatsbyImageData
        description
      }
      realEstateHeader {
        description
        gatsbyImageData
      }
    }
  }
}
`
