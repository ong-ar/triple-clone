import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  backgroundImage?: string;
}

interface IProps {
  href?: string;
  backgroundImage: string;
  style?: IStyle;
}

const Logo = styled.a<IStyle>`
  left: 50px;
  width: 68px;
  height: 24px;
  background-size: 68px 24px;
  background-image: ${props => props.backgroundImage};
  text-indent: -9999px;
  top: 50%;
  position: absolute;
  background-repeat: no-repeat;
  margin: 0px;
  margin-top: -12px;
  padding: 0px;
  text-decoration: none;
`;

const Header: React.SFC<IProps> = ({
  backgroundImage,
  href,
  style,
  children
}) => {
  return (
    <Logo {...style} backgroundImage={backgroundImage} href={href}>
      {children}
    </Logo>
  );
};

export default Header;
