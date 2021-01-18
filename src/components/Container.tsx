import * as React from 'react'
import styled from '@emotion/styled'
import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'


const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;



  // position: relative;
  margin-left: 10%;
  margin-right: 10%;
  width:80%;
  display:flex;
  flex-direction:column;
  justify-content:center;

  
  gap:30px;
  max-width:1920px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width:480px){
  margin-left: 20px;
  margin-right: 10px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  }
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
