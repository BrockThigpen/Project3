import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";
import Layout from "../components/layout";
 
const Auth0CallbackPage = () => {
    const { handleAuthentication } = useAuth();
    useEffect(() => {
        handleAuthentication();
    }, []);
 
    return (
        <Layout>
            <h1>
                Loading...
            </h1>
        </Layout>
    );
};
 
export default Auth0CallbackPage;