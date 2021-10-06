import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PracticeAreaHero from '../components/practice-area-hero'
import FeatureDetail from '../components/feature-detail'
import { graphql } from 'gatsby'


class PracticeAreaDetail extends React.Component {
  render() {
    const [practiceDetail] = get(this, 'props.data.allContentfulPracticeAreas.nodes')
    const practiceFeatureDetail = get(this, 'props.data.allContentfulPracticeAreaDetail.edges')
    return (
      <Layout location={this.props.location}>
        <Seo
          title="Practice-Areas"
          pathname={this.props.location.pathname}/>

        <PracticeAreaHero title="Practice-Areas" content={practiceDetail} />
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
      headerImager {
          description
          gatsbyImageData(formats: AUTO, placeholder: BLURRED, resizingBehavior: FILL, width: 1500)
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
          gatsbyImageData(formats: AUTO, placeholder: BLURRED, resizingBehavior: FILL, width: 900)
          description
          title
        fluid(maxWidth: 500) {
            src
            srcSetWebp
            srcWebp
            srcSet
          }
        }
        description {
          description
        }
      }
    }
  }
}


`