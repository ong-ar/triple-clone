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

const StickyHeader: React.SFC = () => {
  return (
    <Header
      topOffset={80}
      style={{ height: "80px", backgroundColor: "red", display: "block" }}
    >
      <HeaderLogo href="https://triple.guide">TRIPLE</HeaderLogo>
    </Header>
  );
};

export default StickyHeader;
