import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  opacity?: string;
  transform?: string;
  duration?: string;
  backgroundColor?: string;
  borderBottom?: string;
  zIndex?: string;
  height?: string;
}

interface IProps {
  style?: IStyle;
}

const Container = styled.div<IStyle>`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  opacity: ${props => props.opacity};
  transform: translateY(${props => props.transform});
  transition-duration: ${props => props.duration}ms;
  background-color: ${props => props.backgroundColor};
  border-bottom: ${props => props.borderBottom};
  z-index: ${props => props.zIndex};
  height: ${props => props.height};
`;

const Presenter: React.SFC<IProps> = ({ style, children }) => {
  return <Container {...style}>{children}</Container>;
};

export default Presenter;
