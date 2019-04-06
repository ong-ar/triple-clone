import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  opacity?: string;
  transform?: string;
  duration?: string;
  background_color?: string;
  border_bottom?: string;
  z_index?: string;
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
  transition-duration: ${props => props.duration};
  background-color: ${props => props.background_color};
  border-bottom: ${props => props.border_bottom};
  z-index: ${props => props.z_index};
  height: ${props => props.height};
`;

const Presenter: React.SFC<IProps> = ({ style, children }) => {
  return <Container {...style}>{children}</Container>;
};

export default Presenter;
