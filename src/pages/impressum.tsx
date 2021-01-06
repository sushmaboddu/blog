import React, { Component } from "react";
import { PageProps } from "gatsby";
import { Link } from "gatsby";
import Title from "../components/common/title";
import Layout from "../components/layout";
import styled from "@emotion/styled";

const LogoPath = require("../images/logo_tech.svg") as string;

const BgContainer = styled.div`
  overflow:hidden;
`;

const BgShade = styled.div`
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 20px 0px;

  @media (max-width:860px){
    padding:30px 0px;
  }
`;

const TopNav = styled.header`
  margin-bottom:40px;
  margin-left:60px;

  @media (max-width:860px){
    margin-left:30px;
  }
`;

const LogoLink = styled(Link)`
  margin-right:auto;

  @media (width:860pxpx){
    position:absolute;
    display:flex;
  }
  `;

const LogoTech = styled.img`
  position: absolute;
  width: 250.31px;
  height: 44px;
 
  @media (width:614px){
    position:relative;
    width:80%;
    height: 44px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 20px;
  
`;

const ImpTitle = styled(Title)`
  display;flex;
  font-size:34px;

  @media (max-width:860px){
    font-size:24;
    display:flex;
  }
`;

const Desc = styled.div`
  padding-bottom: 20px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 20px;
  line-height:1.5;

  @media (max-width:860px){
    font-size:18px;
  }
  `;

const MailId = styled.a`
  width:300px;
  height:50px;
  margin-top:30px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 24px;
  line-height:1.5;
  color:black;
  
  @media (max-width:860px){
    font-size:18px;
  }
`;

const DescContainer = styled.div`
  padding:50px 0px;
  padding-left:50px;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;

  @media (max-width:860px){
    display:flex;
    flex-direction:column;
    justify-content:center;
  
  }
`;

const HqTiltle = styled(Title)`
margin-top:30px;
font-size:30px;

@Media (max-width:860px){
  font-size:24px;
}
`;

class Impressum extends Component {
  constructor(props: PageProps) {
    super(props);

  }

  render() {
    return (
      <Layout>
        <BgContainer>
          <BgShade>
            <TopNav>
                <LogoLink to={"/"}>
                    <LogoTech src={LogoPath} alt="tech.at.core" />
                </LogoLink>
            </TopNav>
          </BgShade>
        </BgContainer>

          <Container>
            <ImpTitle> Impressum </ImpTitle>
            <DescContainer>
              <Desc> Information according to § 5 TMG: TECHATCORE UG (haftungsbeschränkt) Seesener Str 43, 10711, Berlin, Germany.</Desc>
              <Desc> Mail: <MailId href={"mailto:hello@techatcore.com"}> hello@techatcore.com </MailId> </Desc>
              <Desc> TECHATCORE UG (haftungsbeschränkt) is represented by Jayasagar Jagirapu.</Desc>
              {/* <Desc>Registered in the Commercial Register of the Commercial Court of Charlottenburg, Germany, registration number HRB XXXXXXX B Sales tax identification number according to §27 a Sales Tax Law DE325203665</Desc> */}
              <Desc> Responsible for the content according to § 55 Abs. 2 RStV: Jayasagar Jagirapu.</Desc>
              <HqTiltle> Disclaimer </HqTiltle>
              <Desc>Liability for contents </Desc>
              <Desc>As a service provider, we are responsible for our own content on these pages according to § 7 para. 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG we are not obliged to monitor transmitted or stored information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this respect is only possible from the time of knowledge of a concrete infringement. If we become aware of any such violations, we will remove the content in question immediately. </Desc>
              <Desc>Liability for links </Desc>
              <Desc>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the contents of the linked sites. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately. </Desc>
              <Desc>Copyright </Desc>
              <Desc>The contents and works on these pages created by the site operators are subject to German copyright law. The duplication, editing, distribution and any kind of utilization outside the limits of the copyright law require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is identified as such. Should you nevertheless become aware of copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately. </Desc>
            </DescContainer>
        </Container>
      </Layout>

    );
  }
}

export default Impressum;