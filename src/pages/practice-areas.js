import * as React from "react"
import Layout from '../components/layout'
import PracticeAreas from '../components/practiceareas'
import ArticlePreview from '../components/article-preview'
import Seo from '../components/seo'

export default function Component () {
  return (
    <Layout>
      <Seo
        title="Practice-Areas"
        pathname={this.props.location.pathname}/>
      <PracticeAreas></PracticeAreas>
    </Layout>
  )
}