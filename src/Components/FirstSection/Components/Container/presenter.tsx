import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  background_image?: string;
}

interface IProps {
  style?: IStyle;
}

const Container = styled.div<IStyle>`
  position: relative;
  background-image: ${props => props.background_image};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  background: inherit inherit inherit inherit inherit inherit inherit;
  background-position: center center;
`;

const Presenter: React.SFC<IProps> = ({ style, children }) => {
  return <Container {...style}>{children}</Container>;
};

export default Presenter;
