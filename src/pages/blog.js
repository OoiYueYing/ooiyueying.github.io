import React from "react"
import PageLayout from "../components/layouts/PageLayout"
import { graphql, Link } from "gatsby"
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar"
import { FiClock } from "@react-icons/all-files/fi/FiClock"
import Img from "gatsby-image"

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        timeToRead
        frontmatter {
          title
          summary
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <PageLayout>
      <div className="flex flex-col sm:flex-row items-center">
        <h1 className="text-3xl mb-6 uppercase font-extrabold">Blog</h1>
      </div>
      <div>
        {console.log(data.allMdx.nodes)}
        {data.allMdx.nodes.map(({ frontmatter, fields, timeToRead }) => (
          <div className="mb-6 transition duration-200 ease-in-out shadow-md rounded-md overflow-hidden bg-gray-50 flex flex-col sm:flex-row items-stretch">
            <div className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block sm:h-auto sm:w-2/5 lg:w-1/4">
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </div>
            <div className="p-6 sm:w-3/5 lg:w-3/4">
              <Link
                to={fields.slug}
                className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 uppercase text-xl sm:flex-row items-stretch"
              >
                <h1 className="font-bold">{frontmatter.title}</h1>
              </Link>
              <div className="flex flex-row items-center">
                <div className="text-s text-gray-500 mr-4 flex flex-row items-center">
                  <FiCalendar className="mr-1" />
                  {frontmatter.date}
                </div>
                <div className="text-s text-gray-500 mr-4 flex flex-row items-center">
                  <FiClock className="mr-1" />
                  {timeToRead} min read
                </div>
              </div>
              <div classname="font-light">{frontmatter.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default Blog
