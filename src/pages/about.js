import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            J. F. Roesemann Builders, Inc. is dedicated to the creation of
            distinctive private residences in the greater New York area.
            Established in 1996, we bring an organized, detail oriented approach
            to the process of building unique homes to suit the individual needs
            of our clients.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">Fine Home Building</h3>
          <p>
            Our firm is well versed in the intricacies and aesthetics of fine
            home building and draws on knowledge of both modern and traditional
            techniques to provide truly superior results. A strong emphasis on
            project management technique keeps even the most complex job on
            track from start to finish.
          </p>
          <hr />
          <p>
            John Roesemann, the hands-on principal of our company, brings to
            every project his more than 30 years of experience in the
            construction of quality homes. From townhomes and apartments in the
            city to country estates, his understanding of the profession helps
            to ease the process for clients and their design teams.
          </p>
          <p>
            Open communication and sensitivity to his clients' concerns have
            earned him the trust and respect of renowned Architects and
            Designers in the area.
          </p>
          <p>
            Reflecting the uniquely personalized nature of our work, we offer a
            variety of professional services for all types and scales of
            projects:
          </p>
          <p>
            <li> General Contracting</li>
            <li> Construction Management</li>
            <li> Renovation and Alteration</li>
            <li> New Construction</li>
            <li> Estimating</li>
            <li> Critical path scheduling</li>
            <li> In-house carpentry</li>
          </p>
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
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
