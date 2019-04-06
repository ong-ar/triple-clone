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
  width: 77px;
  height: 25px;
  background-size: 77px 25px;
  display: inline-block;
  background-image: ${props => props.background_image};
  vertical-align: top;
  background-repeat: no-repeat;
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
