import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import SocialLinks from "../components/Social"

const ContactPage = () => (
  <Layout>
< SocialLinks/>
    <SEO title="Contact - Michalina Kaminska" />
    <p>Currently living in Gliwice, Poland.
  kaminskaa.michalina@gmail.com</p>
    <a href="../../kaminska_11.2020.pdf">CV</a>
  </Layout>
)

export default ContactPage
