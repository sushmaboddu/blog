import React, { Component } from "react";
import styled from "@emotion/styled";
import Title from "./common/title";
import { Link } from "gatsby";

const LogoPath = require("../images/logo_tech.svg") as string;
const PolygonPath = require("../images/Polygon2.svg") as string;

const Container = styled.div`
  background: #0078d7;
  position: relative;
  margin-top:-30px;
  padding-bottom: 80px;
  
  @media (max-width: 580px){
    padding: 80px 10px;
  }
`;

const ContainerTitle = styled(Title)`
  color: #ffffff;
  text-align: center;
  margin:10px;
  
  @media (max-width: 580px){
    font-size: 30px;

  }
`;

const TitleDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
`;

const Mail = styled.a`
  width: 236px;
  height: 50px;
  
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 50px;
  color: #ffffff;
  display: block;
  text-align: center;
  margin: 30px auto;
`;

const Logo = styled.img`
  width: 250.31px;
  height: 44px;
  display: block;
  margin: 70px auto 10px;
`;

const RightsText = styled.p`
  height: 20px;
  text-align: center;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  
  color: #cecece;
`;

const GoTop = styled.div`
  width: 42px;
  height: 81px;
  margin: 30px 50px 20px auto;
  
  @media (max-width: 580px){
    display: none;
  }
`;

const Top = styled.p`
  width: 35px;
  height: 41px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 50px;
  text-transform: uppercase;
  text-align: center;
  color: #f2f2f2;
`;

const Rectangle = styled.div`
  width: 42px;
  height: 42px;
  background: #ffffff;
  border-radius: 6px;
`;

const Polygon = styled.img`
  width: 24px;
  height: 24x;
  margin: 9px;
  border-radius: 2px;
`;

// const Legal = styled.div`
// width:600px;
// padding-left:70px;
// margin: 30px auto;
// display:flex;
// flex-direction:row;
// justify-content:flex-start;
// border-radius: 2px;

// @media (max-width:860px){
//   width:360px;
//   margin-top:10px;
//   display:flex;
//   flex-direction:column;
// }
// `;


// const List = styled(Link)`
//     max-width:150px;
//     margin-left:50px;
//     font-family: Nunito;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 22px;
//     line-height:1.5;
//     color: #cecece;
//     text-decoration:none;
// `;

const FooterLink = styled(Link)`
  margin-right: auto;
  color: #cecece;
  text-decoration: none;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <GoTop>
          <Top>Top</Top>
          <Link to={"#bContent"}>
            <Rectangle>
              <Polygon src={PolygonPath}></Polygon>
            </Rectangle>
          </Link>
        </GoTop>
        <ContainerTitle>Get in touch</ContainerTitle>
        <TitleDesc>
          If you'd like to know more about what we do,do not hesitate to reach out.
        </TitleDesc>
        <Mail href={"mailto:hello@techatcore.com"}>hello@techatcore.com</Mail>
        <Logo src={LogoPath}></Logo>
        <RightsText>
          ©2020 tech.at.core. All Rights Reserved | <FooterLink to={"/privacy"}> Privacy Policy </FooterLink> | <FooterLink to={"/impressum"}>Impressum</FooterLink>
        </RightsText>
      </Container>
    );
  }
}