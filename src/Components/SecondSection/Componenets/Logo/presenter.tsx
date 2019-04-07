import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  background_image?: string;
}

interface IProps {
  background_image: string;
  style?: IStyle;
}

const Logo = styled.div<IStyle>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  background-repeat: no-repeat;
  background-image: ${props => props.background_image};
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  background-repeat: no-repeat;
`;

const Presenter: React.SFC<IProps> = ({
  background_image,
  style,
  children
}) => {
  return (
    <Logo {...style} background_image={background_image}>
      {children}
    </Logo>
  );
};

export default Presenter;
