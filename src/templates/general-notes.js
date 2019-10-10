import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/Heading"

const GeneralNotesTemplate = ({ data }) => {
  return (
    <Layout>
      <Heading level={1}>{ data.mdx.frontmatter.title }</Heading>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default GeneralNotesTemplate 

export const query = graphql`
  query NotesQuery($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
          title
      }
    }
  }
`