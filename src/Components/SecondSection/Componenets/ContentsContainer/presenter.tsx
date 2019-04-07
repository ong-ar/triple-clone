import * as React from "react";
import styled, { Keyframes } from "styled-components";

export interface IStyle {
  margin?: string;
  white_space?: string;
  margin_left?: string;
  padding_top?: string;
  opacity?: string;
  animation_duration?: string;
  animation_name?: Keyframes;
  animation_delay?: string;
  animation_fill_mode?: string;
}

interface IProps {
  style?: IStyle;
}

const Container = styled.div<IStyle>`
  opacity: ${props => props.opacity};
  animation-duration: ${props => props.animation_duration};
  animation-name: ${props => props.animation_name};
  animation-delay: ${props => props.animation_delay};
  animation-fill-mode: ${props => props.animation_fill_mode};
  margin: ${props => props.margin};
  white-space: ${props => props.white_space};
  margin-left: ${props => props.margin_left};
  padding-top: ${props => props.padding_top};
`;

const Presenter: React.SFC<IProps> = ({ style, children }) => {
  return <Container {...style}>{children}</Container>;
};

export default Presenter;
