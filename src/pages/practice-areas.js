import * as React from "react"
import Layout from '../components/layout'
import PracticeAreas from '../components/practiceareas'
import Seo from '../components/seo'

class PracticeAreasListing extends React.Component {
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
export default PracticeAreasListing