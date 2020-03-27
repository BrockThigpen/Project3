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
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Login/Signup" />
    <Jumbotron />
    <Footer />
  </>
)

export default IndexPage
