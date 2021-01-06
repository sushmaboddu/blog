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
    align-items:center;
    margin-top: 10px;
    padding-bottom: 20px;
  @media (max-width:860px){
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-right:20px;
  }
`;

const ImpTitle = styled(Title)`
  display;flex;
  font-size:34px;

  @media (max-width:860px){
    font-size:24;
    display:flex;
    text-align:Center;
  }
`;

const Desc = styled.div`
  padding-bottom:20px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 24px;
  line-height:1.5;

  @media (max-width:860px){
    width:360px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-item:center;
    font-size:22px;
   }
  `;


const DescContainer = styled.div`
  padding:50px 0px;
  padding-left:50px;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-left:200px;
  margin-right:200px;

  @media (max-width:860px){
    display:flex;
    flex-direction:column;
    align-items:center;
  
  }
`;

const List = styled.li`
    content: "•"; 
    padding-left:40px;
    padding-bottom: 20px;
    font-family: Nunito;
    font-style: normal;
    font-weight:normal;
    font-size: 20px;
    line-height:1.5;

    @media (max-width:860px){
      width:360px;
      content: "•";
      display:flex;
      align-items:left;
      padding-left:20px;
      font-size:18px;
      
    }
    
  `;

const Contact = styled(Title)`
  margin-top:20px;
  font-size:34px;

  @media (max-width:860px){
    font-size:30px;
  }
  `;

const Adress = styled.p`
  padding-left:10px;
  padding-bottom:10px;
  margin-top:10px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 20px;
  line-height:46px;

  @media (max-width:860px){
    width:360px;
    font-size:18px;
    display:flex;
    align-items:center;
    padding-left:0px;
    margin-right:10px;
  }
`;
const Ist = styled('ul')`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
 `;
const IconWrapper = styled('span')`
  display: flex;
  margin-right: 15px;
  height: 16px;
  align-items: center;
`;
const ListItem = styled(({icon, className, children}) => (
  <li className={className}>
    {icon && (
      <IconWrapper>
        {icon}
      </IconWrapper>
    )}
    {children}
  </li>
)) 
`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  margin-bottom: 20px;
  color:red;
	
  &:before,
	& > ${IconWrapper} {
    position: absolute;
    left: 0;
  }

  ul & {
    color: black;
    font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 20px;
  line-height:6px;
    /* This pseudo is the tiny circle for ul items */ 
    &:before {
      content: '•';
      top:2px;
      left: 5px;
    }
		
    /* Icon styles */
    ${p =>
      p.icon &&
      `
     
      /* Removes tiny circle pseudo if icon is present */
      &:before {
        content: none;
      }
    `}
  }

  }
`;
const Gap = styled.div`
height:3px;
`;

const Story = styled.div`
  margin-top:20px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 20px;
  line-height:46px;

  @media (max-width:860x){
    display:none;
  }
 `;

const InstStyle = styled.p`
    color:${props => props.color}

    @media (max-width:860x){
      display:none;
    }
 `;


class Privacy extends Component {
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
          <ImpTitle> tech.at.core Privacy Policy </ImpTitle>
          <DescContainer>
            <Desc>This privacy policy explains how tech.at.core process data in case of</Desc>
            <List>tech.at.core client or business partner,</List>
            <List>not yet tech.at.core client but receive marketing communication from us,</List>
            <List>visit our website.</List>
            <Desc>We are always committed and responsible to protecting your privacy as described here.</Desc>
            <Contact>Contact us?</Contact>
            <Adress>The person responsible pursuant to Art. 4 para.&nbsp;7 of the EU General&nbsp;Data Protection Regulation ("GDPR") is TECHATCORE&nbsp;UG&nbsp;(haftungsbeschränkt),
                Seesener Str 43, 10711, Berlin, Germany.</Adress>
            <Adress>If you have any questions about matters related to privacy, you can always email us at hello@techatcore.com.</Adress>
            <Contact>What data do we process and why?</Contact>
            <Adress>The following outlines the various types of personal data we process, the sources for each type of personal data, as well as the purpose and legal basis for processing said personal data.</Adress>
            <Adress>If you are our client, business partner or a representative of either:</Adress>
            <Ist>
  <ListItem>Data&nbsp;type: Name</ListItem>
  <ListItem>Source: You or your organisation</ListItem>
  <ListItem>Purpose: Provision of services, management of client relationship </ListItem>
  <ListItem>Legal&nbsp;basis: Business contract or relationship</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Contact&nbsp;details </ListItem>
  <ListItem>Source: You or your organisation</ListItem>
  <ListItem>Purpose: Provision of services, management of client relationship </ListItem>
  <ListItem>Legal&nbsp;basis:Business contract or relationship </ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Employer or other organisatio</ListItem>
  <ListItem>Source: You or your organisation</ListItem>
  <ListItem>Purpose: Provision of services, management of client relationship</ListItem>
  <ListItem>Legal&nbsp;basis: Business contract or relationship</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Role</ListItem>
  <ListItem>Source: You or your organisation</ListItem>
  <ListItem>Purpose: Provision of services, management of client relationship</ListItem>
  <ListItem>Legal&nbsp;basis: Business contract or relationship</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Information about communication</ListItem>
  <ListItem>Source: Communication between you and us</ListItem>
  <ListItem>Purpose: Provision of services, management of client relationship</ListItem>
  <ListItem>Legal&nbsp;basis: Business contract or relationship</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Event sign-ups</ListItem>
  <ListItem>Source: You</ListItem>
  <ListItem>Purpose: Event organisation, management of client relationship</ListItem>
  <ListItem>Legal&nbsp;basis: Contract (event sign-up)</ListItem>
           </Ist>
            <Adress>If you are not (yet) a tech.at.core client but receive marketing communication from us:</Adress>
            <Ist>
  <ListItem>Data&nbsp;type: Name</ListItem>
  <ListItem>Source: You or a personal contact at tech.at.core</ListItem>
  <ListItem>Purpose: Marketing</ListItem>
  <ListItem>Legal&nbsp;basis: Your consent or our legitimate interest (marketing)</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Contact details</ListItem>
  <ListItem>Source: You or a personal contact at tech.at.core</ListItem>
  <ListItem>Purpose: Marketing</ListItem>
  <ListItem>Legal&nbsp;basis: Your consent or our legitimate interest (marketing)</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Employer or other organisation</ListItem>
  <ListItem>Source: You or a personal contact at tech.at.core</ListItem>
  <ListItem>Purpose:  Marketing</ListItem>
  <ListItem>Legal&nbsp;basis: Your consent or our legitimate interest (marketing)</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Information about comunication</ListItem>
  <ListItem>Source: Communication between you and us</ListItem>
  <ListItem>Purpose: Marketing</ListItem>
  <ListItem>Legal&nbsp;basis: Your consent or our legitimate interest (marketing)</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Data&nbsp;type: Event sign-ups</ListItem>
  <ListItem>Source: You</ListItem>
  <ListItem>Purpose: Event organisation</ListItem>
  <ListItem>Legal&nbsp;basis: Your consent or our legitimate interest (marketing)</ListItem>
           </Ist>
            
            <Adress>If you are a website visitor:</Adress>
            <Ist>
  <ListItem>Data&nbsp;type: IP address</ListItem>
  <ListItem>Source: Your browing activities</ListItem>
  <ListItem>Purpose: Provision of a smooth user experience on our website</ListItem>
  <ListItem>Legal&nbsp;basis: Legitimate interest</ListItem>
           </Ist>
            
            <Story>Who processes your data? Is data processed by third parties outside the European Economic Area?</Story>
            <Story>In addition to your local tech.at.core, your data may be processed by other tech.at.core group companies.</Story>
            <Story>We also use the following service providers for processing:</Story>
            <Ist>
  <ListItem>Service Provider: Google G-Suite</ListItem>
  <ListItem>Purpose: Email accounts and document management</ListItem>
  <ListItem>Location: EU and US (Privacy Shield, EU Standard Data Protection Clauses)</ListItem>
  <ListItem>Read More: Google Cloud & the General Data Protection Regulation</ListItem>
           </Ist>
           <Gap></Gap>
           <Ist>
  <ListItem>Service Provider: Google Analytics</ListItem>
  <ListItem>Purpose: Website usage analytics</ListItem>
  <ListItem>Location: EU and US (Privacy Shield, EU Standard Data Protection Clauses)</ListItem>
  <ListItem>Read More: Google Analytics - Safeguarding Your Data</ListItem>
           </Ist>
            
              <Contact>How long do we keep your data?</Contact>
              <Adress>If you or your company is a client of tech.at.core, we may process your data as long as the client relationship is in force and for a maximum of 5 years thereafter.</Adress>
              <Adress>If you receive marketing communication from us, we may process your data until you inform us that you do not want to be in our marketing list anymore.</Adress>
              <Adress>If you visit our website, we may process your data for a maximum of 2 years after your visit.</Adress>
              <Contact>How do we use cookies?</Contact>
              <Adress>Cookies are strings of information that may be stored on your computer to recognise and track visitors of our website. Information collected based on cookies can be connected to individual website visitors only based on the IP address, which we as such do not use to identify any specific persons.</Adress>
              <Adress>We only use cookies necessary to run and improve our website experience. For this purpose we use Google Analytics - you can read more on this here.</Adress>
              <Adress>You can always disable cookies by changing your web browser settings, and this should not affect your use of our website.</Adress>
              <Contact>What are your rights?</Contact>
              <Adress>You can at any time ask us to:</Adress>
              <List>confirm if we process any personal data related to you and to deliver an electronic copy of such data,</List>
              <List>correct any inaccurate personal data related to you,</List>
              <List>erase any personal data related to you,</List>
              <List>restrict our processing of any personal data related to you, and</List>
              <List>stop processing any personal data related to you due to personal reasons.</List>
              <Adress>You can always deny us from using any personal data related to you for direct marketing purposes. You can also at any time withdraw your consent for processing your personal data.</Adress>
              <Adress>Requests can be made to your tech.at.core contact person if you have one, or by emailing&nbsp;<InstStyle color="green">hello@techatcore.com</InstStyle>.</Adress>
              <Contact>What if I want to file a complaint?</Contact>
              <Adress>If you disagree with our decision in relation to your request or you think your rights have not been respected, you can always contact us. You can also file a complaint with your local data protection authority:</Adress>
              <List>Germany: Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (Federal Commissioner for Data Protection and Freedom of Information)</List>
              <Contact>Information Security</Contact>
              <Adress>Our employees’ expert knowledge and creative ideas as well as our clients’ intellectual property are the basis for our success. That’s why we care about information security - no matter whether it’s our clients’, service providers’, employees’ or corporate data. To protect it, we have established a high level of protection for the confidentiality, integrity and availability of our processes and information.</Adress>
              <Adress>In order to meet our goal to effectively protect central business processes and the information and IT systems required within, we follow established security standards and have integrated different measures of information security into our internal processes. Defined information security goals help us to meet our business goals and to follow official and regulatory guidelines.</Adress>
              <Adress>We expect our employees to stay conscious about information security in all the tasks they do. tech.at.core as an organisation provides the necessary support and tools for our people to stay on top of information security and corresponding guidelines, so that detected weak spots are brought to the attention of local information security representatives. All in the spirit of continuous improvement that is one of our core values.</Adress>
            </DescContainer>
        </Container>
      </Layout>

    );
  }
}

export default Privacy;