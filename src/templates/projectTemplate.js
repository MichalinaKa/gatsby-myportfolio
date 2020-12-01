import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import styled from 'styled-components'


// const FeaturedImage = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   width: 100%;


// `;
const Template = ({ data }) => {
    const project = data.markdownRemark
    // const featuredImage = data.markdownRemark.frontmatter.featuredImage
    //     ? data.markdownRemark.frontmatter.featuredImage
    //     : '';
console.log(project)
    return (
        <Layout>
            <Link to="/projects"> Back to projects</Link>
            <h1>{project.frontmatter.title}</h1>
            <p>{project.frontmatter.description}</p>
            <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
      

        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        author 
     }
    }
  }
`;

export default Template