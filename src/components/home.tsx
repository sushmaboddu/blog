import React, { Component } from "react";
import { PageProps } from "gatsby";
import { Link } from "gatsby";

import styled from "@emotion/styled";
import Header from "./header";
import Layout from "./layout";
import Button from "./common/button";
import Title from "./common/title";
import Block from "./common/block";
import Slider from "./slide";
import Slider1 from "./slide1";
import Slider2  from "./slide2";
import CarouselSlide from "./carousel"; 

import { InlineWidget } from "react-calendly";
import { PageSettings, Prefill} from "./calendly/calendly";

import Popup from 'reactjs-popup';


const prefill: Prefill = {
  name: "",
  firstName: "Sushma",
  lastName: "Boddu",
  email: "",
  customAnswers: {
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
    a5: "a5",
    a6: "a6",
    a7: "a7",
    a8: "a8",
    a9: "a9",
    a10: "a10",
  },
};

// const utm: Utm = {
//   utmCampaign: "Spring Sale 2019",
//   utmSource: "Facebook",
//   utmMedium: "Ad",
//   utmContent: "Shoe and Shirts",
//   utmTerm: "Spring",
// };

const pageSettings: PageSettings = {
  backgroundColor: "ffffff",
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: "00a2ff",
  textColor: "4d5055",
};


// const Team = require("../images/banner_background_image.svg") as string;
const PolygonPath = require("../images/Polygon 1.svg") as string;
const Logo1 = require("../images/1.svg") as string;
const Logo2 = require("../images/2.svg") as string;
const Logo3 = require("../images/3.svg") as string;
const Services_1 = require("../images/Services_1.svg") as string;
const Services_2 = require("../images/Services_2.svg") as string;
const Services_3 = require("../images/Services_3.svg") as string;
const Services_4 = require("../images/Services_4.svg") as string;
const Services_5 = require("../images/Services_5.svg") as string;
const Services_6 = require("../images/Services_6.svg") as string;
// const Richard = require("../images/richard1.png") as string;
// const Previous = require("../images/Previous.svg") as string;
// const Next = require("../images/Next.svg") as string;
const Thoght = require("../images/companylogos/thought.png") as string;
const Vodafone = require("../images/companylogos/vodafone.png") as string;
const Bank = require("../images/companylogos/bank.png") as string;
const Vanen = require("../images/companylogos/vanen.png") as string;
const Volks = require("../images/companylogos/volks.png") as string;
const Traton = require("../images/companylogos/tranton.png") as string;
const Market = require("../images/companylogos/market.png") as string;
const United = require("../images/companylogos/unite.png") as string;
const Infor = require("../images/companylogos/infor.png") as string;
const Bmg = require("../images/companylogos/bmg3.png") as string;
const Bosch = require("../images/companylogos/bosch12.png") as string;



const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    // width:1000px;
    overflow: hidden;
    margin-left:50px;
    margin-top:70px;
    z-index:1001;
    
    
  }
    
  // use your custom style for ".popup-content"
  &-content {
    width:1000px;
    height:100%;
    display:inline;
    overflow:auto;
    overscroll-behavior: contain;

    
    }

    &-body {
      overflow:none;
    }

    @media (max-width:860px){
      width:320px;
      height:100%;
      display:flex;
      flex-direction:cloumn;
      justify-content:center;
      align-item:center;
      align-items:center;
      padding-right:20px;
      overflow:hidden;

`;
const Inline = styled(InlineWidget)`
  // width:1200px !important;

  // height: auto !important;
  // overflow: visible !important;
  // overflow:hidden;
  @media (max-width:860px){
    width:320px;
    display:flex;
    flex-direction:cloumn;
    justify-content:center;
    align-item:center;
    align-items:center;
    padding-right:20px;
  }
}
`;


const Banner = styled.div`
  &.bgImage {
    width: 100%;
    background-size: cover;
    
    background-size:contain contain;
    @media (max-width:860px){
    }
  }
  
  &.bgShade {
    background: #000000;
    opacity: 0.96;
    padding-bottom:80px;
    @media (max-width:360px){
     padding-bottom:50px;
    }
  }
`;

const BannerContent = styled.div`
  padding: 80px 0;
  max-width: 85%;
  margin: 0 auto;
  @media (max-width:860px){
    padding-top:60px;
    padding-bottom:0px;
    padding-left:25px;
    width:360px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
  }
`;

const ContentOne = styled(Title)`
  width: 800px;
  color: #ffffff;
  font-size:45px;
  padding: 138px 0 30px;
  
  @media (max-width:860px){
    width: auto;
    font-size: 28px;
    line-height: 1.5;
  }
  
  @media (max-width:480px){
    font-size: 23px;
    padding: 50px 0 30px;
  }
`;

const ContenTwo = styled.div`
  max-width: 724px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 46px;
  color: #ffffff;
  
  @media (max-width:480px){
    font-size: 20px;
    line-height: 1.5;
  }
`;
const ContentThree = styled(Button)`
  background: #0078D7;
  border-radius: 100px;
  margin: 111px 0 50px;
  margin-top:70px;
  font-size:18px;

  
  @media (max-width:480px){
    margin: 50px 0 0;
    
    // align-item:center;
    
  }
`;

const MenuItem = styled(Link)`
display: none;
border-radius: 100px;
@media (max-width:860px){
  display:block;
  text-decoration:none;
}
`;

const CareerButton = styled(Button)`
display:none;
@media (max-width:860px){
  display:block;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height:1.5;
  background-color:none;
  border-radius: 100px;
  margin-top:30px;
  border:2px solid #BBBBBB;
}
`;
const Container = styled.div`
  width: 106px;
  margin: 0 auto;
  margin-top:-85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width:480px){
    display: none;
  }
`;

const ScrollDown = styled.div`
  width: 106px;
  height: 50px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 50px;
  color: white;
  text-decoration:none;
`;

const Polygon = styled.img`
  width: 24px;
  height: 24px;
  
  // margin-top: 10px;
  border-radius: 3px;
`;

const WhyContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top:100px;
  padding-bottom: 70px;
  @media (max-width: 1200px){
    width:100%;
    margin-top:10px;
    padding-bottom:10px;
  
  }
`;

const WhyTitle = styled(Title)`
  color: #000000;
  text-align: center;
  margin-top: 0px;
  padding: 50px 0;
  
  @media (max-width: 800px){
    font-size: 30px;
    line-height: 1;
  }
`;
const BlockContainer = styled.div`
  display: flex;
  margin-top: 100px;
  @media (max-width: 800px){
    width:97.5%;
    flex-direction: column;
    margin-top: 0px;
    padding: 20px;
  }
`;
const BlockLogo = styled.img`
  width: 100px;
  margin: 53px 0 0 49px;
`;

const BlockTitle = styled.h2`
  margin-left:5px;
  margin: 50px 0 0 15px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
  
  @media (max-width: 1200px){
    font-size: 25px;
  }
`;

const BlockDescription = styled.p`
  margin:15px;
  padding-bottom:0px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 1.5;
  color: #000000;
`;

const ServicesContainer = styled.div`
  background-color: #f2f2f2;
  margin-top:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  align-items:center;
  padding-bottom: 80px;
  
`;

const ContainerTitle = styled(Title)`
  color: #000000;
  text-align: center;
  margin: 90px;
  
  @media (max-width: 860px){
    font-size: 30px;
    margin:70px 30px 10px 30px;
    line-height: 1;
  }
`;

const SubContainer = styled.div`
  width: 941px;
  display: flex;
  margin-top:40px;
  
  @media (max-width: 941px){
    padding: 0 10px;
    margin-top:30px;
  }
  
  @media (max-width: 480px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ServiceContentContainer = styled.div`
  flex: 1;
`;

const ServiceLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 40px;
  
  @media (max-width: 480px){
    margin-right: 0;
    margin-bottom: 20px;
    
  }
`;

const ServiceTitle = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 1.5;
  color: #363636;
  margin-bottom: 30px;
  @media (max-width:860px){
    width: 268px;
    height: 64px;
    font-size:24px;
  }
`;

const ServiceDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 30px;
  @media (max-width:860px){
   width:264px;
  }
`;

const More = styled(Link)`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: none;
    color: #0078d7;
    @media (max-width:860px){
      display:flex;
      align-item:left;
    }
  
`;

const BrandContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top:150px;
  padding-bottom: 200px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  align-items:center;
  @media (max-width:860px){
  margin-top:60px;
  padding-bottom:150px;
  }
`;

const BrandTitle = styled(Title)`
 padding:0px;
  
  @media (max-width: 700px){
    font-size: 30px;
    line-height: 1.5;
  }
`;
const BrandImgContainer = styled.div`
  width:80%;
  max-width:1500px;
  margin-top:150px;
  display:flex;
  flex-flow:row wrap;
  padding-left:50px;
  gap:70px;
  @media (max-width:860px){
    margin-top:30px;
    padding:0px 50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;
const BrandImg = styled.img`
  width:120px;
  margin:3px;
  -webkit-filter: invert(.8);
  filter: invert(.8);
    user-select:none;
  

  @media (max-width:860px){
    -webkit-filter: invert(.8);
  filter: invert(.8);
    user-select:none;
    }
  `;
const Slideontainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#E5E5E5;

  @media (max-width:860px){
    max-width:360px;
    width:100%;
    margin: 0 auto;
  }
`;


class Home extends Component {
  constructor(props: PageProps) {
    super(props);

  }

  render() {
    return (
      <Layout>
        <Banner className="bgImage">
          <Banner className="bgShade">
            <BannerContent id="bContent">
              <Header index={0}></Header>
              <ContentOne>

                Over decade experience with poly skills engineering specialists.
              </ContentOne>
              <ContenTwo>
                To work with companies and individuals to solve hard problems
                with a robust, pragmatic approach and the right technology.
              </ContenTwo>
              
              <StyledPopup 
                    trigger={<ContentThree width="250px" height="50px" bgColor="#0078D7">
                    WORK WITH US </ContentThree>}
                    modal
                    closeOnDocumentClick
                    nested
                    >
                    <span> 
                    
                    <Inline
                   
                      url={"https://calendly.com/techatcore/15min"}
                      styles={ {
                        height: "100%",
                        width: "100%",
                      }}
                      
                      prefill={prefill}
                      // utm={ utm}
                      pageSettings={pageSettings}
                      />
                
                   </span>
                </StyledPopup>
                
               
              
              <MenuItem to={"/careers"}>
                <CareerButton width="250px" height="50px" bgColor="none">CAREERS</CareerButton>
              </MenuItem>
            </BannerContent>
            <Link to={"#title"}>
              <Container>
                <ScrollDown>SCROLL&nbsp;DOWN</ScrollDown>
                <Polygon src={PolygonPath}></Polygon>
              </Container>
            </Link>
          </Banner>
        </Banner>

        <WhyContainer>
          <WhyTitle id="title">Why tech.at.core ?</WhyTitle>
          <BlockContainer>
            <Block>
              <BlockLogo src={Logo1} />
              <BlockTitle>Startup mindset</BlockTitle>
              <BlockDescription>
                We enjoy bringing our years of experience into  the startup world,   and we worked with many
                startup teams, so we understand the startup realities, and we know what to expect and how to look into their processes, technology, and product quite well.
              </BlockDescription>
            </Block>
            <Block>
              <BlockLogo src={Logo2} />
              <BlockTitle>Our strategy</BlockTitle>
              <BlockDescription>
                There is no single solution, strategy, or approach for any corporates, startup, or individuals. Every situation is unique,
                and one should approach to solve the problem based on the overall context, situation, and resources at hand. Fail-fast approach, this is where pragmatism comes, and we come into play to help start-ups and corporate to bring this mindset.
              </BlockDescription>
            </Block>
            <Block>
              <BlockLogo src={Logo3} />
              <BlockTitle>Pragmatic thinking</BlockTitle>
              <BlockDescription>
                Technology is the one that shows the direction and brings the business strategy into reality. We are the true believer in
                technology as a core strategy to create world-class innovative and unique solutions to be the outliers in the market.
              </BlockDescription>
            </Block>
          </BlockContainer>
        </WhyContainer>

        <ServicesContainer>
          <ContainerTitle>Our services</ContainerTitle>
          <SubContainer>
            <ServiceLogo src={Services_1}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>
                Product inception & Engineering practices
              </ServiceTitle>
              <ServiceDesc>
                We help you to analyze and start the discovery phase of the
                project and develop a shared understanding.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_2}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>
                Tech Advisory, Solution Design &amp; Architecture
              </ServiceTitle>
              <ServiceDesc>
                With the fact “best result comes from the real experts,” we are
                true poly-skilled experts with the diversified team gives you the
                standard design & architecture.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_3}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>Tech Analysis Report</ServiceTitle>
              <ServiceDesc>
                We help your business take advantage of the emerging technology
                and provide an extremely quality review of upcoming technology and
                feasibility reports.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_4}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>Software Development</ServiceTitle>
              <ServiceDesc>
                With our specialized engineering skills and years of experience,
                we provide best software development solutions and resources.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_5}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>AI Consulting</ServiceTitle>
              <ServiceDesc>
                We help your business take advantage of the emerging technology
                and provide an extremely quality review of upcoming technology and
                feasibility reports.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_6}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>Tech & Engg Due Diligence</ServiceTitle>
              <ServiceDesc>
                Being founders and after working with various startups, we know
                startup pulse well to enable the bridge between founders and VCs.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
        </ServicesContainer>

          
        
        <BrandContainer>
          <BrandTitle>Brands we worked</BrandTitle>
          <BrandImgContainer>
            <BrandImg src={Thoght} ></BrandImg>
            <BrandImg src={Vodafone}></BrandImg>
            <BrandImg src={Bank}></BrandImg>
            <BrandImg src={Vanen}></BrandImg>
            <BrandImg src={Volks}></BrandImg>
            <BrandImg src={Traton}></BrandImg>
            <BrandImg src={Market}></BrandImg>
            <BrandImg src={United}></BrandImg>
            <BrandImg src={Infor}></BrandImg>
            <BrandImg src={Bmg}></BrandImg>
            <BrandImg src={Bosch}></BrandImg>

          </BrandImgContainer>
        </BrandContainer>
    
      <Slideontainer>
        <CarouselSlide>
          <Slider></Slider>
          <Slider1></Slider1>
          <Slider2></Slider2>
        </CarouselSlide>
      </Slideontainer>
      </Layout>
    );
  }
}

export default Home;
