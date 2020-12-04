import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ProjectsContainer from "../components/projectsContainer"


const GoBackLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
color: ${({theme}) => theme.colors.black};
font-family: "MajorMono";
font-weight: 400px;
background-color: ${({theme}) => theme.colors.yellow};
width: 70%;
margin: 0 auto 100px;
letter-spacing: 2px;
font-size: 20px;
text-decoration: none;
text-transform: uppercase;
z-index: 11;
`

const ProjectsPage = () =>
  (
    <Layout  >
      <SEO title="Page Projects" />
       <ProjectsContainer />
        <GoBackLink to="/">Go back to the homepage</GoBackLink>
    </Layout>
  )



export default ProjectsPage

