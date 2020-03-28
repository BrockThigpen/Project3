import React from "react"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBadge,
} from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Login/Signup" />
    <Jumbotron />
  </Layout>
)

export default IndexPage
