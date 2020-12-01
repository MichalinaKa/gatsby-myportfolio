import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ProjectsContainer from "../components/projectsContainer"
import styled from "styled-components"


const ProjectsMain = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;

`
const ProjectsPage = ({ data }) => (

  <Layout>
    <SEO title="Page Projects" />
    <h1>Hi from the PROJECTS page</h1>
    <p>Welcome to page 2</p>

<ProjectsMain>
    {data.allMarkdownRemark.edges.map(( project, index ) => (
      <ProjectsContainer
        key={project.node.id}
        title={project.node.frontmatter.title}
        description={project.node.frontmatter.description}
        author={project.node.frontmatter.author}
        // featuredImage={project.node.frontmatter.featuredImage.childImageSharp.resolutions.src}
      />
    ))}
</ProjectsMain>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const allProjects = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            description
            title
            path
featuredImage {
            id
            childImageSharp {
              resolutions {
                src
              }
            }
          }
          }
          id
        }
      }
    }
  }
`
export default ProjectsPage
