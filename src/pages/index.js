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
<<<<<<< HEAD
    <Footer />
  </>
=======
    <MDBContainer>
      <MDBRow>
        <MDBCol size="auto" md="8">
          <h1 className="pb-3">Hi people</h1>
          <p className="lead grey-text">
            Welcome to your new Gatsby site. Kick off your next, great Gatsby
            project with this default starter. This barebones starter ships with
            the main Gatsby configuration files you might need.
          </p>
          <h4 className="py-3">
            This starter is configured for the following;
          </h4>
          <div>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Sass Ready
            </MDBBadge>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Font Awesome Icons
            </MDBBadge>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Progressive Web App
            </MDBBadge>
          </div>
          <div className="py-5">
            <Link to="/page-2/">
              <MDBBtn color="primary" outline>
                Go to page 2
                <MDBIcon icon="caret-right" className="ml-2" />
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
  
      </MDBRow>
    </MDBContainer>
  </Layout>
>>>>>>> 32f2591eac3d38b4dd274ab30bc2866f1cf1ef81
)

export default IndexPage
