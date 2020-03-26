// Global style files for MDBReact

import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "./src/styles/scss/mdb.scss"

//Auth0

import React from "react";
import { navigate } from "gatsby";
 
import { AuthProvider } from "react-use-auth";
 
export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="dev-t-dgqceb.auth0.com"
        auth0_client_id="xoQcYcuDqvepa4H8S8MxF7Ks2kOnu6ke"
    >
        {element}
    </AuthProvider>
);