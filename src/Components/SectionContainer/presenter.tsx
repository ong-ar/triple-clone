import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  position?: string;
  background_image?: string;
  background_size?: string;
  background_repeat?: string;
  overflow?: string;
  background?: string;
  background_position?: string;
}

interface IProps {
  style?: IStyle;
}

const Container = styled.div<IStyle>`
  position: ${props => props.position};
  overflow: ${props => props.overflow};
  background: ${props => props.background};
  background-image: ${props => props.background_image};
  background-size: ${props => props.background_size};
  background-repeat: ${props => props.background_repeat};
  background-position: ${props => props.background_position};
`;

const Presenter: React.SFC<IProps> = ({ style, children }) => {
  return <Container {...style}>{children}</Container>;
};

export default Presenter;
