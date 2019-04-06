import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  font_size?: string;
}

interface IProps {
  href?: string;
  style?: IStyle;
}

const ExtraActionItem = styled.a<IStyle>`
  line-height: 80px;
  font-size: ${props => props.font_size};
  height: 80px;
  margin: 0px 0px 0px 34px;
  font-family: sans-serif;
  display: inline-block;
  color: rgba(58, 58, 58, 0.8);
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: rgba(58, 58, 58, 0.8);
  }
`;

const Presenter: React.SFC<IProps> = ({ href, style, children }) => {
  return (
    <ExtraActionItem {...style} href={href}>
      {children}
    </ExtraActionItem>
  );
};

export default Presenter;
