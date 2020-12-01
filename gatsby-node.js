/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve("src/templates/projectTemplate.js");


exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemarkFrontmatter @infer {
      featuredImage: File
    }

    type MarkdownRemark implements Node @infer {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
}

return graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`).then(res => {
    if (res.errors){
    return Promise.reject
    }
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: projectTemplate
        })
    })
})
}
