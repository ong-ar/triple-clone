import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  background_image?: string;
}

interface IProps {
  href?: string;
  background_image: string;
  style?: IStyle;
}

const Logo = styled.a<IStyle>`
  left: 50px;
  width: 68px;
  height: 24px;
  background-size: 68px 24px;
  background-image: ${props => props.background_image};
  text-indent: -9999px;
  top: 50%;
  position: absolute;
  background-repeat: no-repeat;
  margin: 0px;
  margin-top: -12px;
  padding: 0px;
  text-decoration: none;
`;

const Presenter: React.SFC<IProps> = ({
  background_image,
  href,
  style,
  children
}) => {
  return (
    <Logo {...style} background_image={background_image} href={href}>
      {children}
    </Logo>
  );
};

export default Presenter;
