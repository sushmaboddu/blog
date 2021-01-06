import * as React from "react";
import styled from "styled-components";
import Title from "./common/title";

const Richard = require("../images/richard1.png") as string;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media (max-width:860px){
    max-width:360px;
    width:100%;
    flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  }
  
`;
 const StoryTitle = styled(Title)`
  display:flex;
  margin-top:50px;
  flex-direction:row;
  text-align:center;

  @media(max-width:860px){
    font-size:26px;
  }
 `;



 const StoryContainer = styled.div`
    width:70%;
    margin-top:100px;
    gap:30px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
 
  @media(max-width:860px){
    width:360px;
    display:flex;
    margin-top:10px;
    flex-direction:column;
    justify-content:center;
    align-items:center;

  }
 `;

 const Image = styled.img`
    display:flex;
    
    @media(max-width:860px){
      display:flex;
      flex-direction:row;
      align-item:center;
    }

 `;
 const StoryCont = styled.div`
    display:flex;
    flex-direction:column;

    @media(max-width:860px){
      width:360px;
      width:80%;
      display:flex;
      flex-direction:column;
      align-item:left;
    }
 `;

 const Story = styled.p`
    display:flex;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.5;
    color: #000000;

    @media (max-width:860px){
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

const Name = styled.div`
  margin-top:20px;
  display:flex;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.5;
  color: #000000;

  @media (max-width:860px){
    font-size:18px;
    display:flex;
    margin-left:30px;
  }
`;



const SlideOne = () => (
      <Container>
        <StoryTitle>Succes&nbsp;Stories</StoryTitle>
        <StoryContainer>
          <Image src={Richard}></Image>
          <StoryCont>
          <Story>With the fact “best result comes from the real experts,” we are true poly-skilled experts with the diversified team gives you the standard design & architecture.
                  <Break></Break>
                  <Break></Break>
                Our diversified team with cutting-edge technology experience can assist you in understanding the right tool, design, and solution for your business use case.
          </Story>
          <Name>-Richard
            <Break></Break> CEO</Name>
          </StoryCont>
        </StoryContainer>
        

    </Container>

);
export default SlideOne;
