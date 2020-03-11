import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const HowWeWorkPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="HowWeWork" />
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <Img
            fluid={data.JFRBLogo.childImageSharp.fluid}
            style={{ width: 200, height: 200, margin: "0 auto" }}
            alt="J.F. Roesemann Builders, Inc."
          />
          <a href="tel:8453488833">
            <div>Phone: (845) 348-8833</div>
          </a>
          <a href="tel:8453488834">
            <div>Fax: (845) 348-8834</div>
          </a>
          <a href="mailto:info@jfrbuilders.com?&subject=Getting%20in%20touch&body=Hello">
            <div>Email: info@jfrbuilders.com</div>
          </a>
          <a href="https://goo.gl/maps/UKBcpFxLXt7i6DnT8">
            <div>99 Robinhood Lane</div>
            <div> New City, NY 10956</div>
          </a>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    JFRBLogo: file(relativePath: { eq: "Logolightnoback.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <HowWeWorkPage location={props.location} data={data} {...props} />
    )}
  />
)
