import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import PageLayout from "./PageLayout"
import React from "react"
import theme from "prism-react-renderer/themes/nightOwlLight"
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar"
import { FiClock } from "@react-icons/all-files/fi/FiClock"

export const query = graphql`
  query PostsBySlugIndividual($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

const components = {
  p: props => <p {...props} className="text-base font-normal mb-4 font-sans" />,
  h1: props => <h1 {...props} className="text-2xl font-bold mb-4 mt-10" />,
  h2: props => <h2 {...props} className="text-xl font-bold mb-4 mt-8" />,
  h3: props => <h3 {...props} className="text-lg font-bold mb-4 mt-8" />,
  strong: props => (
    <strong {...props} className="font-bold" style={{ display: "inline" }} />
  ),
  a: props => (
    <a
      {...props}
      className="font-bold text-red-500 hover:underline cursor-pointer"
      style={{ display: "inline" }}
    />
  ),
  ul: props => <ul {...props} className="list-disc font-light ml-8 mb-4" />,
  blockquote: props => (
    <div
      {...props}
      role="alert"
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 ml-4 mb-4"
    />
  ),
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

const blogPage = ({ data }) => {
  const { frontmatter, body, timeToRead } = data.mdx
  return (
    <PageLayout>
      <div className="flex flex-col items-center">
        <article
          className="w-full prose prose-sm sm:prose overflow-hidden prose-red"
          style={{ maxWidth: "860px" }}
        >
          <h1 className="text-3xl mb-6 uppercase font-extrabold">
            {frontmatter.title}
          </h1>
          <div className="flex flex-row items-center">
            <div className="mr-4 mb-6 flex flex-row items-center">
              <FiCalendar className="mr-1" />
              {frontmatter.date}
            </div>
            <div className="mr-4 mb-6 flex flex-row items-center">
              <FiClock className="mr-1" />
              {timeToRead} min read
            </div>
          </div>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
    </PageLayout>
  )
}

export default blogPage
