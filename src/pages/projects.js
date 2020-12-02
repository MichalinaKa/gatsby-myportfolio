import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import ProjectsContainer from "../components/projectsContainer"


const ProjectsPage = ({ data }) =>
  (
    <Layout>
      <SEO title="Page Projects" />
      {/* <H1>MY PROJECTS</H1> */}
       <ProjectsContainer/>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )



export default ProjectsPage

