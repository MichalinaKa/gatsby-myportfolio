import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
 

<div>Amesa
</div>
<div></div>
</ProjectsMain>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
