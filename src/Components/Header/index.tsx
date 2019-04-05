import * as React from "react";
import styled from "styled-components";
import background_img from "../../images/img-main-logo-white@3x.png";
import HeaderContainer from "./Components/HeaderContainer";
import Logo from "./Components/Logo";

const ExtraActionsContainer = styled.div`
  float: right;
`;

const ExtraActionsItem = styled.a`
  font-size: 17px;
  display: inline-block;
  font-family: sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 500;
  height: 100%;
  text-decoration: none;
  margin: 0px 0px 0px 34px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo
        backgroundImage={"url(" + background_img + ")"}
        href="https://triple.guide/intro/"
      />
      <ExtraActionsContainer>
        <ExtraActionsItem href="https://triple-corp.com">
          Triple Team
        </ExtraActionsItem>
        <ExtraActionsItem href="https://triple-corp.com/#contact">
          Contact
        </ExtraActionsItem>
      </ExtraActionsContainer>
    </HeaderContainer>
  );
};

export default Header;
