import * as React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export interface IStyle {
  background_color?: string;
  border_radius?: string;
  height?: string;
  width?: string;
}

interface IProps {
  href?: string;
  style?: IStyle;
}

const CustomedButton = styled(Button)<IStyle>`
  background-color: ${props => props.background_color};
  border-radius: ${props => props.border_radius};
  height: ${props => props.height};
  width: ${props => props.width};
`;

const Presenter: React.SFC<IProps> = ({ href, style, children }) => {
  return (
    <CustomedButton variant="outline-light" {...style} href={href}>
      {children}
    </CustomedButton>
  );
};

export default Presenter;
