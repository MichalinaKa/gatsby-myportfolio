import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

 function Template({ data }) {
  const project = data.markdownRemark

  return (
    <Layout>
      <Link to="/projects">Back to projects</Link>

      <h1>{project.frontmatter.title}</h1>
      <p>{project.frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
    </Layout>
  )
}

export const ProjectsQuery = graphql`
  query ProjectTemplate($path:String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        description
        path
        title
      }
    }
  }
`

export default Template