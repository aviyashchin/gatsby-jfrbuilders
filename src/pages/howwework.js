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
          <p>
            Our mission is simple: To realize your vision and, in doing so, to
            deliver a home that exceeds even the most demanding expectations. To
            ensure success we focus on two essentials. First, we establish open
            and clear communication. We ask questions and listen to our clients,
            to understand, anticipate and resolve their needs.
          </p>
          <hr />
          <p>
            The other half of our equation for a successful project is to
            combine state-of-the-art construction management and building
            techniques with the most skilled craftsmen in the country. Our
            process is structured to provide a streamlined and productive
            experience for everyone involved.
          </p>
          <p>
            J. F. Roesemann Builders brings a highly qualified team of
            experienced, knowledgeable and motivated professionals to each
            project. We constantly seek information about innovative materials
            and techniques and enhance each other’s expertise through our
            collaborative approach. An unparalleled attention to detail is
            consistently demonstrated in all of our work.
          </p>
          <p>
            Experienced project management and site supervision is a keystone of
            our work. Budgets and schedules are carefully developed, based on
            input from all parties at the start of the project and monitored
            throughout the process.
          </p>
          <p>
            We clearly define roles, responsibilities and expectations, adhering
            to a belief that efficient planning makes possible successful
            performance. Our Job Superintendents monitor on-site activities
            daily to make sure that construction details and schedules are
            consistently achieved.
          </p>
          <p>
            J.F. Roesemann Builders maintains a select in-house group of
            carpenters and artisans as well as a group of subcontractors and
            vendors with the expertise necessary to adhere to our exacting
            standards. Drawing from a legacy that we’ve built since 1996, we are
            able to tap the best resources for each project from anywhere in the
            country.
          </p>
          <p>
            Client satisfaction over the years has led to enduring
            relationships, which we consider among our finest accomplishments.
            Referrals from satisfied customers have consistently been our
            leading source of business.
          </p>
          <p>
            With our own standards for excellence reaching beyond the
            competitive market, we exceed expectations rather than meet them.
            Offering a synthesis of modern efficiency and world-class
            craftsmanship, we leave you with a well-built, enduring and
            distinctive home.
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
