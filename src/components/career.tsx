import React, { Component } from "react";
import Layout from "./layout";
import styled from "@emotion/styled";
import Title from "./common/title";
import Button from "./common/button";
import Header from "./header";
import { Link } from "gatsby";

const valuepath = require("../images/value.svg") as string;
const tickpath = require("../images/tick.svg") as string;
const Jay = require("../images/team/Jay.png") as string;
const Prasad = require("../images/team/prasad.jpg") as string;
const Raju = require("../images/team/RajuSidda.jpeg") as string;
const Chetan = require("../images/team/ChetanBandari.jpg") as string;
const Vijay = require("../images/team/VijayPratap.jpg") as string;
const Vandana = require("../images/team/VandanaKumari.jpg") as string;
const Shiva = require("../images/team/ShivaSai.jpg") as string;
const Sushma = require("../images/team/Sushma.jpg") as string;
const Ravalika = require("../images/team/RavalikaKesari.jpeg") as string;
const Preethi = require("../images/team/Preethi.jpg") as string;
const Vivek = require("../images/team/Vivek.jpg") as string;
const Chary = require("../images/team/Chary.jpg") as string;
const Bhargav = require("../images/team/Bhargav.jpeg") as string;

const Sathwika = require("../images/team/Sathwika.jpg") as string;

const BlogImg = require("../images/blog.png") as string;

const BgShade = styled.div`
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 90px 10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media (max-width:860px){
    width:100%;
    position:relative;
    margin-left:auto;
    margin-right:auto;

`;

const HeadTitle = styled(Title)`
  color: #ffffff;
  text-align:center;
  padding-top: 100px;
  @media (max-width:860px){
    margin-top:20px;
  }
`;

const MenuItem = styled(Link)`
display:none;
@media (max-width:860px){
  margin-top:30px;
  display:block;
  text-decoration:none;
}
`;

const HomeButton = styled(Button)`
  display:none;
  
  @media (max-width:860px){
  position:relative;
  width: 286px;
  height: 48px;
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  border: 2px solid #BBBBBB;
  box-sizing: border-box;
  border-radius: 100px;
  }
`;

const WhyContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`;

const WhyTitle = styled(Title)`
  color: #000000;
  padding: 50px 0;
  
  @media (max-width: 600px){
    margin-top:10px;
    font-size: 30px;
  }
`;

const Desc = styled.p`
  max-width: 817px;
  margin-top:100px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;

  @media (max-width: 817px){
    width:80%;
    margin:0 auto;
    margin-bottom:10px;
    padding: 0 10px;
    font-size: 18px;
    line-height: 1.5;
    display:flex;
    

  }
`;

const Break = styled.br``;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: #f2f2f2;
  margin-top:80px;
  padding: 0 20px 70px

`;

const ValueTitle = styled(Title)`
  color: #000000;
  text-align: center;
  margin:50px;
  padding: 50px 0;
  

  @media (max-width: 600px){
    font-size: 30px;
    margin:0 auto;
  }
`;

const ValueImg = styled.img`
  width:60px;
  height: 60px;
  margin:30px;
 @media (max-width:860px){
   margin:20px;
 }
`;

const ValueContentContainer = styled.div`
  display: flex;
  margin:10%;
  margin-top:30px;
  @media (max-width: 760px){
    width:90%;
    display:flex;
    flex-direction: column;
    align-items:center;
    margin:0% 10%;
    justify-content:center;
    margin-top:0 auto;
    
  }
`;

const ValueContentBlock = styled.div`
  flex: 1;
  margin:10px;
  
  @media (max-width: 760px){
    margin: 0 0 30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

const ValueContentTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 1.5;
  color: #363636;
  margin-top:30px;
  @media (max-width:860px){
    margin-top:10px;
    display:flex;
    text-align:center;
  }
`;

const ValueDesc = styled.p`
  margin-top: 15px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  margin-top:40px;
  
  @media (max-width: 760px){
    font-size: 18px;
    margin-top:10px;
    margin-left:10px;
    text-align:center;
  }
`;

const TechContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media (max-width:860px){
   margin-bottom:40px;
   text-align:center;
   display: flex;
  align-items:center;
  }

`;
const TechTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
  margin-top:60px;
  color: #000000;
  text-align: center;
  padding: 50px 0;
  
  @media (max-width: 860px){
    font-size: 30px;
    padding:48px 0 35px 0;
    margin-top:30px;
  }
`;

const TickContainer = styled.div`
width: 80%;
max-width: 1280px;
display: flex;
align-items:center;
flex-flow:row wrap;
padding-left:90px;
margin: 110px;
  @media (max-width:860px){
    margin:10px;
    padding-left:1px;
    align-items:center;
  }
`;

const TechBox = styled.div`
  width:200px;
  height:56px;
  display:flex;
  flex-direction:row;
  margin-right:105px;
  margin-bottom:40px;
  @media(max-width:860px){
    width:300px;
    margin:0 auto;
  }
`;

const TechTick = styled.img`
  width: 26px;
  height: 26px;
  display:flex;
`;

const TechDesc = styled.div`
  max-width: 226px;
  height: 56px;
  display:flex;
  margin-left:15px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800; 
  font-size: 23px;
  line-height: 1.5;
  color: #363636;
  
  @media (max-width: 600px){
    font-weight:800;
    font-size: 21px;
    line-height:1.2;
  }
`;

const TeamContainer = styled.div`
  width:100%;
  background: #f2f2f2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media (max-width:860px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

  }
`;


const TeamTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
  
  color: #000000;
  text-align: center;
  padding: 40px 0;
  margin-top:50px;
  
  @media (max-width: 600px){
    font-size: 30px;
  
  }
`;
const MemberContainer = styled.div`
  width: 80%;
  max-width: 1580px;
  display: flex;
  flex-flow:row wrap;
  flex-direction:row;
  margin-top:80px;
  padding-left:25px;
  padding-bottom:5%;
  gap: 40px;
  @media (max-width:860px){
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-left:10px;
    padding-bottom:20%;
  }
`;
const TeamBox = styled.div`
  width: 200px;
  height: 280px;
  @media (max-width:860px){
    width:200px;
    dislay:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  
`;

const TeamMember = styled.img`
  width: 100%; 
  max-width: 200px;
  height:200px;
  background: #ffffff;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  user-select:none;
  @media (max-width:860px){
    width: 358px;
    -webkit-filter: grayscale(100%);
     filter: grayscale(100%);
  }
`;

const MemberName = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 1.5;
  color: #363636;
 
  @media (max-width:860px){
    width:200px;
    display:flex;
    flex-flow:row wrap;
  }
`;


const TechName = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
`;

const BlogContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const BlogTitle = styled(Title)`
  color: #000000;
  text-align: center;
  padding: 40px 0;
  margin-top:50px;
`;

const BlogBox = styled.div`
  width: 80%;
  max-width: 1580px;
  display: flex;
  flex-direction:row;
  margin-top:80px;
  padding-bottom:5%;
  gap: 40px;
`;



const BoxOne = styled.div`
  max-width:600px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding-left:30px;
  padding-right:30px;
  border:2px solid red;
  gap:15px;
`;

const BlogLink = styled(Link)`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
`;

const Group = styled.div`
  width:500px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  background: #1E3658;
  margin-top:20px;
  border: 1px solid #1E3658;
  box-sizing: border-box;
  margin-top:50px;
`;

const ImageBlog = styled.img`
  display:flex;
  width:350px;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  
  
`;

const BlogName = styled(Title)`
  font-size:24px;
  font-style:normal;
  color: #363636;
  line-height: 40px;
  font-style: normal;
  text-decoration:none;
  margin-left:5px;

`;

export default class career extends Component {
  render() {
    return (
      <Layout>
        <BgShade>
          <Header index={0}></Header>
          <MenuItem to={"/"}>
          
            <HomeButton width="250px" height="50px" bgColor="none">HOME</HomeButton>
            
          </MenuItem>
          <HeadTitle>Careers</HeadTitle>
        </BgShade>
        <WhyContainer>
          < WhyTitle id="title">Why tech.at.core ?</WhyTitle>
          <Desc>
            We are passionate Software specialist across various disciplines. We
            value quality of work and challenge continuous learning throughout
            the our journey.
            <Break></Break>
            <Break></Break>
            At tech.at.core, we believe human-first approach and you will get
            all the freedom and flexibility to work in your style and technology
            experiments.
            <Break></Break>
            <Break></Break>
            We help with the right mentorship program to have a right career
            path, we provide &nbsp;continuousone-to-one &nbsp;feedback sessions with your &nbsp;
            team and mentor.
            <Break></Break>
            <Break></Break>
            We believe, at tech.at.core you never get bored with the work and
            challenges will have.
          </Desc>
        </WhyContainer>
        <ValuesContainer>
          <ValueTitle>Our values</ValueTitle>
          <ValueContentContainer>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Being Human</ValueContentTitle>
              <ValueDesc>
                We are human-first approach company and everything comes next.
              </ValueDesc>
            </ValueContentBlock>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Unblock people</ValueContentTitle>
              <ValueDesc>
                Helping the team or people around is always comes as a top priority
              </ValueDesc>
            </ValueContentBlock>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Lead by example mindset</ValueContentTitle>
              <ValueDesc>
                Inspire everyone and set the trend and show how to.
              </ValueDesc>
            </ValueContentBlock>
          </ValueContentContainer>
        </ValuesContainer>
        <TechContainer>
          <TechTitle>Life at tech.at.core</TechTitle>

          <TickContainer>
            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Being Human
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Unblock&nbsp;people
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Lead&nbsp;by&nbsp;example&nbsp;mindset
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Flexible&nbsp;working&nbsp;hours
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Flexible&nbsp;working&nbsp;machine
          </TechDesc>
            </TechBox>
          </TickContainer>
        </TechContainer>

        <TeamContainer>
          <TeamTitle>Our team</TeamTitle>

          <MemberContainer>

            <TeamBox>
              <TeamMember src={Jay}></TeamMember>
              <MemberName>Jayasagar Jagirapu</MemberName>
              <TechName>Founder</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Prasad}></TeamMember>
              <MemberName>Prasad Jagirapu</MemberName>
              <TechName>Managing&nbsp;Director</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Ravalika}></TeamMember>
              <MemberName>Ravalika Kesari</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Vijay}></TeamMember>
              <MemberName>Vijay Pratap</MemberName>
              <TechName>Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Chetan}></TeamMember>
              <MemberName>Chetan&nbsp;Kumar Bandari</MemberName>
              <TechName>DevOps Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Shiva}></TeamMember>
              <MemberName>Shiva&nbsp;Sai&nbsp;Dikonda</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Sushma}></TeamMember>
              <MemberName> Sushma Boddu</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Chary}></TeamMember>
              <MemberName> Veera&nbsp;Chary Neerenamula</MemberName>
              <TechName> Software Architect</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Raju}></TeamMember>
              <MemberName>Raju Sidda</MemberName>
              <TechName>Senior&nbsp;Software&nbsp;Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Vivek} ></TeamMember>
              <MemberName>Vivek&nbsp;Tej&nbsp;Aggu</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Preethi}></TeamMember>
              <MemberName>Preethi Bandari</MemberName>
              <TechName>Software Intern</TechName>
            </TeamBox>
            
            <TeamBox>
              <TeamMember src={Vandana}></TeamMember>
              <MemberName>Vandana Kumari</MemberName>
              <TechName>QA Engineer</TechName>
            </TeamBox>
            

            <TeamBox>
              <TeamMember src={Bhargav} ></TeamMember>
              <MemberName> Bhargav&nbsp;Methuku</MemberName>
              <TechName> Senior&nbsp;Software&nbsp;Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Sathwika}></TeamMember>
              <MemberName>Sathwika&nbsp;Potholla</MemberName>
              <TechName>QA Engineer</TechName>
            </TeamBox>

          </MemberContainer>
        </TeamContainer>

        <BlogContainer>
          <BlogTitle>Blog</BlogTitle>
          <BlogBox>
              <BoxOne>
                <Group>
                  <ImageBlog src = {BlogImg}></ImageBlog>
                </Group>
                <BlogLink to ={"/blog1"}>
                    <BlogName>Build a Blog with Gatsby, Netlify and React</BlogName>
                  </BlogLink>
              </BoxOne>
              
              <BoxOne>
                <Group>
                  <ImageBlog src = {BlogImg}></ImageBlog>
                </Group>
                <BlogLink to ={"/a-markdown-page"}>
                    <BlogName>How to Deploy a Gatsby Site to Cloudflare Workers With Cloudbuild(CI/CD)</BlogName>
                </BlogLink>
              </BoxOne>
          </BlogBox>
        </BlogContainer>


      </Layout>
    );
  }
}
