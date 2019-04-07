import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  margin?: string;
  white_space?: string;
  margin_left?: string;
  padding_top?: string;
}

interface IProps {
  style?: IStyle;
}

const Container = styled.div<IStyle>`
  margin: ${props => props.margin};
  white-space: ${props => props.white_space};
  margin-left: ${props => props.margin_left};
  padding-top: ${props => props.padding_top};
`;

const Presenter: React.SFC<IProps> = ({ style, children }) => {
  return <Container {...style}>{children}</Container>;
};

export default Presenter;
