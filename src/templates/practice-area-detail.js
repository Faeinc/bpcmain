import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'
import FeatureDetail from '../components/feature-detail'
import BlogIndex from '../pages/blog'
import { graphql } from 'gatsby'


class PracticeAreaDetail extends React.Component {
  render() {
    const [practiceDetail] = get(this, 'props.data.allContentfulPracticeAreas.nodes')
    const practiceFeatureDetail = get(this, 'props.data.allContentfulPracticeAreaDetail.edges')

    return (
      <Layout location={this.props.location}>
        <Seo title="Practice-Areas" />

        <Hero title="Practice-Areas" />
        <FeatureDetail detail={practiceFeatureDetail} />

      </Layout>
    )
  }
}
export default PracticeAreaDetail

export const getData = graphql`
    query practiceDetailQuery($practiceAreaId: Int = 10) {
    allContentfulPracticeAreas(filter: {practiceAreaId: {eq: $practiceAreaId}}) {
    nodes {
      practiceAreaId
      name
      description {
        description
      }
      slug
    }
  }
  allContentfulPracticeAreaDetail(
    sort: {fields: priorityId, order: ASC}
    filter: {practiceAreaId: {practiceAreaId: {eq: $practiceAreaId}}}
  ) {
    edges {
      node {
        heading
        
        practiceAreaId {
          practiceAreaId
        }
        priorityId
        descriptionImage {
          gatsbyImageData(formats: AUTO, placeholder: BLURRED, resizingBehavior: SCALE)
          description
          title
        }
        description {
          description
        }
      }
    }
  }
}


`