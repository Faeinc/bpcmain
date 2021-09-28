import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigationv2'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <div className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
        </div>
      </>
    )
  }
}

export default Template
