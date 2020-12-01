/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import GlobalStyle from "../styles/GlobalStyle"
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
            <ThemeProvider theme={theme}>


<GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className='layout'>
        <main className='main'>{children}</main>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
