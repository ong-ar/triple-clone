import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  background_image?: string;
}

interface IProps {
  style?: IStyle;
}

const Award = styled.div<IStyle>`
  background-size: 54px 54px;
  height: 54px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  display: inline-block;
  font-family: sans-serif;
  background-image: ${props => props.background_image};
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  background-position: left top;
  background-repeat: no-repeat;
`;

const Presenter: React.SFC<IProps> = ({ style, children }) => {
  return <Award {...style}>{children}</Award>;
};

export default Presenter;
