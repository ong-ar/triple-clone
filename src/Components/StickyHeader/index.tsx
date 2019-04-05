import * as React from "react";
import styled from "styled-components";
import background_img from "../../images/img-intro-logo-dark@2x.png";
import Logo from "./Components/Logo";
import HeaderContainer from "./Components/StickyHeaderContainer";

const ExtraActionsContainer = styled.div`
  padding-right: 50px;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const ExtraActionsItem = styled.a`
  line-height: 80px;
  font-size: 17px;
  height: 80px;
  margin: 0px 0px 0px 34px;
  font-family: sans-serif;
  display: inline-block;
  color: rgba(58, 58, 58, 0.8);
  text-decoration: none;
`;

const StickyHeader: React.SFC = () => {
  return (
    <HeaderContainer
      topOffset={120}
      duration={"600"}
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid rgb(239, 239, 239)",
        height: "80px",
        zIndex: "1"
      }}
    >
      <Logo
        backgroundImage={"url(" + background_img + ")"}
        href="https://triple.guide"
      >
        TRIPLE
      </Logo>
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

export default StickyHeader;
