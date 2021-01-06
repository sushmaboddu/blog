import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Helmet from "react-helmet";
import Footer from "./footer";
import CookieConsent from 'react-cookie-consent';
import { Link } from "gatsby";

interface Props {
  children: ReactNode;
}

const PageStyle = styled.div`
  background: #ffffff;
  overflow:hidden;
`;

const ConsentLink = styled(Link)`
  margin-right: auto;
  color: #000000;
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Poly skilled engineering specialists to solve hard problems
          with a robust, pragmatic approach and the right technology."
        />
        <meta name="author" content="tech.at.core"></meta>
        <title>tech.at.core</title>
      </Helmet>
      <PageStyle>
        <main>{children}</main>
        <Footer></Footer>
        
        <CookieConsent
          location="bottom"
          buttonText="I accept"
          style={{ background: "#f2f2f2", fontSize: "14px"}}
          buttonStyle={{ 
            background: "#0078D7", 
            height: "30px",
            width: "100px",
            color: "white",
            border: "none",
            outline: "none",
            cursor: "pointer",
            borderRadius: "20px",
            fontWeight: "bolder",
            fontFamily: "Nunito"
          }}
          cookieName="gatsby-gdpr-google-analytics">
            <span style={{ 
              fontSize: "14px", 
              color: "#000000", 
              fontFamily: "Nunito" 
            }}>
              We use cookies to offer you a best possible experience. By using this site or clicking agree, you consent to our use of cookies. <ConsentLink to="/privacy">Learn more</ConsentLink>
            </span>
        </CookieConsent>

      </PageStyle>
    </>
  );
};

export default Layout;
