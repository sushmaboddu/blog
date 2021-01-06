import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Button from "./common/button";

const LogoPath = require("../images/logo_tech.svg") as string;

const TopNav = styled.header`
  position: absolute;
  width: 80%;  
  max-width: 1640px;
  height: 50px;
  left: 100px;
  top: 82px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items:center;

  @media (max-width:614px){
    position:absolute;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    top: 37px;
    left:32px;
    z-index: 2:
  }
`;
const LogoLink = styled(Link)`
  margin-right:auto;
  @media (width:614px){
    position:absolute;
    display:flex;
    flex-direction:row;
    justify-content:center;
    top: 37px;
    border:2px solid red;
    z-index: 2:
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

const MenuContainer = styled.nav`
@media (max-width:768px){
  display:none;
}
`;

const MenuItem = styled(Link)`
  &.active {
    background-color: #0078D7;
    border:2px solid #BBBBBB;
    text-decaration:none;
  }
  &.hover {
    border:2px solid #BBBBBB;
  }
  padding-left: 17.02px;
`;

type stateProps = {
  bgColor: string;
};
type Props = {
  index: number;
};
class Header extends Component<Props, stateProps> {
  constructor(props: Props) {
    super(props);
    this.state = { bgColor: "#0078D7" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ bgColor: "none" });
  }
  render() {
    return (
      <TopNav>
        <LogoLink to={"/"}>
          <LogoTech src={LogoPath} alt="tech.at.core" />
        </LogoLink>
        <MenuContainer>
          <MenuItem to={"/"}>
            <Button
              height="48px"
              width="120.15px"
              bgColor={this.state.bgColor}
              onClick={() => this.handleClick}
              
            >
              HOME
            </Button>
          </MenuItem>
          <MenuItem to={"/careers"}>
            <Button
              height="48px"
              width="140.17px"
              bgColor={this.state.bgColor}
              onClick={() => this.handleClick}
            >
              CAREERS
            </Button>
          </MenuItem>
        </MenuContainer>
      </TopNav>
    );
  }
}

export default Header;