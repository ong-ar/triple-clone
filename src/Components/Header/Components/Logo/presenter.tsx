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
  width: 77px;
  height: 25px;
  background-size: 77px 25px;
  display: inline-block;
  background-image: ${props => props.backgroundImage};
  vertical-align: top;
  background-repeat: no-repeat;
`;

const Presenter: React.SFC<IProps> = ({
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

export default Presenter;
