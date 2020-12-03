import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import ProjectsContainer from "../components/projectsContainer"
import ScrollArrow from "../components/ScrollArrow"


const ProjectsPage = ({ data }) =>
  (
    <Layout>
      <SEO title="Page Projects" />
       <ProjectsContainer/>
        <ScrollArrow/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )



export default ProjectsPage

