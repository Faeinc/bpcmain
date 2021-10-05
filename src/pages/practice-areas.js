import * as React from "react"
import Layout from '../components/layout'
import PracticeAreas from '../components/practiceareas'
import ArticlePreview from '../components/article-preview'
import Seo from '../components/seo'
import AboutUs from './about-us'

class PracticeAreas extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Practice-Areas"
          pathname={this.props.location.pathname}/>
        <PracticeAreas></PracticeAreas>
      </Layout>
    )
  }
}
export default PracticeAreas