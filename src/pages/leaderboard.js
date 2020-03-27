import React from "react"
import { Link } from "gatsby"

import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const LeaderboardsPage = () => (
  <Layout>
    <MDBContainer className="py-5">
      <SEO title="Page two" />
      <h1>Hi from the leaderboard page</h1>
      <p className="lead">Welcome to leaderboard</p>
    </MDBContainer>
  </Layout>
)

export default LeaderboardsPage