import * as React from "react";
import styled from "styled-components";

export interface IStyle {
  font_size?: string;
}

interface IProps {
  style?: IStyle;
  count: number;
}

const Metrics = styled.div<IStyle>`
  font-size: ${props => props.font_size}
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`;

const Presenter: React.SFC<IProps> = ({ count, style, children }) => {
  return (
    <Metrics {...style}>
      <strong>{count}</strong>
      {children}
    </Metrics>
  );
};

export default Presenter;
