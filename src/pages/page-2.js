import React from "react"
import { Link } from "gatsby"
import { MDBContainer, MDBBtn, MDBIcon, MDBCol } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image";
import ModalPage from "../components/modalpage";

const SecondPage = () => (

  <Layout>
    <MDBContainer className="py-5">
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p className="lead">Welcome to page 2</p>
      <Link to="/">
        <MDBBtn color="primary" outline>
          <MDBIcon icon="caret-left" className="mr-2" />
          Go back to the homepage
        </MDBBtn>
      </Link>

      <MDBCol size="auto" md="3" className="d-none d-md-block">
        <div style={{ maxHeight: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <ModalPage>
        </ModalPage>
      </MDBCol>

    </MDBContainer>

  </Layout>
)





export default SecondPage