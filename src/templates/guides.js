import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticleContent from '../components/article-content'
import BlogHero from '../components/blog-hero'
import Seo from '../components/seo'

class GuideTemplate extends React.Component {
  render() {
    const guide = get(this.props, 'data.contentfulGuides')
    console.log('guide', guide)
    const imageForSeo = guide.heroImage
      ? guide.heroImage.resize
      : null
    return (
      <Layout location={this.props.location}>
        <Seo
          title={guide.title}
          image={imageForSeo}
          pathname={this.props.location.pathname}
        />
        <BlogHero content={guide}></BlogHero>
        <ArticleContent post={guide}></ArticleContent>
      </Layout>
    )
  }
}

export default GuideTemplate

export const pageQuery = graphql`
  query GuidesQuery(
    $slug: String!
  ) {
  contentfulGuides(slug: { eq: $slug }) {
    title
    slug
    heroImage {
      description
      gatsbyImageData
    }
    body {
      body
      childMarkdownRemark {
        html
      }
    }
  }
}
`
