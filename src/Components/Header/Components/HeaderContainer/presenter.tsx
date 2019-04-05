import * as React from "react";
import styled from "styled-components";

const HeaderContainer = styled.a`
  padding: 83px 50px 17px;
  z-index: 1;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
`;

const Presenter: React.SFC = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Presenter;
