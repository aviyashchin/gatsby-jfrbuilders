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
          J.F. Roesemann Builders, Inc.
          <div>Samantha Roesemann</div>
          <div>
            <a href="tel:8453488833">Phone: (845) 348-8833</a>
          </div>
          <div>
            <a href="tel:8453488834">Fax: (845) 348-8834</a>
          </div>
          <div>
            <a href="mailto:info@jfrbuilders.com?&subject=Getting%20in%20touch&body=Hello">
              Email: info@jfrbuilders.com
            </a>
          </div>
          <div>
            <a href="https://goo.gl/maps/UKBcpFxLXt7i6DnT8">
              <div>99 Robinhood Lane</div>
              <div> New City, NY 10956</div>
            </a>
          </div>
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
