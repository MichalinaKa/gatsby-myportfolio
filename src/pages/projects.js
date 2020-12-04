import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import ProjectsContainer from "../components/projectsContainer"
import ScrollArrow from "../components/ScrollArrow"


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
`

const ProjectsPage = ({ data }) =>
  (
    <Layout  >
      <SEO title="Page Projects" />
       <ProjectsContainer />
        <ScrollArrow/>
        <GoBackLink to="/">Go back to the homepage</GoBackLink>
    </Layout>
  )



export default ProjectsPage

