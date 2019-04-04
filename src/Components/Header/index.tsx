import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 83px 50px 17px;
  z-index: 1;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
`;

const HeaderLogo = styled.a`
  width: 77px;
  height: 25px;
  background-size: 77px 25px;
  display: inline-block;
  background-image: url(https://triple.guide/intro/images/img-main-logo-white@3x.png);
  vertical-align: top;
  background-repeat: no-repeat;
`;

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
    <Container>
      <HeaderLogo href="https://triple.guide/intro/" />
      <ExtraActionsContainer>
        <ExtraActionsItem href="https://triple-corp.com">
          Triple Team
        </ExtraActionsItem>
        <ExtraActionsItem href="https://triple-corp.com/#contact">
          Contact
        </ExtraActionsItem>
      </ExtraActionsContainer>
    </Container>
  );
};

export default Header;
