/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require("path")

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const projectTemplate = path.resolve("src/templates/projectTemplate.js");



// return graphql(`
//   {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             path
//           }
//         }
//       }
//     }
//   }
// `).then(res => {
//     if (res.errors){
//     return Promise.reject
//     }
//     res.data.allMarkdownRemark.edges.forEach(({node}) => {
//         createPage({
//             path: node.frontmatter.path,
//             component: projectTemplate
//         })
//     })
// })
// }

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//           }
//         }
//       }
//     }
//   }

// `

//   data.allMarkdownRemark.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.path
//     const id = edge.node.id
//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/projectTemplates.js`),
//       context: id,
//     })
//   })


// }
