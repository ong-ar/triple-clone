import * as React from "react";
import styled from "styled-components";
import Header from "../StickyHeaderContainer";

const HeaderLogo = styled.a`
  left: 50px;
  width: 68px;
  height: 24px;
  background-size: 68px 24px;
  background-image: url(https://triple.guide/images/img-intro-logo-dark@2x.png);
  text-indent: -9999px;
  top: 50%;
  position: absolute;
  background-repeat: no-repeat;
  margin: 0px;
  margin-top: -12px;
  padding: 0px;
  text-decoration: none;
`;

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

const StickyHeader: React.FC = () => {
  return (
    <Header
      topOffset={120}
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid rgb(239, 239, 239)",
        height: "80px",
        zIndex: 1
      }}
    >
      <HeaderLogo href="https://triple.guide">TRIPLE</HeaderLogo>
      <ExtraActionsContainer>
        <ExtraActionsItem href="https://triple-corp.com">
          Triple Team
        </ExtraActionsItem>
        <ExtraActionsItem href="https://triple-corp.com/#contact">
          Contact
        </ExtraActionsItem>
      </ExtraActionsContainer>
    </Header>
  );
};

export default StickyHeader;
