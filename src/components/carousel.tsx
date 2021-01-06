import * as React from "react";
import styled, { css } from "styled-components";

const Previous = require("../images/Previous.svg") as string;
const Next = require("../images/Next.svg") as string;
const Ellipse = require("../images/Ellipse.svg") as string;


const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#E5E5E5;
  padding-bottom:100px;
`;

const SCarouselWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background:#E5E5E5;
    padding-bottom:100px;

    @media (max-width:860px){
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding-bottom:30px;
      background:#E5E5E5;
    }
`;

const LeftArrow = styled.img`
    width: 40px;
    height: 40px;
    display:flex;
    position:relative;
    margin-top:100px;
    margin-left:40px;
    @media (max-width:860px){
      display:none;
    }
    
    
`;

const RightArrow = styled.img`
    width: 40px;
    height: 40px;
    display:flex;
    position:relative;
    margin-top:100px;
    margin-right:40px;
    
    @media (max-width:860px){
      display:none;
    }
`;

const DotContainer = styled.div`
    width:100%;
    display:flex;
    flex-dirction:row;
    align-items:center;
    margin-top:20px;
    justify-content:center;

    @media (max-width:860px){
      display:flex;
      flex-dirction:row;
      align-items:center;
      margin-top:20px;
      justify-content:center;
      margin-bottom:20px;
    }
`;

const Dot = styled.img`
    // width: 20px;
    // height: 20px;
    margin:10px;

    @media (max-width:86opx){
      margin:5px;
    }
`;

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;

  @media (max-width:860px){
    flex: 0 0 auto;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: all 1.5s ease;
    width: 100%; 
  }
`;

interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <div>
      <Container>
      <SCarouselWrapper>
        <LeftArrow onClick={() => {
          setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);}} src={Previous}>
        </LeftArrow>
          <SCarouselSlides currentSlide={currentSlide}>
            {activeSlide}
          </SCarouselSlides>
        <RightArrow onClick={() => {
          setCurrentSlide((currentSlide + 1) % activeSlide.length);
        }} src={Next}></RightArrow>
</SCarouselWrapper>


        <DotContainer>

          <Dot src={Ellipse} onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
          ></Dot>


          <Dot src={Ellipse} onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
          ></Dot>



          <Dot src={Ellipse} onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
          ></Dot>

        </DotContainer>
        </Container>

    </div>

  );
};

export default Carousel;