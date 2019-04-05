import * as React from "react";
import styled from "styled-components";

const ExtraActionContainer = styled.a`
  padding-right: 50px;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const Presenter: React.SFC = ({ children }) => {
  return <ExtraActionContainer>{children}</ExtraActionContainer>;
};

export default Presenter;
